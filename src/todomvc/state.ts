import { createAction } from "./xs";

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

    nextEntryId = 0;
}

export const state = new AppState();

export const setLocation = createAction((v: AppLocation) => {
    state.location = v;
});

export const addEntry = createAction((title: string) => {
    title = title.trim();
    if (title !== "") {
        state.entries.push(new Entry(state.nextEntryId++, title, false));
    }
});

export const removeEntry = createAction((entry: Entry) => {
    const items = state.entries;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item === entry) {
            items.splice(i, 1);
            return;
        }
    }
});

export const updateTitle = createAction((data: { entry: Entry, newTitle: string }) => {
    data.newTitle = data.newTitle.trim();
    if (data.newTitle === "") {
        removeEntry(data.entry);
    } else {
        data.entry.title = data.newTitle;
    }
});

export const toggleAll = createAction((checked: boolean) => {
    state.entries.forEach((e) => {
        e.completed = checked;
    });
});

export const toggleEntry = createAction((entry: Entry) => {
    entry.completed = !entry.completed;
});

export const clearCompleted = createAction(() => {
    const items = state.entries;
    const newItems: Entry[] = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (!item.completed) {
            newItems.push(item);
        }
    }
    state.entries = newItems;
});
