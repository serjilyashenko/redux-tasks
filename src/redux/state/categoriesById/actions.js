import generateId from 'redux/helpers/generateId';
import { categoryByIdSelector } from 'redux/state/categoriesById/selectors';
import {
  CREATE_CATEGORY,
  REMOVE_CATEGORY,
  RENAME_CATEGORY,
  ADD_CHILD_CATEGORY,
  REMOVE_CHILD_CATEGORY,
  ADD_TASK_TO_CATEGORY,
  REMOVE_TASK_FROM_CATEGORY,
} from './actionTypes';
import { removeTask } from '../tasksById/actions';
import { addRootCategory, removeRootCategory } from '../rootCategories/actions';

export const addChild = (id, child) => ({
  type: ADD_CHILD_CATEGORY,
  id,
  child,
});

export const removeChild = (id, child) => ({
  type: REMOVE_CHILD_CATEGORY,
  id,
  child,
});

export const createCategory = (title, parent = null) => dispatch => {
  const id = generateId();

  dispatch({
    type: CREATE_CATEGORY,
    id,
    title,
    parent,
  });

  if (parent) {
    dispatch(addChild(parent, id));
  } else {
    dispatch(addRootCategory(id));
  }
};

export const renameCategory = (id, title) => ({
  type: RENAME_CATEGORY,
  id,
  title,
});

export const addTaskToCategory = (task, id) => ({
  type: ADD_TASK_TO_CATEGORY,
  id,
  task,
});

export const removeTaskFromCategory = (task, id) => ({
  type: REMOVE_TASK_FROM_CATEGORY,
  id,
  task,
});

export const removeChildren = id => (dispatch, getState) => {
  const category = categoryByIdSelector(getState(), id) || {};
  const children = category.children || [];

  // eslint-disable-next-line no-use-before-define
  children.forEach(childId => dispatch(removeCategory(childId)));
};

export const removeFromParent = id => (dispatch, getState) => {
  const category = categoryByIdSelector(getState(), id) || {};
  const { parent } = category;

  if (parent) {
    dispatch(removeChild(parent, id));
  } else {
    dispatch(removeRootCategory(id));
  }
};

export const removeTasks = id => (dispatch, getState) => {
  const category = categoryByIdSelector(getState(), id) || {};

  category.tasks.forEach(taskId => dispatch(removeTask(taskId)));
};

export const removeCategory = id => dispatch => {
  dispatch(removeChildren(id));
  dispatch(removeTasks(id));
  dispatch(removeFromParent(id));

  return dispatch({
    type: REMOVE_CATEGORY,
    id,
  });
};

export default {
  addChild,
  removeChild,
  createCategory,
  renameCategory,
  addTaskToCategory,
  removeTaskFromCategory,
  removeChildren,
  removeFromParent,
  removeTasks,
  removeCategory,
};
