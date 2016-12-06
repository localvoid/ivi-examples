import { Component, $h, $c } from "ivi";
import { state, addEntry, clearCompleted } from "../state";
import { Header } from "./header";
import { Footer } from "./footer";
import { Main } from "./main";

export class App extends Component<null> {
    onAddEntry = (text: string) => {
        addEntry(text);
    };

    onClearCompleted = () => {
        clearCompleted();
    };

    render() {
        const entries = state.entries;
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
                    $c(Header),
                    $c(Main, {
                        activeEntries: activeEntries,
                        completedEntries: completedEntries,
                    }),
                    $c(Footer, {
                        activeEntries: activeEntries,
                        completedEntries: completedEntries,
                    }),
                ] :
                [$c(Header)]);
    }
}
