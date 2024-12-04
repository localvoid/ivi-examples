import type { PerfMonitor } from "perf-monitor/component";
import { ema, emaPush } from "perf-monitor";
import { createRoot, update, List, html } from "ivi";

let mutations = 0.5;
let N = 50;

function updateOptions() {
  const opts = location.hash.substring(1).split(",");
  for (const op of opts) {
    const [key, value] = op.split("=");
    if (key === "m") {
      const m = Number.parseFloat(value);
      if (!isNaN(m)) {
        mutations = m;
      }
    } else if (key === "n") {
      const n = Number.parseInt(value, 10);
      if (n > 0) {
        N = n;
      }
    }
  }
}

addEventListener("hashchange", updateOptions);
updateOptions();

interface Query {
  readonly elapsed: number;
  readonly query: string;
}

const random = Math.random;
const floor = Math.floor;

const randomQuery = () => {
  const elapsed = random() * 15;
  let query: string;

  if (random() < 0.1) {
    query = "vacuum";
  } else if (random() < 0.2) {
    query = "<IDLE> in transaction";
  } else {
    query = "SELECT blah FROM something";
  }

  return { elapsed, query };
};

function randomQueries() {
  const queries = [] as Query[];

  const r = floor(random() * 10 + 1);
  for (let i = 0; i < r; i++) {
    queries.push(randomQuery());
  }

  return queries;
}

const EMPTY_QUERY = { elapsed: 0, query: "***" };

const sortByElapsed = (a: Query, b: Query) => a.elapsed - b.elapsed;

const getTopFiveQueries = (queries: Query[]): Query[] => {
  const qs = queries.slice(0, 5);
  qs.sort(sortByElapsed);
  while (qs.length < 5) {
    qs.push(EMPTY_QUERY);
  }
  return qs;
};

interface DB {
  readonly id: number;
  readonly name: string;
  readonly queries: Query[];
  readonly topFive: Query[];
}

let _nextId = 0;
const createDB = (name: string, id?: number): DB => {
  if (id === void 0) {
    id = _nextId++;
  }
  const queries = randomQueries();
  return { id, name, queries, topFive: getTopFiveQueries(queries) };
};

function createState(n: number): DB[] {
  const state: DB[] = [];
  for (let i = 0; i < n; i++) {
    state.push(createDB("cluster" + (i + 1)));
    state.push(createDB("cluster" + (i + 1) + " slave"));
  }
  return state;
}

const randomUpdate = (state: DB[], r: number) => {
  for (let i = 0; i < state.length; i++) {
    if (Math.random() < r) {
      const { id, name } = state[i];
      state[i] = createDB(name, id);
    }
  }
};

const entryFormatElapsed = (v: number): string => {
  if (v === 0) {
    return "";
  }

  if (v > 60) {
    const comps = (v % 60).toFixed(2).split(".");
    return floor(v / 60) + ":" + comps[0].padStart(2, "0") + "." + comps[1];
  }

  return v.toFixed(2);
};

const queryClassName = (elapsed: number): string =>
  elapsed >= 10.0
    ? "Query elapsed warn_long"
    : elapsed >= 1.0
      ? "Query elapsed warn"
      : elapsed > 0
        ? "Query elapsed short"
        : "";

const countClassName = (count: number): string =>
  count >= 20
    ? "label label-important"
    : count >= 10
      ? "label label-warning"
      : "label label-success";

const Cell = ({ elapsed, query }: Query) => html`
  <td class=${queryClassName(elapsed)}>
    ${entryFormatElapsed(elapsed)}
    <div class="popover left">
      <div class="popover-content" .textContent=${query}/>
      <div class="arrow"/>
    </div>
  </td>
`;

const Row = (db: DB) => {
  const topFive = db.topFive;
  const count = db.queries.length;

  return html`
    <tr>
      <td class="dbname" .textContent=${db.name}/>
      <td class="query-count">
        <span class=${countClassName(count)} .textContent=${count}/>
      </td>
      ${Cell(topFive[0])}
      ${Cell(topFive[1])}
      ${Cell(topFive[2])}
      ${Cell(topFive[3])}
      ${Cell(topFive[4])}
    </tr>
  `;
};

const getDBKey = (db: DB) => db.id;

const Main = (dbs: DB[]) => html`
  <table class="table table-striped latest-data">
    <tbody>${List(dbs, getDBKey, Row)}</tbody>
  </table>
`;

const state = createState(N);
const root = createRoot(document.getElementById("app")!, null);
update(root, Main(state));

const dataUpdateTime = ema();
const viewUpdateTime = ema();
const perfMonitor = document.querySelector<PerfMonitor>("perf-monitor")!;
perfMonitor.observe("data update", dataUpdateTime);
perfMonitor.observe("view update", viewUpdateTime);

const perf = performance;

const tick = () => {
  let t0 = perf.now();
  randomUpdate(state, mutations);
  emaPush(dataUpdateTime, perf.now() - t0);
  t0 = perf.now();
  update(root, Main(state));
  emaPush(viewUpdateTime, perf.now() - t0);
  requestAnimationFrame(tick);
};
tick();
