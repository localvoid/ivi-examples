import { render, Component, statefulComponent, map } from "ivi";
import { EventFlags, onSubmit, onInput } from "ivi-events";
import { div, button, input, form, ul, li } from "ivi-html";

const Form = statefulComponent(class extends Component<{ onSubmit: (entry: string) => void }> {
  private entry = "";

  private formEvents = [
    onSubmit((ev) => {
      if (this.entry) {
        this.props.onSubmit(this.entry);
        this.entry = "";
        this.invalidate();
      }
      return EventFlags.PreventDefault;
    }),
    onInput((ev) => {
      this.entry = (ev.target as HTMLInputElement).value;
    }),
  ];

  render() {
    return form().e(this.formEvents).c(
      input()
        .a({ "placeholder": "Entry" })
        .value(this.entry),
      button().c("Submit"),
    );
  }
});

const entries: string[] = [];

function update() {
  render(
    div().c(
      Form({ onSubmit: handleSubmit }),
      ul().c(map(entries, (e, i) => li().k(i).c(e))),
    ),
    document.getElementById("app")!,
  );
}

function handleSubmit(entry: string): void {
  entries.push(entry);
  update();
}

update();
