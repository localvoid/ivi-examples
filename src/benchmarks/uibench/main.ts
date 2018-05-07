import { Component, component, VNode, render, map } from "ivi";
import * as Events from "ivi-events";
import * as h from "ivi-html";

const TableCell = component(class extends Component<string> {
  private onClick = Events.onClick((ev) => {
    console.log("Click", this.props);
  });

  render() {
    return h.td("TableCell")
      .e(this.onClick)
      .c(this.props);
  }
});

const TableRow = component(class extends Component<TableItemState> {
  render() {
    const p = this.props;
    const id = p["id"];
    return h.tr(p["active"] ? "TableRow active" : "TableRow")
      .a({ "data-id": id })
      .c(
        TableCell("#" + id),
        map(p["props"], (item) => TableCell(item))
      );
  }
});

const Table = component(class extends Component<TableState> {
  render() {
    return h.table("Table").c(
      h.tbody().c(
        map(this.props["items"], (item) => TableRow(item).k(item["id"])),
      ));
  }
});

const AnimBox = component(class extends Component<AnimBoxState> {
  render() {
    const time = this.props["time"];

    return h.div("AnimBox")
      .a({ "data-id": this.props["id"] })
      .s({
        "background": "rgba(0,0,0," + (0.5 + ((time % 10) / 10)) + ")",
        "border-radius": (time % 10) + "px",
      });
  }
});

const Anim = component(class extends Component<AnimState> {
  render() {
    return h.div("Anim").c(map(this.props["items"], (item) => AnimBox(item).k(item["id"])));
  }
});

const TreeLeaf = component(class extends Component<TreeNodeState> {
  render() {
    return h.li("TreeLeaf").c(this.props["id"]);
  }
});

const TreeNode: any = component(class extends Component<TreeNodeState> {
  render() {
    return h.ul("TreeNode").c(
      map(this.props["children"], (n) => (n["container"] ? TreeNode(n) : TreeLeaf(n)).k(n["id"]))
    );
  }
});

const Tree = component(class extends Component<TreeState> {
  render() {
    return h.div("Tree")
      .c(TreeNode(this.props["root"]));
  }
});

function route(state: AppState): VNode {
  switch (state["location"]) {
    case "table":
      return Table(state["table"]);
    case "anim":
      return Anim(state["anim"]);
  }
  return Tree(state["tree"]);
}

const Main = component(class extends Component<AppState | undefined> {
  render() {
    const state = this.props;
    return h.div("Main").c(state ? route(state) : null)
  }
});

uibench.init("ivi", "0.10.0");

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.querySelector("#App")!;
  render(Main(), container);

  uibench.run(
    (state) => render(Main(state), container),
    (samples) => render(h.pre().c(JSON.stringify(samples, undefined, 2)), container),
  );
});
