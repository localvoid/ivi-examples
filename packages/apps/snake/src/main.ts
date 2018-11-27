import { render, component, KeyCode, onKeyDown, EventFlags, AUTOFOCUS, Events, TrackByKey, key, _ } from "ivi";
import { Box, createBox } from "ivi-state";
import { div } from "ivi-html";
import { Game, CellFlags, LEFT, RIGHT, UP, DOWN } from "./state";

function cellClassName(flags: CellFlags): string {
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

    div(game.gameOver ? "SnakeGame gameOver" : "SnakeGame", _,
      Events(keyDown,
        div("Grid",
          {
            tabIndex: 0,
            autofocus: AUTOFOCUS(true),
            style: {
              width: `${CELL_SIZE * game.grid.cols}px`,
              height: `${CELL_SIZE * game.grid.rows}px`,
            },
          },
          TrackByKey(game.grid.cells.map((c, i) => key(i, div(cellClassName(c)))),
          ),
        ),
      ),
    )
  );
});

const CONTAINER = document.getElementById("app")!;
const GAME = new Game();

function tick() {
  GAME.updateState();
  render(GameView(createBox(GAME)), CONTAINER);
  setTimeout(tick, 100);
}
tick();
