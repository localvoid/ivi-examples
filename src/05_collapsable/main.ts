import { render, Component, componentFactory, VNode } from "ivi";
import * as Events from "ivi-events";
import * as h from "ivi-html";

class Collapsable extends Component<{
    child: VNode<any>,
}> {
    private collapsed = false;

    private onClick = Events.onClick((ev) => {
        this.collapsed = !this.collapsed;
        this.invalidate();
    });

    render() {
        return h.div(this.collapsed ? "Collapsable close" : "Collapsable")
            .events(this.onClick)
            .children(this.props.child);
    }
}
const collapsable = componentFactory(Collapsable);

render(
    collapsable({
        child: h.div().children("Collapsable content"),
    }),
    document.getElementById("app")!,
);
