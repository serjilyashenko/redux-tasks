import { categoriesByIdsSelector } from '../categoriesById/selectors';

export const rootCategoryIdsSelector = state => state.rootCategories;

export const rootCategoryEntitiesSelector = state =>
  categoriesByIdsSelector(state, rootCategoryIdsSelector(state));

export default { rootCategoryIdsSelector, rootCategoryEntitiesSelector };
