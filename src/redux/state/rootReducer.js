import { combineReducers } from 'redux';
import categoriesById from './categoriesById/reducer';
import tasksById from './tasksById/reducer';
import rootCategories from './rootCategories/reducer';

export default combineReducers({
  categoriesById,
  tasksById,
  rootCategories,
});
