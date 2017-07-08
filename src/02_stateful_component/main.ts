import { render, Component, componentFactory } from "ivi";
import * as h from "ivi-html";

class StatefulComponent extends Component {
    startTime = Date.now();
    elapsedSeconds = 0;

    private updateTime = () => {
        this.elapsedSeconds = Date.now() - this.startTime;
        this.invalidate();
        setTimeout(this.updateTime, 50);
    }

    attached() {
        setTimeout(this.updateTime, 50);
    }

    render() {
        return h.div().children(`Elapsed seconds: ${(this.elapsedSeconds / 1000).toFixed(1)}`);
    }
}
const statefulComponent = componentFactory(StatefulComponent);

render(statefulComponent(), document.getElementById("app")!);
