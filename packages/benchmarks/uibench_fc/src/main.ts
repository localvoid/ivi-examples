import { Component, VNode, statefulComponent, statelessComponent, render, map } from "ivi";
import * as h from "ivi-html";
import * as Events from "ivi-events";

const TableCell = statefulComponent(class extends Component<string> {
  private onClick = Events.onClick((ev) => {
    console.log("Click", this.props);
  });

  render() {
    return h.td("TableCell")
      .e(this.onClick)
      .c(this.props);
  }
});

const TableRow = statelessComponent<TableItemState>((p) => {
  const id = p["id"];
  let i = 0;

  return h.tr(p["active"] ? "TableRow active" : "TableRow")
    .a({ "data-id": id })
    .c(
      TableCell("#" + id),
      map(p["props"], (item) => TableCell(item).k(i++)),
  );
});

const Table = statelessComponent<TableState>((p) => (
  h.table("Table").c(
    h.tbody().c(
      map(p["items"], (item) => TableRow(item).k(item["id"])),
    ),
  )
));

const AnimBox = statelessComponent<AnimBoxState>((p) => {
  const time = p["time"];

  return h.div("AnimBox")
    .a({ "data-id": p["id"] })
    .s({
      "background": "rgba(0,0,0," + (0.5 + ((time % 10) / 10)) + ")",
      "border-radius": (time % 10) + "px",
    });
});

const Anim = statelessComponent<AnimState>((p) => (
  h.div("Anim").c(map(p["items"], (item) => AnimBox(item).k(item["id"])))
));

const TreeLeaf = statelessComponent<TreeNodeState>((p) => (
  h.li("TreeLeaf").c(p["id"])
));

const TreeNode: any = statelessComponent<TreeNodeState>((p: TreeNodeState) => (
  h.ul("TreeNode").c(
    map(p["children"], (n) => (n["container"] ? TreeNode(n) : TreeLeaf(n)).k(n["id"])),
  )
));

const Tree = statelessComponent<TreeState>((p: TreeState) => (
  h.div("Tree").c(TreeNode(p["root"]))
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
  h.div("Main").c(state ? route(state) : null)
));

uibench.init("ivi [fc]", "0.10.0");

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.querySelector("#App")!;
  render(Main(), container);

  uibench.run(
    (state) => render(Main(state), container),
    (samples) => render(h.pre().c(JSON.stringify(samples, undefined, 2)), container),
  );
});
