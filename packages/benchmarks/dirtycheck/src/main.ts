import {
  _, render, TrackByKey, key, component, onClick, onBlur, invalidate, Events, observable, watch,
  withNextFrame, requestDirtyCheck, onInput, AUTOFOCUS, Op, Key,
} from "ivi";
import { div, input, VALUE } from "ivi-html";
import { startProfile, endProfile, startFPSMonitor, startMemMonitor, initProfiler } from "perf-monitor";

const x = observable(1);
const y = observable(1);

const Field = component((c) => {
  let value = "a";
  let editing = false;
  const edit = onClick(() => {
    editing = true;
    invalidate(c);
  });
  const blur = onBlur(() => {
    editing = false;
    invalidate(c);
  });
  const change = onInput((ev) => {
    value = (ev.target as HTMLInputElement).value;
    invalidate(c);
  });

  return () => {
    watch(x);
    watch(y);
    return [
      editing ? Events([blur, change], input(_, { value: VALUE(value), autofocus: AUTOFOCUS(true) })) : null,
      !editing ? Events(edit, div("field", _, value)) : null,
    ];
  };
});

const Container = component<{ range: number }, (id: number) => Key<number, Op>>(() => {
  return ({ range }, children) => {
    watch(x);
    watch(y);
    const cs = [];
    for (let i = 0; i < range; i++) {
      cs.push(children(i));
    }
    return div(_, _, TrackByKey(cs));
  };
});

const Main = component(() => {
  return () => div("main", _,
    Container({ range: 10 }, (i) => (
      key(i, Container({ range: 10 }, (j) => (
        key(j, Container({ range: 50 }, (k) => (
          key(k, Field())))
        )
      )))
    ))
  );
});

startFPSMonitor();
startMemMonitor();
initProfiler("dirty check");

const container = document.getElementById("app")!;
withNextFrame(() => { render(Main(), container); })();

function tick() {
  startProfile("dirty check");
  withNextFrame(requestDirtyCheck)();
  endProfile("dirty check");

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
