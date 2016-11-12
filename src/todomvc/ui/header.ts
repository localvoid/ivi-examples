import { Component, Events, $h, $i } from "ivi";

export class Header extends Component<{
    addEntry: (text: string) => void,
}> {
    private inputValue: string = "";

    private onKeyDown = Events.onKeyDown((ev) => {
        if (ev.keyCode === 13) {
            this.props.addEntry(this.inputValue);
            this.inputValue = "";
            this.invalidate();
        }
    });

    private onInput = Events.onInput((ev) => {
        this.inputValue = (ev.target as HTMLInputElement).value;
        this.invalidate();
    });

    render() {
        return $h("header")
            .children([
                $h("h1").children("todos"),
                $i("text")
                    .props({
                        "id": "new-todo",
                        "placeholder": "What needs to be done",
                        "autofocus": true,
                    })
                    .events({
                        keyDown: this.onKeyDown,
                        input: this.onInput,
                    })
                    .value(this.inputValue),
            ]);
    }
}
