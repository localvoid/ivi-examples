import { render, component, KeyCode, map, onKeyDown, EventFlags, setupScheduler } from "ivi";
import { SCHEDULER, AUTOFOCUS } from "ivi-scheduler";
import { Box, createBox } from "ivi-state";
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

const GameView = component<Box<Game>>(() => {
  let game: Game;

  const keyDown = onKeyDown((ev) => {
    switch (ev.native.keyCode) {
      case KeyCode.ArrowLeft:
        game.setNewDirection(LEFT);
        return EventFlags.PreventDefault;
      case KeyCode.ArrowUp:
        game.setNewDirection(UP);
        return EventFlags.PreventDefault;
      case KeyCode.ArrowRight:
        game.setNewDirection(RIGHT);
        return EventFlags.PreventDefault;
      case KeyCode.ArrowDown:
        game.setNewDirection(DOWN);
        return EventFlags.PreventDefault;
    }
    return;
  });

  return (props) => (
    game = props.value,

    div(game.gameOver ? "SnakeGame gameOver" : "SnakeGame").c(
      div("Grid",
        {
          "tabIndex": 0,
          "autofocus": AUTOFOCUS(true),
        },
        {
          "width": `${CELL_SIZE * game.grid.cols}px`,
          "height": `${CELL_SIZE * game.grid.rows}px`,
        },
      ).e(keyDown).c(
        map(game.grid.cells, (c, i) => div(cellClasses(c)).k(i)),
      ),
    )
  );
});

const CONTAINER = document.getElementById("app")!;
const GAME = new Game();

setupScheduler(SCHEDULER);

function tick() {
  GAME.updateState();
  render(GameView(createBox(GAME)), CONTAINER);
  setTimeout(tick, 100);
}
tick();
