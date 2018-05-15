import { render, Component, statefulComponent, KeyCode, map, autofocus } from "ivi";
import { Box, createBox } from "ivi-state";
import { onKeyDown, EventFlags } from "ivi-events";
import { div } from "ivi-html";
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

const GameView = statefulComponent(class extends Component<Box<Game>> {
  onKeyDown = onKeyDown((ev) => {
    switch (ev.native.keyCode) {
      case KeyCode.ArrowLeft:
        this.props.value.setNewDirection(LEFT);
        return EventFlags.PreventDefault;
      case KeyCode.ArrowUp:
        this.props.value.setNewDirection(UP);
        return EventFlags.PreventDefault;
      case KeyCode.ArrowRight:
        this.props.value.setNewDirection(RIGHT);
        return EventFlags.PreventDefault;
      case KeyCode.ArrowDown:
        this.props.value.setNewDirection(DOWN);
        return EventFlags.PreventDefault;
    }
    return;
  });

  render() {
    const { grid } = this.props.value;
    let i = 0;

    return div(this.props.value.gameOver ? "SnakeGame gameOver" : "SnakeGame")
      .c(
        autofocus(
          div("Grid")
            .a({ "tabIndex": 0 })
            .s({
              "width": `${CELL_SIZE * grid.cols}px`,
              "height": `${CELL_SIZE * grid.rows}px`,
            })
            .e(this.onKeyDown)
            .c(map(grid.cells, (c) => div(cellClasses(c)).k(i++))),
        ),
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
