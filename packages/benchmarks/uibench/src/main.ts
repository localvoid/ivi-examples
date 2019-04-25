import { _, statelessComponent, withNextFrame, render, Events, onClick, TrackByKey, key, OpNode } from "ivi";
import { td, tr, table, tbody, div, li, ul, pre } from "ivi-html";

const TableCell = statelessComponent<string>((t) => (
  Events(onClick(() => { console.log("Click", t); }),
    td("TableCell", _, t),
  )
));
const TableRow = statelessComponent<TableItemState>(({ id, active, props }) => (
  tr(active ? "TableRow active" : "TableRow", { "data-id": id }, [
    TableCell("#" + id),
    props.map((item) => TableCell(item)),
  ])
));
const Table = statelessComponent<TableState>((p) => (
  table("Table", _,
    tbody(_, _, TrackByKey(p.items.map((item) => key(item.id, TableRow(item))))),
  )
));
const AnimBox = statelessComponent<AnimBoxState>(({ id, time }) => (
  div("AnimBox", {
    "data-id": id,
    style: {
      "background": "rgba(0,0,0," + (0.5 + ((time % 10) / 10)) + ")",
      "border-radius": (time % 10) + "px",
    },
  })
));
const Anim = statelessComponent<AnimState>((p) => (
  div("Anim", _, TrackByKey(p.items.map((item) => key(item.id, AnimBox(item)))))
));
const TreeLeaf = statelessComponent<TreeNodeState>((p) => li("TreeLeaf", _, p.id));
const TreeNode: any = statelessComponent<TreeNodeState>((p) => (
  ul("TreeNode", _, TrackByKey(p.children.map((n) => key(n.id, n.container ? TreeNode(n) : TreeLeaf(n)))))
));
const Tree = statelessComponent<TreeState>((p) => div("Tree", _, TreeNode(p.root)));

function route(state: AppState): OpNode {
  switch (state.location) {
    case "table": return Table(state.table);
    case "anim": return Anim(state.anim);
    default: return Tree(state.tree);
  }
}

const Main = statelessComponent<AppState | undefined>((state) => div("Main", _, state ? route(state) : null));

uibench.init("ivi", "0.25.0");

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#App")!;
  render(Main(), container);

  uibench.run(
    (state) => withNextFrame(() => { render(Main(state), container); })(),
    (samples) => { render(pre(_, _, JSON.stringify(samples, undefined, 2)), container); },
  );
});
