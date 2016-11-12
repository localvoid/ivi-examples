import { Component, Events, $h, $i, $c } from "ivi";
import { AppState, Entry, AppLocation } from "../state";

class EntryView extends Component<{
    appState: AppState,
    entry: Entry,
}> {
    private editTitle: string = "";
    private editing: boolean = false;

    private onClickDestroy = Events.onClick((ev) => {
        this.props.appState.removeEntry(this.props.entry);
        ev.preventDefault();
    });

    private onChangeToggle = Events.onChange((ev) => {
        this.props.appState.toggleEntry(this.props.entry);
        ev.preventDefault();
    });

    private onLabelDoubleClick = Events.onDoubleClick((ev) => {
        this.editTitle = this.props.entry.title;
        this.editing = true;
        this.invalidate();
    });

    private onTitleChange = Events.onInput((ev) => {
        this.editTitle = (ev.target as HTMLInputElement).value;
    });

    private onBlur = Events.onBlur((ev) => {
        this.editTitle = "";
        this.editing = false;
        this.invalidate();
    });

    private onKeyDown = Events.onKeyDown((ev) => {
        if (ev.keyCode === 13) {
            this.props.appState.updateTitle(this.props.entry, this.editTitle);
            this.editTitle = "";
            this.editing = false;
            this.invalidate();
        } else if (ev.keyCode === 27) {
            this.editTitle = "";
            this.editing = false;
            this.invalidate();
        }
    });

    render() {
        const { entry } = this.props;
        const view = $h("div", "view").children([
            $i("checkbox", "toggle").events({ change: this.onChangeToggle }).checked(entry.completed),
            $h("label").events({ doubleClick: this.onLabelDoubleClick }).children(entry.title),
            $h("button", "destroy").events({ click: this.onClickDestroy }),
        ]);
        let className;
        let children;
        if (this.editing) {
            className = entry.completed ? "editing completed" : "editing";
            const input = $i("text", "edit")
                .events({
                    input: this.onTitleChange,
                    blur: this.onBlur,
                    keyDown: this.onKeyDown,
                })
                .ref((n) => {
                    if (n) {
                        (n as HTMLElement).focus();
                    }
                })
                .value(this.editTitle);
            children = [view, input];
        } else {
            if (entry.completed) {
                className = "completed";
            }
            children = [view];
        }

        return $h("li", className).children(children);
    }
}

export class EntryList extends Component<{
    appState: AppState,
    activeEntries: number,
    completedEntries: number,
    entries: Entry[],
}> {
    render() {
        const { appState, activeEntries, completedEntries, entries } = this.props;

        let children;
        switch (appState.location) {
            case AppLocation.ShowActive:
                children = activeEntries === 0 ?
                    null :
                    entries.map((e) => !e.completed ? $c(EntryView, { appState: appState, entry: e }).key(e.id) : null);
                break;
            case AppLocation.ShowCompleted:
                children = completedEntries === 0 ?
                    null :
                    entries.map((e) => e.completed ? $c(EntryView, { appState: appState, entry: e }).key(e.id) : null);
                break;
            default: // Location.ShowAll
                children = entries.map((e) => $c(EntryView, { appState: appState, entry: e }).key(e.id));
        }

        return $h("ul")
            .props({ "id": "todo-list" })
            .trackByKeyChildren(children);
    }
}
