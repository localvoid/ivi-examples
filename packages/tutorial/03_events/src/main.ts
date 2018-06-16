import { render, Component, statefulComponent, onClick, _ } from "ivi";
import { div } from "ivi-html";

const STYLE = {
  "display": "inline-block",
  "border": "1px solid #333",
  "padding": "20px",
  "cursor": "pointer",
  "user-select": "none",
};

const ClickMe = statefulComponent(class extends Component {
  private counter = 0;

  private onClick = onClick((ev) => {
    this.counter++;
    this.invalidate();
  });

  render() {
    return (
      div(_, _, STYLE).e(this.onClick).c(`Click me: ${this.counter}`)
    );
  }
});

render(ClickMe(), document.getElementById("app")!);
