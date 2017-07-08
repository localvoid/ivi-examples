import { render, Component, componentFactory } from "ivi";
import * as Events from "ivi-events";
import * as h from "ivi-html";

class Form extends Component<{
    onSubmit: (entry: string) => void,
}> {
    private entry = "";

    private onSubmit = Events.onSubmit((ev) => {
        if (this.entry) {
            this.props.onSubmit(this.entry);
            this.entry = "";
            this.invalidate();
        }
        ev.preventDefault();
    });

    private onInput = Events.onInput((ev) => {
        this.entry = (ev.target as HTMLInputElement).value;
    });

    render() {
        return h.form()
            .events([
                this.onSubmit,
                this.onInput,
            ])
            .children([
                h.inputText()
                    .props({ "placeholder": "Entry" })
                    .value(this.entry),
                h.button().children("Submit"),
            ]);
    }
}
const form = componentFactory(Form);

const entries: string[] = [];

function update() {
    render(
        h.div().children([
            form({ onSubmit: onSubmit }),
            h.ul().children(entries.map((e) => h.li().children(e))),
        ]),
        document.getElementById("app")!,
    );
}

function onSubmit(entry: string): void {
    entries.push(entry);
    update();
}

update();
