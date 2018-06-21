import { setupScheduler, invalidateHandler, render, Component, statefulComponent } from "ivi";
import { div } from "ivi-html";

const ElapsedTime = statefulComponent(class extends Component {
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
    return div().c(`Elapsed seconds: ${(this.elapsedSeconds / 1000).toFixed(1)}`);
  }
});

setupScheduler(invalidateHandler);

render(ElapsedTime(), document.getElementById("app")!);
