import { categoryByIdSelector } from '../categoriesById/selectors';

export const rootCategoryIdsSelector = state => state.rootCategories;

export const rootCategoryEntitiesSelector = state =>
  rootCategoryIdsSelector(state).map(id => categoryByIdSelector(state, id));

export default { rootCategoryIdsSelector, rootCategoryEntitiesSelector };
