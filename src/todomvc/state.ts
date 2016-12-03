import { scheduleMicrotask } from "ivi";

export const enum AppLocation {
    ShowAll = 0,
    ShowActive = 1,
    ShowCompleted = 2,
};

export class Entry {
    id: string;
    title: string;
    completed: boolean;

    constructor(id: number, title: string, completed: boolean) {
        this.id = id.toString();
        this.title = title;
        this.completed = completed;
    }
}

export class AppState {
    location = AppLocation.ShowAll;
    entries: Entry[] = [];
    onChange: () => void;

    _nextEntryId = 0;
    _dirty = false;

    constructor(onChange: () => void) {
        this.onChange = onChange;
    }

    invalidate() {
        if (!this._dirty) {
            this._dirty = true;
            scheduleMicrotask(() => {
                this.onChange();
                this._dirty = false;
            });
        }
    }

    setLocation(v: AppLocation): void {
        this.location = v;
        this.invalidate();
    }

    addEntry(title: string): void {
        title = title.trim();
        if (title !== "") {
            this.entries.push(new Entry(this._nextEntryId++, title, false));
            this.invalidate();
        }
    }

    removeEntry(entry: Entry): void {
        const items = this.entries;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item === entry) {
                items.splice(i, 1);
                this.invalidate();
                return;
            }
        }
    }

    updateTitle(entry: Entry, newTitle: string): void {
        newTitle = newTitle.trim();
        if (newTitle === "") {
            this.removeEntry(entry);
        } else {
            entry.title = newTitle;
        }
        this.invalidate();
    }

    toggleAll(checked: boolean): void {
        this.entries.forEach((e) => {
            e.completed = checked;
        });
        this.invalidate();
    }

    toggleEntry(entry: Entry): void {
        entry.completed = !entry.completed;
        this.invalidate();
    }

    clearCompleted(): void {
        const items = this.entries;
        const newItems: Entry[] = [];
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (!item.completed) {
                newItems.push(item);
            }
        }
        this.entries = newItems;
        this.invalidate();
    }
}
