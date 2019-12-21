import { FilterActions, ToDoFilters, SET_FILTER } from './filter.actions';

const filterInit: ToDoFilters = 'all';

export function filterReducer(state = filterInit, action: FilterActions): ToDoFilters {

  switch (action.type) {

    case SET_FILTER:
      return action.filter;

    default:
      return state;
  }

}
