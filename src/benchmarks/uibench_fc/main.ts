import { Component, VNode, $h, $c, render, Events } from "ivi";

class TableCell extends Component<string> {
    private onClick = Events.onClick((ev) => {
        console.log("Click", this.props);
    });

    render() {
        return $h("td", "TableCell")
            .events(this.onClick)
            .children(this.props);
    }
}

function TableRow(p: TableItemState) {
    const props = p["props"];
    const id = p["id"];
    const active = p["active"];
    const children = new Array<VNode<any>>(props.length + 1);
    children[0] = $c(TableCell, "#" + id);
    for (let i = 0; i < props.length; i++) {
        children[i + 1] = $c(TableCell, props[i]);
    }

    return $h("tr", active ? "TableRow active" : "TableRow")
        .props({ "data-id": id })
        .children(children);
}

function Table(p: TableState) {
    const items = p["items"];

    const children = new Array<VNode<any>>(items.length);
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        children[i] = $c(TableRow, item).key(item["id"]);
    }

    return $h("table", "Table").children(
        $h("tbody").children([children]));
}

function AnimBox(p: AnimBoxState) {
    const time = p["time"];

    return $h("div", "AnimBox")
        .props({ "data-id": p["id"] })
        .style({
            background: "rgba(0,0,0," + (0.5 + ((time % 10) / 10)) + ")",
            borderRadius: (time % 10) + "px",
        });
}

function Anim(p: AnimState) {
    const items = p["items"];

    const children = new Array<VNode<any>>(items.length);
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        children[i] = $c(AnimBox, item).key(item["id"]);
    }

    return $h("div", "Anim").children([children]);
}

function TreeLeaf(p: TreeNodeState) {
    return $h("li", "TreeLeaf").children(p["id"]);
}

function TreeNode(p: TreeNodeState) {
    const data = p;
    const children = new Array<VNode<any>>(data["children"].length);
    for (let i = 0; i < data["children"].length; i++) {
        const n = data["children"][i];
        const child = n["container"] ? $c(TreeNode, n) : $c(TreeLeaf, n);
        children[i] = child.key(n["id"]);
    }

    return $h("ul", "TreeNode")
        .children([children]);
}

function Tree(p: TreeState) {
    return $h("div", "Tree")
        .children($c(TreeNode, p["root"]));
}

function Main(p: AppState | undefined) {
    if (!p) {
        return $h("div", "Main");
    }

    switch (p["location"]) {
        case "table":
            return $h("div", "Main").children($c(Table, p["table"]));
        case "anim":
            return $h("div", "Main").children($c(Anim, p["anim"]));
        default: // "tree"
            return $h("div", "Main").children($c(Tree, p["tree"]));
    }
}

uibench.init("ivi [fc]", "0.5.0");

document.addEventListener("DOMContentLoaded", (e) => {
    const container = document.querySelector("#App")!;
    render($c(Main, undefined), container);

    uibench.run(
        (state) => {
            render($c(Main, state), container);
        },
        (samples) => {
            render($h("pre").children(JSON.stringify(samples, undefined, 2)), container);
        },
    );
});
