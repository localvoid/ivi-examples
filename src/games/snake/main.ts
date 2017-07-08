import { render, Component, componentFactory, KeyCode } from "ivi";
import { Mutable, mut } from "ivi-state";
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

class GameView extends Component<Mutable<Game>> {
    onKeyDown = Events.onKeyDown((ev) => {
        switch (ev.keyCode) {
            case KeyCode.ArrowLeft:
                ev.preventDefault();
                this.props.ref.setNewDirection(LEFT);
                break;
            case KeyCode.ArrowUp:
                ev.preventDefault();
                this.props.ref.setNewDirection(UP);
                break;
            case KeyCode.ArrowRight:
                ev.preventDefault();
                this.props.ref.setNewDirection(RIGHT);
                break;
            case KeyCode.ArrowDown:
                ev.preventDefault();
                this.props.ref.setNewDirection(DOWN);
                break;
        }
    });

    render() {
        const { grid } = this.props.ref;

        return h.div(this.props.ref.gameOver ? "SnakeGame gameOver" : "SnakeGame")
            .children(h.div("Grid")
                .props({ "tabIndex": 0 })
                .style({
                    "width": `${CELL_SIZE * grid.cols}px`,
                    "height": `${CELL_SIZE * grid.rows}px`,
                })
                .events(this.onKeyDown)
                .autofocus(true)
                .children(grid.cells.map((c) => h.div(cellClasses(c)))),
        );
    }
}
const gameView = componentFactory(GameView);

const container = document.getElementById("app")!;
const game = new Game();

function tick() {
    game.updateState();
    render(gameView(mut(game)), container);
    setTimeout(tick, 100);
}
tick();
