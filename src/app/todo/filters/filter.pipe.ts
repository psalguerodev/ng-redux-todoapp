import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.model';
import { ToDoFilters } from './filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todo: Todo[], filter: ToDoFilters): Todo[] {
    switch (filter) {
      case 'active':
        return todo.filter(item => !item.completed);

      case 'completed':
        return todo.filter(item => item.completed);

      default: return todo;
    }
  }

}
