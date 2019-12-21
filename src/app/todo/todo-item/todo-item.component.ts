import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, DeleteTodoItemAction, UpdateTodoItemAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  editing: boolean;
  checkField: FormControl;
  txtInput: FormControl;

  @ViewChild('txtInputRef', { static: false }) txtInputRef: ElementRef;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.checkField.valueChanges.subscribe( _ => {
      const action = new ToggleTodoAction( this.todo.id );
      this.store.dispatch(action);
    });
  }

  editItem() {
    this.editing = true;
    setTimeout(() => this.txtInputRef.nativeElement.select() , 1);
  }

  finish() {
    this.editing = false;
    if ( this.txtInput.invalid ) return;

    if ( this.todo.text === this.txtInput.value ) return;

    const action = new UpdateTodoItemAction( this.todo.id, this.txtInput.value );
    this.store.dispatch(action);
  }

  deleteItem() {
    const action = new DeleteTodoItemAction( this.todo.id );
    this.store.dispatch(action);
  }

}
