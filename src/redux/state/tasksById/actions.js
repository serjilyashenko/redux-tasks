import generateId from 'redux/helpers/generateId';
import { taskByIdSelector } from './selectors';
import {
  CREATE_TASK,
  REMOVE_TASK,
  RENAME_TASK,
  EDIT_TASK_DESCRIPTION,
  COMPLETE_TASK,
  EDIT_TASK_CATEGORY,
} from './actionTypes';
import { removeTaskFromCategory, addTaskToCategory } from '../categoriesById/actions';

export const createTask = (category, title, description = '') => dispatch => {
  const id = generateId();
  dispatch({
    type: CREATE_TASK,
    id,
    title,
    description,
    category,
  });

  dispatch(addTaskToCategory(id, category));
};

export const renameTask = (id, title) => ({
  type: RENAME_TASK,
  id,
  title,
});

export const editTaskDescription = (id, description) => ({
  type: EDIT_TASK_DESCRIPTION,
  id,
  description,
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id,
});

export const editTaskCategory = (id, category) => ({
  type: EDIT_TASK_CATEGORY,
  id,
  category,
});

export const removeTask = id => (dispatch, getState) => {
  const state = getState();
  const task = taskByIdSelector(state, id);

  dispatch({ type: REMOVE_TASK, id });
  dispatch(removeTaskFromCategory(id, task.category));
};

export const moveTaskTo = (id?: number, targetCategory: number) => (dispatch, getState) => {
  const state = getState();
  const task = taskByIdSelector(state, id);

  if (!task) {
    return;
  }

  dispatch(removeTaskFromCategory(id, task.category));
  dispatch(addTaskToCategory(id, targetCategory));
  dispatch(editTaskCategory(id, targetCategory));
};

export default {
  createTask,
  renameTask,
  editTaskDescription,
  completeTask,
  editTaskCategory,
  removeTask,
  moveTaskTo,
};
