import {
  _, withNextFrame, render, requestDirtyCheck, statelessComponent, component, useSelect, TrackByKey, key,
} from "ivi";
import { div, span, table, tbody, tr, td } from "ivi-html";
import { startProfile, endProfile } from "perf-monitor";
import { queryClassName, countClassName } from "./css";
import { init, getN, getMutations } from "./init";
import { DB, entryFormatElapsed, getTopFiveQueries, createState, randomUpdate } from "./state";

init();
const state = createState(getN());

const arrow = div("arrow");

const Popover = statelessComponent<string>((query) => (
  div("popover left", _, [
    div("popover-content", _, query),
    arrow,
  ])
));

const DatabaseList = component<number>((c) => {
  const getDB = useSelect<DB, number>(c, (idx) => state[idx]);

  return (idx) => {
    const db = getDB(idx);
    const topFiveQueries = getTopFiveQueries(db);
    const count = db.queries!.length;

    return tr(_, _, [
      td("dbname", _, db.name),
      td("query-count", _, span(countClassName(count), _, count)),
      topFiveQueries.map((q) => (
        td(queryClassName(q.elapsed), _, [
          entryFormatElapsed(q.elapsed),
          Popover(q.query),
        ])
      )),
    ]);
  };
});

const Main = (dbs: DB[]) => (
  table("table table-striped latest-data", _, [
    tbody(_, _, TrackByKey(dbs.map((db, i) => key(db.id, DatabaseList(i))))),
  ])
);

const container = document.getElementById("app")!;
withNextFrame(() => { render(Main(state), container); })();

function tick() {
  randomUpdate(state, getMutations());

  startProfile("view update");
  withNextFrame(requestDirtyCheck)();
  endProfile("view update");

  setTimeout(tick, 0);
}
setTimeout(tick, 0);
