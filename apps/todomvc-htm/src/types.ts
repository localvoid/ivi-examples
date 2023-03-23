import type { Dispatch } from "ivi/state";

export const enum Filter {
  All,
  Active,
  Completed,
}

export const enum ActionType {
  SetFilter,
  AddEntry,
  EditEntry,
  ToggleEntry,
  RemoveEntry,
  ToggleAll,
  RemoveCompleted,
}

export interface Entry {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface AppState {
  filter: Filter;
  entries: Entry[];
}

export interface SetFilter {
  type: ActionType.SetFilter;
  value: Filter;
}

export interface AddEntry {
  type: ActionType.AddEntry;
  value: string;
}

export interface EditEntry {
  type: ActionType.EditEntry;
  id: number;
  value: string;
}

export interface ToggleEntry {
  type: ActionType.ToggleEntry;
  id: number;
}

export interface RemoveEntry {
  type: ActionType.RemoveEntry;
  id: number;
}

export interface ToggleAll { type: ActionType.ToggleAll; }
export interface RemoveCompleted { type: ActionType.RemoveCompleted; }

export type AppAction =
  | SetFilter
  | AddEntry
  | EditEntry
  | ToggleEntry
  | RemoveEntry
  | ToggleAll
  | RemoveCompleted
  ;

export type AppDispatch = Dispatch<AppAction>;

