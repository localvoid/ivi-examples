import { Component, $h, $c } from "ivi";
import { AppState } from "../state";
import { Header } from "./header";
import { Footer } from "./footer";
import { Main } from "./main";

export class App extends Component<AppState> {
    onAddEntry = (text: string) => {
        this.props.addEntry(text);
    };

    onClearCompleted = () => {
        this.props.clearCompleted();
    };

    render() {
        const { entries } = this.props;
        let completedEntries = 0;
        entries.forEach((e) => {
            if (e.completed) {
                completedEntries++;
            }
        });
        const activeEntries = entries.length - completedEntries;

        return $h("section")
            .children((entries.length > 0) ?
                [
                    $c(Header, { addEntry: this.onAddEntry }),
                    $c(Main, {
                        appState: this.props,
                        activeEntries: activeEntries,
                        completedEntries: completedEntries,
                        entries: entries,
                    }),
                    $c(Footer, {
                        location: this.props.location,
                        activeEntries: activeEntries,
                        completedEntries: completedEntries,
                        onClearCompleted: this.onClearCompleted,
                    }),
                ] :
                [$c(Header, { addEntry: this.onAddEntry })]);
    }
}
