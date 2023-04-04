import {
  createRoot,
  update,
  component,
  invalidate,
  shallowEq,
  useReducer,
  List,
} from "ivi";
import { htm } from "@ivi/tpl";
import {
  type Entry,
  type AppDispatch,
  type AppState,
  type AppAction,
  ActionType,
  Filter,
} from "./types.js";

let nextId = 0;

const entryKey = (entry: Entry) => entry.id;

const Header = component<AppDispatch>((c) => {
  let _dispatch: AppDispatch;
  let inputValue = "";
  const onKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      _dispatch({ type: ActionType.AddEntry, value: inputValue });
      inputValue = "";
      invalidate(c);
    }
  };
  const onInput = (ev: InputEvent) => {
    inputValue = (ev.target as HTMLInputElement).value;
  };

  return (dispatch: any) => (
    (_dispatch = dispatch),
    /*-c*/ htm`
    header.header h1 'todos'
      input.new-todo
        :placeholder='What needs to be done?'
        @keydown=${onKeyDown}
        @input=${onInput}
        *value=${inputValue}
    `
  );
});

const entryClassName = (isEditing: boolean, isCompleted: boolean) =>
  isEditing
    ? isCompleted
      ? "editing completed"
      : "editing"
    : isCompleted
    ? "completed"
    : "";

const filterClassName = (selected: boolean) => (selected ? "selected" : "");

const autofocus = (element: HTMLElement) => {
  queueMicrotask(() => {
    element.focus();
  });
};

interface EntryViewProps {
  entry: Entry;
  dispatch: AppDispatch;
}

const EntryView = component<EntryViewProps>((c) => {
  let _dispatch: AppDispatch;
  let _entry: Entry;
  let _editText: string | null = null;

  const onToggleChange = () => {
    _dispatch({ type: ActionType.ToggleEntry, id: _entry.id });
  };
  const onDestroyClick = () => {
    _dispatch({ type: ActionType.RemoveEntry, id: _entry.id });
  };
  const onLabelDblClick = () => {
    _editText = _entry.text;
    invalidate(c);
  };
  const onEditInput = (ev: InputEvent) => {
    _editText = (ev.target as HTMLInputElement).value;
  };
  const finishEdit = () => {
    _editText = null;
    invalidate(c);
  };
  const onEditKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === "Enter") {
      _dispatch({
        type: ActionType.EditEntry,
        id: _entry.id,
        value: _editText!,
      });
      finishEdit();
    } else if (ev.key === "Escape") {
      finishEdit();
    }
  };

  return (props) => (
    (_entry = props.entry),
    (_dispatch = props.dispatch),
    htm`
    li${entryClassName(_editText !== null, _entry.isCompleted)}
      div.view
        input.toggle
          :type='checkbox'
          @change=${onToggleChange}
          *checked=${_entry.isCompleted}
        label @dblclick=${onLabelDblClick} =${_entry.text}
        button.destroy @click=${onDestroyClick}

      ${
        _editText &&
        htm`
        input.edit
          @input=${onEditInput}
          @blur=${finishEdit}
          @keydown=${onEditKeyDown}
          *value=${_editText}
          $${autofocus}`
      }
    `
  );
}, shallowEq);

const App = component((c) => {
  addEventListener("hashchange", () => {
    const { hash } = location;
    let newState = Filter.All;
    if (hash === "#/active") {
      newState = Filter.Active;
    } else if (hash === "#/completed") {
      newState = Filter.Completed;
    }
    dispatch({ type: ActionType.SetFilter, value: newState });
  });

  const [_state, dispatch] = useReducer<AppState, AppAction>(
    c,
    { filter: Filter.All, entries: [] },
    (state, action) => {
      switch (action.type) {
        case ActionType.SetFilter:
          return {
            ...state,
            filter: action.value,
          };
        case ActionType.AddEntry:
          return {
            ...state,
            entries: [
              ...state.entries,
              { id: nextId++, text: action.value, isCompleted: false },
            ],
          };
        case ActionType.EditEntry:
          return {
            ...state,
            entries: state.entries.map((e) =>
              e.id === action.id ? { ...e, text: action.value } : e
            ),
          };
        case ActionType.ToggleEntry:
          return {
            ...state,
            entries: state.entries.map((e) =>
              e.id === action.id ? { ...e, isCompleted: !e.isCompleted } : e
            ),
          };
        case ActionType.RemoveEntry:
          return {
            ...state,
            entries: state.entries.filter((e) => e.id !== action.id),
          };
        case ActionType.ToggleAll:
          const areSomeActive = state.entries.some((e) => !e.isCompleted);
          return {
            ...state,
            entries: state.entries.map((e) =>
              e.isCompleted !== areSomeActive
                ? {
                    ...e,
                    isCompleted: areSomeActive,
                  }
                : e
            ),
          };
        case ActionType.RemoveCompleted:
          return {
            ...state,
            entries: state.entries.filter((e) => !e.isCompleted),
          };
      }
    }
  );

  const toggleAll = () => {
    dispatch({ type: ActionType.ToggleAll });
  };
  const clearCompleted = () => dispatch({ type: ActionType.RemoveCompleted });

  return () => {
    const state = _state();
    const filter = state.filter;
    const entries = state.entries;
    const completedEntries = entries.reduce(
      (i, e) => (e.isCompleted ? i + 1 : i),
      0
    );
    const activeEntries = entries.length - completedEntries;
    const isAllCompleted = entries.length === completedEntries;
    let visibleEntries = entries;
    if (filter === Filter.Active) {
      visibleEntries = entries.filter((e) => !e.isCompleted);
    } else if (filter === Filter.Completed) {
      visibleEntries = entries.filter((e) => e.isCompleted);
    }

    return [
      Header(dispatch),
      state.entries.length > 0 &&
        /*-c*/ htm`
        section.main
          input
            :id='toggle-all'
            :type='checkbox'
            @change=${toggleAll}
            *checked=${isAllCompleted}
          label :for='toggle-all' 'Mark all as complete'
          ul.todo-list
            ${List(visibleEntries, entryKey, (entry) =>
              EntryView({ dispatch, entry })
            )}
        footer.footer
          ul.filters
            li a${filterClassName(filter === Filter.All)} :href='#/' 'All'
            li a${filterClassName(
              filter === Filter.Active
            )} :href='#/active' 'Active'
            li a${filterClassName(
              filter === Filter.Completed
            )} :href='#/completed' 'Completed'
          span.todo-count
            strong =${activeEntries ? activeEntries : "No"}
            ${activeEntries === 1 ? " item left" : " items left"}
          ${
            completedEntries > 0 &&
            htm`
            button.clear-completed
              @click=${clearCompleted}
              =${`Clear completed (${completedEntries})`}
            `
          }
        `,
    ];
  };
});

update(createRoot(document.getElementsByClassName("todoapp")[0]!), App());
