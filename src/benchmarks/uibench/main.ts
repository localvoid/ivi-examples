import { Component, componentFactory, VNode, render } from "ivi";
import * as Events from "ivi-events";
import * as h from "ivi-html";

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

class TableRow extends Component<TableItemState> {
    render() {
        const props = this.props["props"];

        const id = this.props["id"];
        const active = this.props["active"];
        const children = new Array<VNode<any>>(props.length + 1);
        children[0] = tableCell("#" + id);
        for (let i = 0; i < props.length; i++) {
            children[i + 1] = tableCell(props[i]);
        }

        return h.tr(active ? "TableRow active" : "TableRow")
            .props({ "data-id": id })
            .children(children);
    }
}
const tableRow = componentFactory(TableRow);

class Table extends Component<TableState> {
    render() {
        const items = this.props["items"];

        const children = new Array<VNode<any>>(items.length);
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            children[i] = tableRow(item).key(item["id"]);
        }

        return h.table("Table").children(
            h.tbody().children(children));
    }
}
const table = componentFactory(Table);

class AnimBox extends Component<AnimBoxState> {
    render() {
        const time = this.props["time"];

        return h.div("AnimBox")
            .props({ "data-id": this.props["id"] })
            .style({
                "background": "rgba(0,0,0," + (0.5 + ((time % 10) / 10)) + ")",
                "border-radius": (time % 10) + "px",
            });
    }
}
const animBox = componentFactory(AnimBox);

class Anim extends Component<AnimState> {
    render() {
        const items = this.props["items"];

        const children = new Array<VNode<any>>(items.length);
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            children[i] = animBox(item).key(item["id"]);
        }

        return h.div("Anim").children(children);
    }
}
const anim = componentFactory(Anim);

class TreeLeaf extends Component<TreeNodeState> {
    render() {
        return h.li("TreeLeaf").children(this.props["id"]);
    }
}
const treeLeaf = componentFactory(TreeLeaf);

class TreeNode extends Component<TreeNodeState> {
    render() {
        const data = this.props;
        const children = new Array<VNode<any>>(data["children"].length);
        for (let i = 0; i < data["children"].length; i++) {
            const n = data["children"][i];
            const child = n["container"] ? treeNode(n) : treeLeaf(n);
            children[i] = child.key(n["id"]);
        }

        return h.ul("TreeNode")
            .children(children);
    }
}
const treeNode = componentFactory(TreeNode);

class Tree extends Component<TreeState> {
    render() {
        return h.div("Tree")
            .children(treeNode(this.props["root"]));
    }
}
const tree = componentFactory(Tree);

class Main extends Component<AppState | null> {
    render() {
        if (!this.props) {
            return h.div("Main");
        }

        switch (this.props.location) {
            case "table":
                return h.div("Main").children(table(this.props["table"]));
            case "anim":
                return h.div("Main").children(anim(this.props["anim"]));
            default: // "tree"
                return h.div("Main").children(tree(this.props["tree"]));
        }
    }
}
const main = componentFactory(Main);

uibench.init("ivi", "0.8.0");

document.addEventListener("DOMContentLoaded", (e) => {
    const container = document.querySelector("#App")!;
    render(main(null), container);

    uibench.run(
        (state) => {
            render(main(state), container);
        },
        (samples) => {
            render(h.pre().children(JSON.stringify(samples, undefined, 2)), container);
        },
    );
});
