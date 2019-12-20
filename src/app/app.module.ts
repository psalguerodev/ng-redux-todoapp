import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoComponent,
    TodoHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
