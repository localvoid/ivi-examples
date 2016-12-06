import { Component, Events, $h, $i, $c } from "ivi";
import { state, toggleAll } from "../state";
import { EntryList } from "./entry_list";

export class Main extends Component<{
    activeEntries: number,
    completedEntries: number,
}> {
    private onChange = Events.onChange((ev) => {
        ev.preventDefault();
        toggleAll(this.props.completedEntries !== state.entries.length);
    });

    render() {
        return $h("section").props({ "id": "main" })
            .children([
                $i("checkbox")
                    .props({ "id": "toggle-all" })
                    .events({
                        change: this.onChange,
                    })
                    .checked(this.props.completedEntries === state.entries.length),
                $c(EntryList, {
                    activeEntries: this.props.activeEntries,
                    completedEntries: this.props.completedEntries,
                }),
            ]);
    }
}
