// @flow
import generateId from '../../helpers/generateId';
import { categoryByIdSelector } from './selectors';
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

type State = any;
export type Action = {
  +type: string,
};
type GetState = () => State;
// eslint-disable-next-line no-use-before-define
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type Dispatch = (action: Action | ThunkAction | Array<Action>) => any;

export const addChild = (id: number, child: number): Action => ({
  type: ADD_CHILD_CATEGORY,
  id,
  child,
});

export const removeChild = (id: number, child: number): Action => ({
  type: REMOVE_CHILD_CATEGORY,
  id,
  child,
});

export const createCategory = (title: string, parent?: number | null = null): ThunkAction => (
  dispatch: Dispatch,
) => {
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

export const renameCategory = (id: number, title: string): Action => ({
  type: RENAME_CATEGORY,
  id,
  title,
});

export const addTaskToCategory = (task: number, id: number): Action => ({
  type: ADD_TASK_TO_CATEGORY,
  id,
  task,
});

export const removeTaskFromCategory = (task: number, id: number): Action => ({
  type: REMOVE_TASK_FROM_CATEGORY,
  id,
  task,
});

export const removeChildren = (id: number): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
): void => {
  const category = categoryByIdSelector(getState(), id) || {};
  const children = category.children || [];

  // eslint-disable-next-line no-use-before-define
  children.forEach(childId => dispatch(removeCategory(childId)));
};

export const removeFromParent = (id: number): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
) => {
  const category = categoryByIdSelector(getState(), id) || {};
  const { parent } = category;

  if (parent) {
    dispatch(removeChild(parent, id));
  } else {
    dispatch(removeRootCategory(id));
  }
};

export const removeTasks = (id: number): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
) => {
  const category = categoryByIdSelector(getState(), id) || {};

  category.tasks.forEach(taskId => dispatch(removeTask(taskId)));
};

export const removeCategory = (id: number): ThunkAction => (dispatch: Dispatch) => {
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
