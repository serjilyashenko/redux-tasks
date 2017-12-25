export const categoriesByIdSelector = state => state.categoriesById;

export const categoryByIdSelector = (state, id) => categoriesByIdSelector(state)[id];

export const categoriesByIdsSelector = (state, ids) =>
  ids.map(id => categoriesByIdSelector(state)[id]);

export default { categoriesByIdSelector, categoryByIdSelector };
