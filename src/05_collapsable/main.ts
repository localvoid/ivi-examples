import { render, Component, component, VNode } from "ivi";
import * as Events from "ivi-events";
import * as h from "ivi-html";

const Collapsable = component(class extends Component<{ child: VNode<any> }> {
  private collapsed = false;

  private onClick = Events.onClick((ev) => {
    this.collapsed = !this.collapsed;
    this.invalidate();
  });

  render() {
    return h.div(this.collapsed ? "Collapsable close" : "Collapsable")
      .e(this.onClick)
      .c(this.props.child);
  }
});

render(
  Collapsable({
    child: h.div().c("Collapsable content"),
  }),
  document.getElementById("app")!,
);
