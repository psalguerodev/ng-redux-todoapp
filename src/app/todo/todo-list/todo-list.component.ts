import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { ToggleAllTodoAction } from '../todo.actions';
import { ToDoFilters } from '../filters/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  toggleCompleted: boolean;
  currentFilter: ToDoFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.currentFilter = state.filter;
    });
  }

  toggleAll() {
    this.toggleCompleted = !this.toggleCompleted;
    const action = new ToggleAllTodoAction(this.toggleCompleted);
    this.store.dispatch(action);
  }

}
