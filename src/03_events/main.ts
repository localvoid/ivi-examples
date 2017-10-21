import { render, Component, componentFactory } from "ivi";
import * as Events from "ivi-events";
import * as h from "ivi-html";

class EventsComponent extends Component {
  private counter = 0;

  private onClick = Events.onClick((ev) => {
    this.counter++;
    this.invalidate();
  });

  render() {
    return h.div()
      .events(this.onClick)
      .style({
        "display": "inline-block",
        "border": "1px solid #333",
        "padding": "20px",
        "cursor": "pointer",
        "user-select": "none",
      })
      .children(`Click me: ${this.counter}`);
  }
}
const eventsComponent = componentFactory(EventsComponent);

render(eventsComponent(), document.getElementById("app")!);
