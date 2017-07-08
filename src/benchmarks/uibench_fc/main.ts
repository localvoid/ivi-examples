import { Component, VNode, componentFactory, render } from "ivi";
import * as h from "ivi-html";
import * as Events from "ivi-events";

class TableCell extends Component<string> {
    private onClick = Events.onClick((ev) => {
        console.log("Click", this.props);
    });

    render() {
        return h.td("TableCell")
            .events(this.onClick)
            .children(this.props);
    }
}
const tableCell = componentFactory(TableCell);

function TableRow(p: TableItemState) {
    const props = p["props"];
    const id = p["id"];
    const active = p["active"];
    const children = new Array<VNode<any>>(props.length + 1);
    children[0] = tableCell("#" + id);
    for (let i = 0; i < props.length; i++) {
        children[i + 1] = tableCell(props[i]);
    }

    return h.tr(active ? "TableRow active" : "TableRow")
        .props({ "data-id": id })
        .children(children);
}
const tableRow = componentFactory(TableRow);

function Table(p: TableState) {
    const items = p["items"];

    const children = new Array<VNode<any>>(items.length);
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        children[i] = tableRow(item).key(item["id"]);
    }

    return h.table("Table").children(
        h.tbody().children(children),
    );
}
const table = componentFactory(Table);

function AnimBox(p: AnimBoxState) {
    const time = p["time"];

    return h.div("AnimBox")
        .props({ "data-id": p["id"] })
        .style({
            "background": "rgba(0,0,0," + (0.5 + ((time % 10) / 10)) + ")",
            "border-radius": (time % 10) + "px",
        });
}
const animBox = componentFactory(AnimBox);

function Anim(p: AnimState) {
    const items = p["items"];

    const children = new Array<VNode<any>>(items.length);
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        children[i] = animBox(item).key(item["id"]);
    }

    return h.div("Anim").children(children);
}
const anim = componentFactory(Anim);

function TreeLeaf(p: TreeNodeState) {
    return h.li("TreeLeaf").children(p["id"]);
}
const treeLeaf = componentFactory(TreeLeaf);

function TreeNode(p: TreeNodeState) {
    const data = p;
    const children = new Array<VNode<any>>(data["children"].length);
    for (let i = 0; i < data["children"].length; i++) {
        const n = data["children"][i];
        const child = n["container"] ? treeNode(n) : treeLeaf(n);
        children[i] = child.key(n["id"]);
    }

    return h.ul("TreeNode")
        .children(children);
}
const treeNode = componentFactory(TreeNode);

function Tree(p: TreeState) {
    return h.div("Tree")
        .children(treeNode(p["root"]));
}
const tree = componentFactory(Tree);

function Main(p: AppState | undefined) {
    if (!p) {
        return h.div("Main");
    }

    switch (p["location"]) {
        case "table":
            return h.div("Main").children(table(p["table"]));
        case "anim":
            return h.div("Main").children(anim(p["anim"]));
        default: // "tree"
            return h.div("Main").children(tree(p["tree"]));
    }
}
const main = componentFactory(Main);

uibench.init("ivi [fc]", "0.8.0");

document.addEventListener("DOMContentLoaded", (e) => {
    const container = document.querySelector("#App")!;
    render(main(undefined), container);

    uibench.run(
        (state) => {
            render(main(state), container);
        },
        (samples) => {
            render(h.pre().children(JSON.stringify(samples, undefined, 2)), container);
        },
    );
});
