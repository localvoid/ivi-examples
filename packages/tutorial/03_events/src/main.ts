import { render, Component, statefulComponent } from "ivi";
import * as Events from "ivi-events";
import * as h from "ivi-html";

const ClickMe = statefulComponent(class extends Component {
  private counter = 0;

  private onClick = Events.onClick((ev) => {
    this.counter++;
    this.invalidate();
  });

  render() {
    return h.div()
      .e(this.onClick)
      .s({
        "display": "inline-block",
        "border": "1px solid #333",
        "padding": "20px",
        "cursor": "pointer",
        "user-select": "none",
      })
      .c(`Click me: ${this.counter}`);
  }
});

render(ClickMe(), document.getElementById("app")!);
