import { VNode, component, statelessComponent, withNextFrame, render, map, onClick } from "ivi";
import { td, tr, table, tbody, div, li, ul, pre } from "ivi-html";

const TableCell = component<string>(() => {
  let _t: string;
  const click = onClick(() => { console.log("Click", _t); });

  return (t) => (_t = t, td("TableCell").e(click).t(t));
});
const TableRow = statelessComponent<TableItemState>(({ id, active, props }) => (
  tr(active ? "TableRow active" : "TableRow", { "data-id": id }).c(
    TableCell("#" + id), map(props, (item, i) => TableCell(item).k(i)),
  )
));
const Table = statelessComponent<TableState>((p) => (
  table("Table").c(tbody().c(map(p.items, (item) => TableRow(item).k(item.id))))
));
const AnimBox = statelessComponent<AnimBoxState>(({ id, time }) => (
  div("AnimBox", { "data-id": id }, {
    "background": "rgba(0,0,0," + (0.5 + ((time % 10) / 10)) + ")",
    "border-radius": (time % 10) + "px",
  })
));
const Anim = statelessComponent<AnimState>((p) => div("Anim").c(map(p.items, (item) => AnimBox(item).k(item.id))));
const TreeLeaf = statelessComponent<TreeNodeState>((p) => li("TreeLeaf").t(p.id));
const TreeNode: any = statelessComponent<TreeNodeState>((p) => (
  ul("TreeNode").c(map(p.children, (n) => (n.container ? TreeNode(n) : TreeLeaf(n)).k(n.id)))
));
const Tree = statelessComponent<TreeState>((p) => div("Tree").c(TreeNode(p.root)));

function route(state: AppState): VNode {
  switch (state.location) {
    case "table": return Table(state.table);
    case "anim": return Anim(state.anim);
    default: return Tree(state.tree);
  }
}

const Main = statelessComponent<AppState | undefined>((state) => div("Main").c(state ? route(state) : null));

uibench.init("ivi", "0.17.0");

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#App")!;
  render(Main(), container);

  uibench.run(
    (state) => withNextFrame(() => { render(Main(state), container); })(),
    (samples) => render(pre().c(JSON.stringify(samples, undefined, 2)), container),
  );
});
