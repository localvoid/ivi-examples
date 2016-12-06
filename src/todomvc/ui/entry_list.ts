import { Component, Events, $h, $i, $c, KeyCode, currentFrame } from "ivi";
import { Entry, AppLocation, state, removeEntry, toggleEntry, updateTitle } from "../state";

class EntryView extends Component<Entry> {
    private editTitle: string = "";
    private editing: boolean = false;

    private onClickDestroy = Events.onClick((ev) => {
        removeEntry(this.props);
        ev.preventDefault();
    });

    private onChangeToggle = Events.onChange((ev) => {
        toggleEntry(this.props);
        ev.preventDefault();
    });

    private onLabelDoubleClick = Events.onDoubleClick((ev) => {
        this.editTitle = this.props.title;
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
        switch (ev.keyCode) {
            case (KeyCode.Enter):
                updateTitle({ entry: this.props, newTitle: this.editTitle });
                this.editTitle = "";
                this.editing = false;
                this.invalidate();
                break;
            case (KeyCode.Escape):
                this.editTitle = "";
                this.editing = false;
                this.invalidate();
                break;
        }
    });

    render() {
        const entry = this.props;
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
                        currentFrame().after(() => {
                            (n as HTMLElement).focus();
                        });
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
    activeEntries: number,
    completedEntries: number,
}> {
    render() {
        const entries = state.entries;
        const { activeEntries, completedEntries } = this.props;

        let children;
        switch (state.location) {
            case AppLocation.ShowActive:
                children = activeEntries === 0 ?
                    null :
                    entries.map((e) => !e.completed ? $c(EntryView, e).key(e.id) : null);
                break;
            case AppLocation.ShowCompleted:
                children = completedEntries === 0 ?
                    null :
                    entries.map((e) => e.completed ? $c(EntryView, e).key(e.id) : null);
                break;
            default: // Location.ShowAll
                children = entries.map((e) => $c(EntryView, e).key(e.id));
        }

        return $h("ul")
            .props({ "id": "todo-list" })
            .children(children);
    }
}
