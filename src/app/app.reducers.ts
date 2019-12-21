import { Todo } from './todo/model/todo.model';
import { ToDoFilters } from './todo/filters/filter.actions';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './todo/filters/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: ToDoFilters;
};

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
};

