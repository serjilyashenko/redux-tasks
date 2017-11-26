import {
  CREATE_TASK,
  REMOVE_TASK,
  RENAME_TASK,
  EDIT_TASK_DESCRIPTION,
  COMPLETE_TASK,
  EDIT_TASK_CATEGORY,
} from './actionTypes';

const taskEntity = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        id: action.id,
        title: action.title,
        category: action.category,
        description: action.description || '',
        completed: false,
      };
    case RENAME_TASK:
      return {
        ...state,
        title: action.title,
      };
    case EDIT_TASK_DESCRIPTION:
      return {
        ...state,
        description: action.description || '',
      };
    case COMPLETE_TASK:
      return {
        ...state,
        completed: !state.completed,
      };
    case EDIT_TASK_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    default:
      return state;
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_TASK:
    case RENAME_TASK:
    case EDIT_TASK_DESCRIPTION:
    case COMPLETE_TASK:
    case EDIT_TASK_CATEGORY:
      return {
        ...state,
        [action.id]: taskEntity(state[action.id], action),
      };
    case REMOVE_TASK: {
      const stateCopy = { ...state };
      delete stateCopy[action.id];
      return stateCopy;
    }
    default:
      return state;
  }
};
