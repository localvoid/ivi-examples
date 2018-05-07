import { render, Component, component, KeyCode, map } from "ivi";
import { Box, createBox } from "ivi-state";
import * as Events from "ivi-events";
import * as h from "ivi-html";
import { Game, CellFlags, LEFT, RIGHT, UP, DOWN } from "./state";

function cellClasses(flags: CellFlags): string {
  if (flags & CellFlags.Body) {
    if (flags & CellFlags.Head) {
      return "Cell body head";
    }
    return "Cell body";
  } else if (flags & CellFlags.Food) {
    return "Cell food";
  }
  return "Cell";
}

const CELL_SIZE = 30;

const GameView = component(class extends Component<Box<Game>> {
  onKeyDown = Events.onKeyDown((ev) => {
    switch (ev.native.keyCode) {
      case KeyCode.ArrowLeft:
        this.props.value.setNewDirection(LEFT);
        return Events.EventFlags.PreventDefault;
      case KeyCode.ArrowUp:
        this.props.value.setNewDirection(UP);
        return Events.EventFlags.PreventDefault;
      case KeyCode.ArrowRight:
        this.props.value.setNewDirection(RIGHT);
        return Events.EventFlags.PreventDefault;
      case KeyCode.ArrowDown:
        this.props.value.setNewDirection(DOWN);
        return Events.EventFlags.PreventDefault;
    }
  });

  render() {
    const { grid } = this.props.value;

    return h.div(this.props.value.gameOver ? "SnakeGame gameOver" : "SnakeGame")
      .c(h.div("Grid")
        .a({ "tabIndex": 0 })
        .s({
          "width": `${CELL_SIZE * grid.cols}px`,
          "height": `${CELL_SIZE * grid.rows}px`,
        })
        .e(this.onKeyDown)
        .autofocus(true)
        .c(map(grid.cells, (c) => h.div(cellClasses(c)))),
    );
  }
});

const container = document.getElementById("app")!;
const game = new Game();

function tick() {
  game.updateState();
  render(GameView(createBox(game)), container);
  setTimeout(tick, 100);
}
tick();
