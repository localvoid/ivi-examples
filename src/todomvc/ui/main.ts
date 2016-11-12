import { Component, Events, $h, $i, $c } from "ivi";
import { AppState, Entry } from "../state";
import { EntryList } from "./entry_list";

export class Main extends Component<{
    appState: AppState,
    activeEntries: number,
    completedEntries: number,
    entries: Entry[],
}> {
    private onChange = Events.onChange((ev) => {
        ev.preventDefault();
        this.props.appState.toggleAll(this.props.completedEntries !== this.props.entries.length);
    });

    render() {
        return $h("section").props({ "id": "main" })
            .children([
                $i("checkbox")
                    .props({ "id": "toggle-all" })
                    .events({
                        change: this.onChange,
                    })
                    .checked(this.props.completedEntries === this.props.entries.length),
                $c(EntryList, {
                    appState: this.props.appState,
                    activeEntries: this.props.activeEntries,
                    completedEntries: this.props.completedEntries,
                    entries: this.props.entries,
                }),
            ]);
    }
}
