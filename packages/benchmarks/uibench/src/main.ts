import { Component, statefulComponent, VNode, render, map, onClick, setupScheduler, invalidateHandler } from "ivi";
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

const TableRow = statefulComponent(class extends Component<TableItemState> {
  render() {
    const p = this.props;
    const id = p["id"];
    let i = 0;
    return tr(p["active"] ? "TableRow active" : "TableRow", { "data-id": id })
      .c(
        TableCell("#" + id),
        map(p["props"], (item) => TableCell(item).k(i++)),
    );
  }
});

const Table = statefulComponent(class extends Component<TableState> {
  render() {
    return table("Table").c(
      tbody().c(
        map(this.props["items"], (item) => TableRow(item).k(item["id"])),
      ));
  }
});

const AnimBox = statefulComponent(class extends Component<AnimBoxState> {
  render() {
    const time = this.props["time"];

    return div("AnimBox",
      { "data-id": this.props["id"] },
      {
        "background": "rgba(0,0,0," + (0.5 + ((time % 10) / 10)) + ")",
        "border-radius": (time % 10) + "px",
      },
    );
  }
});

const Anim = statefulComponent(class extends Component<AnimState> {
  render() {
    return div("Anim").c(map(this.props["items"], (item) => AnimBox(item).k(item["id"])));
  }
});

const TreeLeaf = statefulComponent(class extends Component<TreeNodeState> {
  render() {
    return li("TreeLeaf").c(this.props["id"]);
  }
});

const TreeNode: any = statefulComponent(class extends Component<TreeNodeState> {
  render() {
    return ul("TreeNode").c(
      map(this.props["children"], (n) => (n["container"] ? TreeNode(n) : TreeLeaf(n)).k(n["id"])),
    );
  }
});

const Tree = statefulComponent(class extends Component<TreeState> {
  render() {
    return div("Tree")
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

const Main = statefulComponent(class extends Component<AppState | undefined> {
  render() {
    const state = this.props;
    return div("Main").c(state ? route(state) : null);
  }
});

uibench.init("ivi", "0.15.0");

setupScheduler(invalidateHandler);

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.querySelector("#App")!;
  render(Main(), container);

  uibench.run(
    (state) => render(Main(state), container),
    (samples) => render(pre().c(JSON.stringify(samples, undefined, 2)), container),
  );
});
