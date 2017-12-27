import { FILTER_BY_COMPLETED, SET_NAME_FILTER } from './actionTypes';

export const filterByCompleted = () => ({
  type: FILTER_BY_COMPLETED,
});

export const setFilterName = filterName => ({
  type: SET_NAME_FILTER,
  filterName,
});

export default { filterByCompleted };
