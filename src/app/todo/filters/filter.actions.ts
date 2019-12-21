import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Todo Set Filter';

export type ToDoFilters = 'all' | 'active' | 'completed';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;
  constructor(public filter: ToDoFilters) {}
}

export type FilterActions = SetFilterAction;