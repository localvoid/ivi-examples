import {
  setupScheduler, BASIC_SCHEDULER, render, component, invalidate, map, EventFlags, onSubmit, onInput, _,
} from "ivi";
import { div, button, input, form, ul, li, VALUE } from "ivi-html";

const Form = component<{ submit: (entry: string) => void }>((c) => {
  let _entry = "";
  let _submit: (entry: string) => void;

  const formEvents = [
    onSubmit(() => {
      if (_entry) {
        _submit(_entry);
        _entry = "";
        invalidate(c);
      }
      return EventFlags.PreventDefault;
    }),
    onInput((ev) => {
      _entry = (ev.target as HTMLInputElement).value;
    }),
  ];

  return ({ submit }) => (
    _submit = submit,
    form().e(formEvents).c(
      input(_, { placeholder: "Entry", value: VALUE(_entry) }),
      button().c("Submit"),
    )
  );
});

const entries: string[] = [];

function update() {
  render(
    div().c(
      Form({ submit: handleSubmit }),
      ul().c(map(entries, (e, i) => li().k(i).c(e))),
    ),
    document.getElementById("app")!,
  );
}

function handleSubmit(entry: string): void {
  entries.push(entry);
  update();
}

setupScheduler(BASIC_SCHEDULER);
update();
