import { observable, Observable, mut } from "ivi";

export interface Query {
  readonly elapsed: number;
  readonly query: string;
}

function randomQuery() {
  const elapsed = Math.random() * 15;
  let query: string;

  if (Math.random() < 0.1) {
    query = "vacuum";
  } else if (Math.random() < 0.2) {
    query = "<IDLE> in transaction";
  } else {
    query = "SELECT blah FROM something";
  }

  return { elapsed, query };
}

function randomQueries() {
  const queries = [] as Query[];

  const r = Math.floor((Math.random() * 10) + 1);
  for (let i = 0; i < r; i++) {
    queries.push(randomQuery());
  }

  return queries;
}

const EMPTY_QUERY = { elapsed: 0, query: "***" };

export interface DB {
  readonly id: number;
  readonly name: string;
  queries: Query[];
}

let _nextId = 0;
function createDB(name: string, id?: number): Observable<DB> {
  if (id === void 0) {
    id = _nextId++;
  }
  return observable({ id, name, queries: randomQueries() });
}

export function getTopFiveQueries(db: DB): Query[] {
  const qs = db.queries.slice(0, 5);
  qs.sort((a, b) => a.elapsed - b.elapsed);
  while (qs.length < 5) {
    qs.push(EMPTY_QUERY);
  }
  return qs;
}

export function createState(n: number) {
  const state = [];
  for (let i = 0; i < n; i++) {
    state.push(createDB("cluster" + (i + 1)));
    state.push(createDB("cluster" + (i + 1) + " slave"));
  }
  return state;
}

export function randomUpdate(state: Observable<DB>[], r: number) {
  for (let i = 0; i < state.length; i++) {
    if (Math.random() < r) {
      mut(state[i]).queries = randomQueries();
    }
  }
}

export function entryFormatElapsed(v: number): string {
  if (v === 0) {
    return "";
  }

  if (v > 60) {
    const minutes = Math.floor(v / 60);
    const comps = (v % 60).toFixed(2).split(".");
    const seconds = comps[0].padStart(2, "0");
    const ms = comps[1];
    return minutes + ":" + seconds + "." + ms;
  }

  return v.toFixed(2);
}
