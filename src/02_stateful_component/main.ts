import { render, Component, component } from "ivi";
import * as h from "ivi-html";

const ElapsedTime = component(class extends Component {
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
    return h.div().c(`Elapsed seconds: ${(this.elapsedSeconds / 1000).toFixed(1)}`);
  }
});

render(ElapsedTime(), document.getElementById("app")!);
