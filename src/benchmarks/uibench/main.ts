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

class TableRow extends Component<TableItemState> {
    render() {
        const props = this.props["props"];

        const id = this.props["id"];
        const active = this.props["active"];
        const children = new Array<VNode<any>>(props.length + 1);
        children[0] = $c(TableCell, "#" + id);
        for (let i = 0; i < props.length; i++) {
            children[i + 1] = $c(TableCell, props[i]);
        }

        return $h("tr", active ? "TableRow active" : "TableRow")
            .props({ "data-id": id })
            .children(children);
    }
}

class Table extends Component<TableState> {
    render() {
        const items = this.props["items"];

        const children = new Array<VNode<any>>(items.length);
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            children[i] = $c(TableRow, item).key(item["id"]);
        }

        return $h("table", "Table").children(
            $h("tbody").children([children]));
    }
}

class AnimBox extends Component<AnimBoxState> {
    render() {
        const time = this.props["time"];

        return $h("div", "AnimBox")
            .props({ "data-id": this.props["id"] })
            .style({
                background: "rgba(0,0,0," + (0.5 + ((time % 10) / 10)) + ")",
                borderRadius: (time % 10) + "px",
            });
    }
}

class Anim extends Component<AnimState> {
    render() {
        const items = this.props["items"];

        const children = new Array<VNode<any>>(items.length);
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            children[i] = $c(AnimBox, item).key(item["id"]);
        }

        return $h("div", "Anim").children([children]);
    }
}

class TreeLeaf extends Component<TreeNodeState> {
    render() {
        return $h("li", "TreeLeaf").children(this.props["id"]);
    }
}

class TreeNode extends Component<TreeNodeState> {
    render() {
        const data = this.props;
        const children = new Array<VNode<any>>(data["children"].length);
        for (let i = 0; i < data["children"].length; i++) {
            const n = data["children"][i];
            const child = n["container"] ? $c(TreeNode, n) : $c(TreeLeaf, n);
            children[i] = child.key(n["id"]);
        }

        return $h("ul", "TreeNode")
            .children([children]);
    }
}

class Tree extends Component<TreeState> {
    render() {
        return $h("div", "Tree")
            .children($c(TreeNode, this.props["root"]));
    }
}

class Main extends Component<AppState | undefined> {
    render() {
        if (!this.props) {
            return $h("div", "Main");
        }

        switch (this.props.location) {
            case "table":
                return $h("div", "Main").children($c(Table, this.props["table"]));
            case "anim":
                return $h("div", "Main").children($c(Anim, this.props["anim"]));
            default: // "tree"
                return $h("div", "Main").children($c(Tree, this.props["tree"]));
        }
    }
}

uibench.init("ivi", "0.5.0");

document.addEventListener("DOMContentLoaded", (e) => {
    const container = document.querySelector("#App")!;
    render($c(Main, undefined), container);

    uibench.run(
        (state) => {
            render($c(Main, state), container);
        },
        (samples) => {
            render($h("pre").children(JSON.stringify(samples, undefined, 2)), container);
        }
    );
});
