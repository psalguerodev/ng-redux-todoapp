import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { DeleteAllTodoItemAction } from '../todo.actions';
import { Todo } from '../model/todo.model';
import { ToDoFilters, SetFilterAction } from '../filters/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  todos: Todo[];
  filters: ToDoFilters[] = ['all', 'active', 'completed'];
  currentFilter: ToDoFilters;
  itemsPending = 0;
  itemsCompleted = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.itemsPending = state.todos.filter(item => !item.completed).length;
      this.itemsCompleted = state.todos.filter(item => item.completed).length;
    });
  }

  clearCompleted(): void {
    const action = new DeleteAllTodoItemAction();
    this.store.dispatch(action);
  }

  changeFilter(filter: ToDoFilters): void {
    if (this.currentFilter === filter) return;

    const action = new SetFilterAction(filter);
    this.store.dispatch(action);
  }

}
