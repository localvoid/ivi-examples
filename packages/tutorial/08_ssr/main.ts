(global as any).__IVI_DEBUG__ = true;
(global as any).__IVI_TARGET__ = "ssr";

import {
  _, statelessComponent, component, useSelect, TrackByKey, key, renderToString,
} from "ivi";
import { div, span, table, tbody, tr, td } from "ivi-html";
import { DB, entryFormatElapsed, getTopFiveQueries, createState, Query } from "./state";

const state = createState(50);

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

const DatabaseList = component<number>((c) => {
  const getDB = useSelect<DB, number>(c, (idx) => state[idx]);

  return (idx) => {
    const db = getDB(idx);
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
  };
});

const Main = (dbs: DB[]) => (
  table("table table-striped latest-data", _, [
    tbody(_, _, TrackByKey(dbs.map((db, i) => key(db.id, DatabaseList(i))))),
  ])
);

console.log(
  renderToString(Main(state))
);
