import {
  ADD_ROOT_CATEGORY,
  REMOVE_ROOT_CATEGORY
} from './actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ROOT_CATEGORY:
      return [...state, action.id];
    case REMOVE_ROOT_CATEGORY:
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
};
