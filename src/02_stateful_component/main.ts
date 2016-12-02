import { render, Component, $h, $c } from "ivi";

class StatefulComponent extends Component<null> {
    startTime = Date.now();
    elapsedSeconds = 0;

    private updateTime = () => {
        this.elapsedSeconds = Date.now() - this.startTime;
        this.invalidate();
        setTimeout(this.updateTime, 50);
    };

    attached() {
        setTimeout(this.updateTime, 50);
    }

    render() {
        return $h("div").children(`Elapsed seconds: ${(this.elapsedSeconds / 1000).toFixed(1)}`);
    }
}

render($c(StatefulComponent), document.getElementById("app") !);
