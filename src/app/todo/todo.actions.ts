import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add todo item';
export const TOGGLE_TODO = '[TODO] Toggle todo item';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all todo';
export const UPDATE_TODOITEM = '[TODO] Update todo item';
export const DELETE_TODOITEM = '[TODO] Delete todo item';
export const DELETE_ALL_TODO = '[TODO] Delete all todo';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  constructor(public text: string) {}
};

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;
  constructor(public completed: boolean) {}
}

export class UpdateTodoItemAction implements Action {
  readonly type = UPDATE_TODOITEM;
  constructor(public id: number, public text: string) {}
}

export class DeleteTodoItemAction implements Action {
  readonly type = DELETE_TODOITEM;
  constructor(public id: number) {}
}

export class DeleteAllTodoItemAction implements Action {
  readonly type = DELETE_ALL_TODO;
}

export type TodoActions = AddTodoAction        | 
                          ToggleTodoAction     |
                          ToggleAllTodoAction  |
                          UpdateTodoItemAction |
                          DeleteTodoItemAction |
                          DeleteAllTodoItemAction;

