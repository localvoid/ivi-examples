import { render, component, invalidate, useEffect } from "ivi";
import { div } from "ivi-html";

const ElapsedTime = component((c) => {
  const startTime = Date.now();
  let elapsedSeconds = 0;

  useEffect(c, () => {
    const i = setInterval(() => {
      elapsedSeconds = Date.now() - startTime;
      invalidate(c);
    }, 100);
    return () => clearInterval(i);
  })();

  return () => div().c(`Elapsed seconds: ${(elapsedSeconds / 1000).toFixed(1)}`);
});

render(ElapsedTime(), document.getElementById("app")!);
