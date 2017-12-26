import { categoryByIdSelector } from '../categoriesById/selectors';

export const tasksByIdSelector = state => state.tasksById;

export const taskByIdSelector = (state, id) => tasksByIdSelector(state)[id];

export const tasksByIdsSelector = (state, ids) => ids.map(id => taskByIdSelector(state, id));

export const tasksByCategorySelector = (state, categoryId) => {
  const category = categoryByIdSelector(state, categoryId);
  const tasks = category ? category.tasks : [];
  return tasksByIdsSelector(state, tasks);
};

export default { tasksByIdSelector, taskByIdSelector, tasksByIdsSelector };
