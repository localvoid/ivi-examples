import { render, Component, Events, $h, $c } from "ivi";

class EventsComponent extends Component<null> {
    private counter = 0;

    private onClick = Events.onClick((ev) => {
        this.counter++;
        this.invalidate();
    });

    render() {
        return $h("div")
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

render($c(EventsComponent), document.getElementById("app")!);
