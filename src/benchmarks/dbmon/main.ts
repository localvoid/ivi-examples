import { render, update, VNode, $h, $c, SelectorData, connect } from "ivi";
import { DBList, DB, EMPTY_QUERY } from "./db";
import { startFPSMonitor, startMemMonitor, initProfiler, startProfile, endProfile } from "perf-monitor";

let mutations = 0.5;
let N = 50;

const qs = parseQueryString(window.location.search.substr(1).split("&"));
if (qs["n"] !== undefined) {
    N = parseInt(qs["n"], 10);
}
if (qs["m"] !== undefined) {
    mutations = parseFloat(qs["m"]);
}

const store = new DBList(N);

function entryFormatElapsed(v: number): string {
    if (!v) {
        return "";
    }

    if (v > 60) {
        const minutes = Math.floor(v / 60);
        const comps = (v % 60).toFixed(2).split(".");
        const seconds = comps[0];
        const ms = comps[1];
        return minutes + ":" + seconds + "." + ms;
    }

    return v.toFixed(2);
}

function counterClasses(count: number): string {
    if (count >= 20) {
        return "label label-important";
    } else if (count >= 10) {
        return "label label-warning";
    }
    return "label label-success";
}

function queryClasses(elapsed: number): string {
    if (elapsed >= 10.0) {
        return "Query elapsed warn_long";
    } else if (elapsed >= 1.0) {
        return "Query elapsed warn";
    }
    return "Query elapsed short";
}

function Popover(query: string) {
    return $h("div", "popover left").children([
        $h("div", "popover-content").children(query),
        $h("div", "arrow"),
    ]);
}

function DatabaseView(db: DB) {
    const topFiveQueries = db.getTopFiveQueries();
    const count = db.queries!.length;

    const children = new Array<VNode<any>>(7);
    children[0] = $h("td", "dbname").children(db.name);
    children[1] = $h("td", "query-count").children(
        $h("span", counterClasses(count)).children(count),
    );

    for (let i = 0; i < 5; i++) {
        const q = topFiveQueries[i];
        const elapsed = q.elapsed;

        if (q !== EMPTY_QUERY) {
            children[i + 2] = $h("td", queryClasses(elapsed)).children([
                entryFormatElapsed(elapsed),
                $c(Popover, q.query),
            ]);
        } else {
            children[i + 2] = $h("td", "").children([
                "",
                $c(Popover, q.query),
            ]);
        }
    }

    return $h("tr").children(children);
}

function selectDb(prev: SelectorData<DB, DB>, props: number) {
    const db = store.dbs[props];
    if (prev && prev.in === db) {
        return prev;
    }
    return {
        in: db,
        out: db,
    };
}

const $DBView = connect(selectDb, DatabaseView);

function Main(props: DBList) {
    const dbs = props.dbs;
    const rows = new Array<VNode<any>>(dbs.length);
    for (let i = 0; i < dbs.length; i++) {
        rows[i] = $DBView(i);
    }

    return $h("table")
        .className("table table-striped latest-data")
        .children($h("tbody").children(rows));
}

function parseQueryString(a: string[]): { [key: string]: string } {
    if (a.length === 0) {
        return {};
    }
    const b = {} as { [key: string]: string };
    for (let i = 0; i < a.length; ++i) {
        const p = a[i].split("=", 2);
        if (p.length === 1) {
            b[p[0]] = "";
        } else {
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
    }
    return b;
}

document.addEventListener("DOMContentLoaded", () => {
    startFPSMonitor();
    startMemMonitor();
    initProfiler("view update");

    const sliderContainer = document.createElement("div");
    sliderContainer.style.display = "flex";
    const slider = document.createElement("input");
    slider.type = "range";
    slider.style.marginBottom = "10px";
    slider.style.marginTop = "5px";
    const text = document.createElement("label");
    text.textContent = "mutations : " + (mutations * 100).toFixed(0) + "%";

    slider.addEventListener("change", (e) => {
        mutations = Number.parseFloat((e.target as HTMLInputElement).value) / 100;
        text.textContent = "mutations : " + (mutations * 100).toFixed(0) + "%";
    });
    sliderContainer.appendChild(text);
    sliderContainer.appendChild(slider);
    document.body.insertBefore(sliderContainer, document.body.firstChild);

    const container = document.getElementById("app")!;
    render($c(Main, store), container);

    function tick() {
        store.randomUpdate(mutations);

        startProfile("view update");
        update();
        endProfile("view update");

        setTimeout(tick, 0);
    }
    setTimeout(tick, 0);
});
