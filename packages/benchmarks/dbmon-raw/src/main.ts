import { _, withNextFrame, render, TrackByKey, key } from "ivi";
import { div, span, table, tbody, tr, td } from "ivi-html";
import { startProfile, endProfile } from "perf-monitor";
import { queryClassName, countClassName } from "./css";
import { init, getN, getMutations } from "./init";
import { Query, DB, entryFormatElapsed, getTopFiveQueries, createState, randomUpdate } from "./state";

const arrow = div("arrow");

const Popover = (query: string) => (
  div("popover left", _, [
    div("popover-content", _, query),
    arrow,
  ])
);

const Cell = ({ elapsed, query }: Query) => (
  td(queryClassName(elapsed), _, [
    entryFormatElapsed(elapsed),
    Popover(query),
  ])
);

function Row(db: DB) {
  const topFiveQueries = getTopFiveQueries(db);
  const count = db.queries.length;

  return tr(_, _, [
    td("dbname", _, db.name),
    td("query-count", _, span(countClassName(count), _, count)),
    Cell(topFiveQueries[0]),
    Cell(topFiveQueries[1]),
    Cell(topFiveQueries[2]),
    Cell(topFiveQueries[3]),
    Cell(topFiveQueries[4]),
  ]);
}

const Main = (dbs: DB[]) => (
  table("table table-striped latest-data", _,
    tbody(_, _,
      TrackByKey(dbs.map((db) => key(db.id, Row(db)))),
    ),
  )
);

init();
const state = createState(getN());

const container = document.getElementById("app")!;
withNextFrame(() => { render(Main(state), container); })();

function tick() {
  randomUpdate(state, getMutations());
  startProfile("view update");
  withNextFrame(() => { render(Main(state), container); })();
  endProfile("view update");
  requestAnimationFrame(tick);
}
tick();
