import {
  _, withNextFrame, render, requestDirtyCheck, statelessComponent, TrackByKey, key, Observable, watch,
} from "ivi";
import { div, span, table, tbody, tr, td } from "ivi-html";
import { startProfile, endProfile } from "perf-monitor";
import { init, getN, getMutations } from "./init";
import { DB, entryFormatElapsed, getTopFiveQueries, createState, randomUpdate, Query } from "./state";

init();
const state = createState(getN());

const arrow = div("arrow");

const Popover = statelessComponent<string>((query) => (
  div("popover left", _, [
    div("popover-content", _, query),
    arrow,
  ])
));

const QueryCell = ({ elapsed, query }: Query) => (
  td(
    elapsed >= 10.0 ? "Query elapsed warn_long" :
      elapsed >= 1.0 ? "Query elapsed warn" :
        "Query elapsed short",
    _,
    [
      entryFormatElapsed(elapsed),
      Popover(query),
    ],
  )
);

const DatabaseList = statelessComponent<Observable<DB>>((odb) => {
  const db = watch(odb);
  const count = db.queries!.length;

  return tr(_, _, [
    td("dbname", _, db.name),
    td("query-count", _,
      span(
        count >= 20 ? "label label-important" :
          count >= 10 ? "label label-warning" :
            "label label-success",
        _,
        count,
      ),
    ),
    getTopFiveQueries(db).map(QueryCell),
  ]);
});

const Main = (dbs: Observable<DB>[]) => (
  table("table table-striped latest-data", _, [
    tbody(_, _, TrackByKey(dbs.map((db) => key(db.v.id, DatabaseList(db))))),
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
