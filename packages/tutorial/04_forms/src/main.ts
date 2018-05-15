import { render, Component, statefulComponent, map } from "ivi";
import * as Events from "ivi-events";
import * as h from "ivi-html";

const Form = statefulComponent(class extends Component<{ onSubmit: (entry: string) => void }> {
  private entry = "";

  private formEvents = [
    Events.onSubmit((ev) => {
      if (this.entry) {
        this.props.onSubmit(this.entry);
        this.entry = "";
        this.invalidate();
      }
      return Events.EventFlags.PreventDefault;
    }),
    Events.onInput((ev) => {
      this.entry = (ev.target as HTMLInputElement).value;
    }),
  ];

  render() {
    return h.form().e(this.formEvents).c(
      h.input()
        .a({ "placeholder": "Entry" })
        .value(this.entry),
      h.button().c("Submit"),
    );
  }
});

const entries: string[] = [];

function update() {
  render(
    h.div().c(
      Form({ onSubmit: onSubmit }),
      h.ul().c(map(entries, (e, i) => h.li().k(i).c(e))),
    ),
    document.getElementById("app")!,
  );
}

function onSubmit(entry: string): void {
  entries.push(entry);
  update();
}

update();
