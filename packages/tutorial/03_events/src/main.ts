import { render, Component, statefulComponent } from "ivi";
import { onClick } from "ivi-events";
import { div } from "ivi-html";

const ClickMe = statefulComponent(class extends Component {
  private counter = 0;

  private onClick = onClick((ev) => {
    this.counter++;
    this.invalidate();
  });

  render() {
    return div()
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
