import { render, Component, Events, $h, $c } from "ivi";

class EventsComponent extends Component<null> {
    private counter = 0;

    private onClick = Events.onClick((ev) => {
        this.counter++;
        this.invalidate();
    });

    render() {
        return $h("div")
            .events({
                click: this.onClick,
            })
            .children(`Clicks: ${this.counter}`);
    }
}

render($c(EventsComponent), document.getElementById("app") !);
