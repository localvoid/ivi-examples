import { Component, VNode, $h, $c, render, Events, checkPropsIdentity } from "ivi";

@checkPropsIdentity
class TableCell extends Component<string> {
    private onClick = Events.onClick((ev) => {
        console.log("Click", this.props);
    });

    private cellEvents = { click: this.onClick };

    render() {
        return $h("td", "TableCell")
            .events(this.cellEvents)
            .children(this.props);
    }
}

const TableRow = checkPropsIdentity(function (data: TableItemState) {
    const { props, id, active } = data;
    const children = new Array<VNode<any>>(props.length + 1);
    children[0] = $c(TableCell, "#" + id);
    for (let i = 0; i < props.length; i++) {
        children[i + 1] = $c(TableCell, props[i]);
    }

    return $h("tr", active ? "TableRow active" : "TableRow")
        .props({ "data-id": id })
        .children(children);
});

const Table = checkPropsIdentity(function (props: TableState) {
    const {items} = props;

    const children = new Array<VNode<any>>(items.length);
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        children[i] = $c(TableRow, item).key(item.id);
    }

    return $h("table", "Table").children(
        $h("tbody").trackByKeyChildren(children));
});

const AnimBox = checkPropsIdentity(function (props: AnimBoxState) {
    const { time } = props;

    return $h("div", "AnimBox")
        .props({ "data-id": props.id })
        .style({
            background: "rgba(0,0,0," + (0.5 + ((time % 10) / 10)) + ")",
            borderRadius: (time % 10) + "px",
        });
});

const Anim = checkPropsIdentity(function (props: AnimState) {
    const items = props.items;

    const children = new Array<VNode<any>>(items.length);
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        children[i] = $c(AnimBox, item).key(item.id);
    }

    return $h("div", "Anim").trackByKeyChildren(children);
});

const TreeLeaf = checkPropsIdentity(function (props: TreeNodeState) {
    return $h("li", "TreeLeaf").children(props.id);
});

const TreeNode = checkPropsIdentity(function (data: TreeNodeState) {
    const children = new Array<VNode<any>>(data.children.length);
    for (let i = 0; i < data.children.length; i++) {
        const n = data.children[i];
        const child = n.container ? $c(TreeNode, n) : $c(TreeLeaf, n);
        children[i] = child.key(n.id);
    }

    return $h("ul", "TreeNode")
        .trackByKeyChildren(children);
});

const Tree = checkPropsIdentity(function (props: TreeState) {
    return $h("div", "Tree")
        .children($c(TreeNode, props.root));
});

const Main = checkPropsIdentity(function (props: AppState | undefined) {
    if (!props) {
        return $h("div", "Main");
    }

    switch (props.location) {
        case "table":
            return $h("div", "Main").children($c(Table, props.table));
        case "anim":
            return $h("div", "Main").children($c(Anim, props.anim));
        default: // "tree"
            return $h("div", "Main").children($c(Tree, props.tree));
    }
});

uibench.init("ivi", "0.1.0");

document.addEventListener("DOMContentLoaded", (e) => {
    const container = document.querySelector("#App") !;
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
