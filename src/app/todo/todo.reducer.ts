import * as fromTodoActions from './todo.actions';
import { Todo } from './model/todo.model';

const initState: Todo[] = []

initState.push(new Todo('Clean my room'))
initState.push(new Todo('Clean my wallet'))
initState.push(new Todo('Clean my life'))
initState.push(new Todo('Clean my mind'))

initState[2].completed = true

export function todoReducer(state = initState, action: fromTodoActions.TodoActions): Todo[] {

  switch (action.type) {

    case fromTodoActions.ADD_TODO:
      const todo = new Todo(action.text as string);
      return [...state, todo];

    case fromTodoActions.TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });

    case fromTodoActions.TOGGLE_ALL_TODO:
      return state.map(item => ({ ...item, completed: action.completed }))

    case fromTodoActions.UPDATE_TODOITEM:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            text: action.text
          };
        }

        return item;
      });

    case fromTodoActions.DELETE_TODOITEM:
      return state.filter(item => item.id !== action.id);

    case fromTodoActions.DELETE_ALL_TODO:
      return state.filter(item => !item.completed);

    default:
      return state;

  }

}
