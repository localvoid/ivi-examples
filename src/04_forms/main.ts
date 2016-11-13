import { render, Component, Events, $h, $i, $c } from "ivi";

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
        return $h("form")
            .events({
                submit: this.onSubmit,
                input: this.onInput,
            })
            .children([
                $i("text")
                    .props({ placeholder: "Entry" })
                    .value(this.entry),
                $h("button").value("Submit"),
            ]);
    }
}

const entries: string[] = [];

function update() {
    render(
        $h("div").children([
            $c(Form, { onSubmit: onSubmit }),
            $h("ul").children(entries.map((e) => $h("li").children(e))),
        ]),
        document.getElementById("app") !,
    );
}

function onSubmit(entry: string): void {
    entries.push(entry);
    update();
}

update();
