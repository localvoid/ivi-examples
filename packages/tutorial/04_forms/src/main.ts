import { render, component, invalidate, onSubmit, onInput, _, Events, TrackByKey, key } from "ivi";
import { div, button, input, form, ul, li, VALUE } from "ivi-html";

const Form = component<{ submit: (entry: string) => void }>((c) => {
  let _entry = "";
  let _submit: (entry: string) => void;

  const formEvents = onSubmit((ev) => {
    if (_entry) {
      _submit(_entry);
      _entry = "";
      invalidate(c);
    }
    ev.preventDefault();
  });

  const inputEvents = onInput((ev) => {
    _entry = (ev.target as HTMLInputElement).value;
  });

  return ({ submit }) => (
    _submit = submit,
    Events(formEvents,
      form(_, _, [
        Events(inputEvents,
          input(_, { placeholder: "Entry", value: VALUE(_entry) }),
        ),
        button(_, _, "Submit"),
      ]),
    )
  );
});

const entries: string[] = [];

function update() {
  render(
    div(_, _, [
      Form({ submit: handleSubmit }),
      ul(_, _, TrackByKey(entries.map((e, i) => key(i, li(_, _, e))))),
    ]),
    document.getElementById("app")!,
  );
}

function handleSubmit(entry: string): void {
  entries.push(entry);
  update();
}

update();
