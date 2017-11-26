import {
  CREATE_CATEGORY,
  REMOVE_CATEGORY,
  RENAME_CATEGORY,
  ADD_CHILD_CATEGORY,
  REMOVE_CHILD_CATEGORY,
  ADD_TASK_TO_CATEGORY,
  REMOVE_TASK_FROM_CATEGORY,
} from './actionTypes';

const categoryEntity = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        id: action.id,
        title: action.title,
        parent: action.parent || null,
        children: [],
        tasks: [],
      };
    case RENAME_CATEGORY:
      return {
        ...state,
        title: action.title,
      };
    case ADD_CHILD_CATEGORY:
      return {
        ...state,
        children: [...state.children, action.child],
      };
    case REMOVE_CHILD_CATEGORY:
      return {
        ...state,
        children: state.children.filter(child => child !== action.child),
      };
    case ADD_TASK_TO_CATEGORY:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case REMOVE_TASK_FROM_CATEGORY:
      return {
        ...state,
        tasks: state.tasks.filter(task => task !== action.task),
      };
    default:
      return state;
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
    case RENAME_CATEGORY:
    case ADD_CHILD_CATEGORY:
    case REMOVE_CHILD_CATEGORY:
    case ADD_TASK_TO_CATEGORY:
    case REMOVE_TASK_FROM_CATEGORY:
      return {
        ...state,
        [action.id]: categoryEntity(state[action.id], action),
      };
    case REMOVE_CATEGORY: {
      const stateCopy = { ...state };
      delete stateCopy[action.id];
      return stateCopy;
    }
    default:
      return state;
  }
};
