import {
  _, Component, component, Events, onMouseOut, onMouseOver, containsDOMElement, invalidate, render, onInput, memo,
} from "ivi";
import { div, input, VALUE } from "ivi-html";

const useState = <T>(c: Component, value: T) => (
  (v?: T): T => {
    if (v !== void 0) {
      value = v;
      invalidate(c);
    }
    return value;
  }
);

interface FormInputState {
  value: string;
  onChange: (v: string) => void;
}

interface FormInputProps {
  readonly disabled: boolean;
}

const FormInput = component<FormInputState, FormInputProps>(() => {
  let _state: FormInputState;
  const e = onInput((ev) => { _state.onChange((ev.target as HTMLInputElement).value); });
  return (state, props) => (
    _state = state,
    Events(e,
      input(props.disabled ? "form-input disabled" : "form-input", { value: VALUE(state.value) }),
    )
  );
});

function useFormInput(c: Component, options?: { onChange?: (v: string) => void }) {
  const value = useState(c, "");
  const onChange = (v: string) => {
    value(v);
    if (options && options.onChange) {
      options.onChange(v);
    }
  };
  const state = memo((v: string) => ({ value: v, onChange }));
  return { value, create: (props: FormInputProps) => FormInput(state(value()), props) };
}

function useHover(c: Component) {
  let v = false;
  return {
    state: () => v,
    events: [
      onMouseOver((ev, currentTarget) => {
        if (!containsDOMElement(currentTarget, ev.relatedTarget as Element)) {
          v = true;
          invalidate(c);
        }
      }),
      onMouseOut((ev, currentTarget) => {
        if (!containsDOMElement(currentTarget, ev.relatedTarget as Element)) {
          v = false;
          invalidate(c);
        }
      }),
    ],
  };
}

const Row = component((c) => {
  const hover = useHover(c);
  return () => (
    div("row", _,
      Events(hover.events, [
        div(hover.state() ? "row row-hover" : "row"),
        div(hover.state() ? "row row-hover" : "row"),
      ]),
    )
  );
});

const Collection = component((c) => {
  const formInput = useFormInput(c);
  const hover = useHover(c);
  return () => ([
    [
      formInput.create({ disabled: false }),
      div(_, _, formInput.value()),
    ],
    div(hover.state() ? "collection collection-hover" : "collection", _,
      // hover events will be triggered only when mouse goes over internal rows
      Events(hover.events, [
        Row(),
        Row(),
        Row(),
      ]),
    )
  ]);
});

render(Collection(), document.getElementById("app")!);
