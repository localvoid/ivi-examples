import { Component, VNode, statefulComponent, statelessComponent, render, map, onClick } from "ivi";
import { td, tr, table, tbody, div, li, ul, pre } from "ivi-html";

const TableCell = statefulComponent(class extends Component<string> {
  private onClick = onClick((ev) => {
    console.log("Click", this.props);
  });

  render() {
    return td("TableCell")
      .e(this.onClick)
      .c(this.props);
  }
});

const TableRow = statelessComponent<TableItemState>((p) => {
  const id = p["id"];
  let i = 0;

  return tr(p["active"] ? "TableRow active" : "TableRow")
    .a({ "data-id": id })
    .c(
      TableCell("#" + id),
      map(p["props"], (item) => TableCell(item).k(i++)),
  );
});

const Table = statelessComponent<TableState>((p) => (
  table("Table").c(
    tbody().c(
      map(p["items"], (item) => TableRow(item).k(item["id"])),
    ),
  )
));

const AnimBox = statelessComponent<AnimBoxState>((p) => {
  const time = p["time"];

  return div("AnimBox")
    .a({ "data-id": p["id"] })
    .s({
      "background": "rgba(0,0,0," + (0.5 + ((time % 10) / 10)) + ")",
      "border-radius": (time % 10) + "px",
    });
});

const Anim = statelessComponent<AnimState>((p) => (
  div("Anim").c(map(p["items"], (item) => AnimBox(item).k(item["id"])))
));

const TreeLeaf = statelessComponent<TreeNodeState>((p) => (
  li("TreeLeaf").c(p["id"])
));

const TreeNode: any = statelessComponent<TreeNodeState>((p: TreeNodeState) => (
  ul("TreeNode").c(
    map(p["children"], (n) => (n["container"] ? TreeNode(n) : TreeLeaf(n)).k(n["id"])),
  )
));

const Tree = statelessComponent<TreeState>((p: TreeState) => (
  div("Tree").c(TreeNode(p["root"]))
));

function route(state: AppState): VNode {
  switch (state["location"]) {
    case "table":
      return Table(state["table"]);
    case "anim":
      return Anim(state["anim"]);
  }
  return Tree(state["tree"]);
}

const Main = statelessComponent<AppState | undefined>((state) => (
  div("Main").c(state ? route(state) : null)
));

uibench.init("ivi [fc]", "0.13.0");

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.querySelector("#App")!;
  render(Main(), container);

  uibench.run(
    (state) => render(Main(state), container),
    (samples) => render(pre().c(JSON.stringify(samples, undefined, 2)), container),
  );
});
