import {
  createRoot,
  update,
  eventDispatcher,
  component,
  getProps,
  invalidate,
  useReducer,
  List,
  strictEq,
  preventUpdates,
} from "ivi";
import { htm } from "@ivi/tpl";
import {
  type Entry,
  type AppState,
  type AppAction,
  ActionType,
  Filter,
} from "./types.js";

let nextId = 0;

const entryKey = (entry: Entry) => entry.id;
const dispatch = eventDispatcher<AppAction>("dispatch");

const Header = component((c) => {
  let inputValue = "";
  const onKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      dispatch(c, { type: ActionType.AddEntry, value: inputValue });
      inputValue = "";
      invalidate(c);
    }
  };
  const onInput = (ev: InputEvent) => {
    inputValue = (ev.target as HTMLInputElement).value;
  };

  return () => /* preventClone */ htm`
    header.header h1 'Todos'
      input.new-todo
        :placeholder='What needs to be done?'
        @keydown=${onKeyDown}
        @input=${onInput}
        *value=${inputValue}
  `;
}, preventUpdates);

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

const EntryView = component<Entry>((c) => {
  let _editText: string | null = null;

  const onToggleChange = () => {
    dispatch(c, { type: ActionType.ToggleEntry, id: getProps(c).id });
  };
  const onDestroyClick = () => {
    dispatch(c, { type: ActionType.RemoveEntry, id: getProps(c).id });
  };
  const onLabelDblClick = () => {
    _editText = getProps(c).text;
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
      dispatch(c, {
        type: ActionType.EditEntry,
        id: getProps(c).id,
        value: _editText!,
      });
      finishEdit();
    } else if (ev.key === "Escape") {
      finishEdit();
    }
  };

  return ({ isCompleted, text }) =>
    htm`
    li${entryClassName(_editText !== null, isCompleted)}
      div.view
        input.toggle
          :type='checkbox'
          @change=${onToggleChange}
          *checked=${isCompleted}
        label @dblclick=${onLabelDblClick} =${text}
        button.destroy @click=${onDestroyClick}

      ${
        _editText &&
        htm`
        input.edit
          @input=${onEditInput}
          @blur=${finishEdit}
          @keydown=${onEditKeyDown}
          *value=${_editText}
          &=${autofocus}`
      }
    `;
}, strictEq);

const App = component((c) => {
  addEventListener("hashchange", () => {
    const { hash } = location;
    let newState = Filter.All;
    if (hash === "#/active") {
      newState = Filter.Active;
    } else if (hash === "#/completed") {
      newState = Filter.Completed;
    }
    _dispatch({ type: ActionType.SetFilter, value: newState });
  });

  const [_state, _dispatch] = useReducer<AppState, AppAction>(
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

  const onDispatch = (ev: CustomEvent<AppAction>) => {
    _dispatch(ev.detail);
  };

  const toggleAll = () => {
    _dispatch({ type: ActionType.ToggleAll });
  };

  const clearCompleted = () => _dispatch({ type: ActionType.RemoveCompleted });

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

    return /* preventClone */ htm`
      section.todoapp
        @dispatch=${onDispatch}
        ${Header()}
        ${
          state.entries.length > 0 &&
          /* preventClone */ htm`
          section.main
            input
              :id='toggle-all'
              :type='checkbox'
              @change=${toggleAll}
              *checked=${isAllCompleted}
            label :for='toggle-all' 'Mark all as complete'
            ul.todo-list
              ${List(visibleEntries, entryKey, EntryView)}
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
          `
        }
    `;
  };
});

update(createRoot(document.body), App());
