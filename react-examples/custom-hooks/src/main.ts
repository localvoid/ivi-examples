import {
  type Component,
  createRoot,
  update,
  component,
  shallowEqArray,
  useEffect,
  useState,
  html,
} from "ivi";

interface Point {
  x: number;
  y: number;
}

const ZERO: Point = { x: 0, y: 0 };

function useDelayedValue(
  c: Component
): [() => Point, (p: [Point, number]) => void] {
  const [delayedValue, setDelayedValue] = useState(c, ZERO);

  return [
    delayedValue,
    useEffect(
      c,
      ([value, delay]: [Point, number]) => {
        setTimeout(() => {
          setDelayedValue(value);
        }, delay);
      },
      shallowEqArray
    ),
  ];
}

function usePointerPosition(c: Component) {
  const [position, setPosition] = useState(c, ZERO);
  useEffect(c, () => {
    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  })();
  return position;
}

const Canvas = component((c) => {
  const _pos1 = usePointerPosition(c);
  const [_pos2, updatePos2] = useDelayedValue(c);
  const [_pos3, updatePos3] = useDelayedValue(c);
  const [_pos4, updatePos4] = useDelayedValue(c);
  const [_pos5, updatePos5] = useDelayedValue(c);
  return () => {
    const pos1 = _pos1();
    const pos2 = _pos2();
    const pos3 = _pos3();
    const pos4 = _pos4();
    const pos5 = _pos5();
    updatePos2([pos1, 100]);
    updatePos3([pos2, 200]);
    updatePos4([pos3, 100]);
    updatePos5([pos3, 50]);
    return [
      Dot({ position: pos1, opacity: 1 }),
      Dot({ position: pos2, opacity: 0.8 }),
      Dot({ position: pos3, opacity: 0.6 }),
      Dot({ position: pos4, opacity: 0.4 }),
      Dot({ position: pos5, opacity: 0.2 }),
    ];
  };
});

const Dot = ({
  position,
  opacity,
}: {
  position: Point;
  opacity: number;
}) => html`
  <div
    ~position="absolute"
    ~background-color="pink"
    ~border-radius="50%"
    ~pointer-events="none"
    ~left="-20px"
    ~top="-20px"
    ~width="40px"
    ~height="40px"
    ~opacity=${opacity}
    ~transform=${`translate(${position.x}px,${position.y}px)`}
  />
`;

update(createRoot(document.getElementById("app")!), Canvas());
