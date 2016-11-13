import { render, Component, VNode, Events, $h, $c } from "ivi";

class Collapsable extends Component<{
    child: VNode<any>,
}> {
    private collapsed = false;

    private onClick = Events.onClick((ev) => {
        this.collapsed = !this.collapsed;
        this.invalidate();
    });

    render() {
        return $h("div", this.collapsed ? "Collapsable close" : "Collapsable")
            .events({ click: this.onClick })
            .children(this.props.child);
    }
}

render(
    $c(Collapsable, {
        child: $h("div").children("Collapsable content"),
    }),
    document.getElementById("app") !,
);
