import { render, Component, statefulComponent, VNode } from "ivi";
import { onClick } from "ivi-events";
import { div } from "ivi-html";

const Collapsable = statefulComponent(class extends Component<{ child: VNode<any> }> {
  private collapsed = false;

  private onClick = onClick((ev) => {
    this.collapsed = !this.collapsed;
    this.invalidate();
  });

  render() {
    return div(this.collapsed ? "Collapsable close" : "Collapsable")
      .e(this.onClick)
      .c(this.props.child);
  }
});

render(
  Collapsable({
    child: div().c("Collapsable content"),
  }),
  document.getElementById("app")!,
);
