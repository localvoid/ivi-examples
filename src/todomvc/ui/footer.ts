import { Component, Events, $h } from "ivi";
import { AppLocation, state, clearCompleted } from "../state";

export class Footer extends Component<{
    activeEntries: number,
    completedEntries: number,
}> {
    onClickClearCompleted = Events.onClick((ev) => {
        ev.preventDefault();
        clearCompleted();
    });

    render() {
        const location = state.location;
        const { activeEntries, completedEntries } = this.props;

        return $h("footer").props({ id: "footer" })
            .children([
                $h("ul").props({ "id": "filters" }).children([
                    $h("li").children($h("a", location === AppLocation.ShowAll ? "selected" : undefined)
                        .props({ "href": "#!/" }).children("All")),
                    " ",
                    $h("li").children($h("a", location === AppLocation.ShowActive ? "selected" : undefined)
                        .props({ "href": "#!/active" }).children("Active")),
                    " ",
                    $h("li").children($h("a", location === AppLocation.ShowCompleted ? "selected" : undefined)
                        .props({ "href": "#!/completed" }).children("Completed")),
                ]),
                $h("span").props({ "id": "todo-count" }).children([
                    $h("strong").children(activeEntries),
                    (activeEntries > 1) ? " items left" : " item left",
                ]),
                (completedEntries > 0) ?
                    $h("button")
                        .props({ "id": "clear-completed" })
                        .events({ click: this.onClickClearCompleted })
                        .children(`Clear completed (${completedEntries})`) :
                    null,
            ]);
    }
}
