import { ADD_ROOT_CATEGORY, REMOVE_ROOT_CATEGORY } from './actionTypes';

export const addRootCategory = id => ({
  type: ADD_ROOT_CATEGORY,
  id,
});

export const removeRootCategory = id => ({
  type: REMOVE_ROOT_CATEGORY,
  id,
});

export default { addRootCategory, removeRootCategory };
