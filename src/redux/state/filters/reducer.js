import { FILTER_BY_COMPLETED, SET_NAME_FILTER } from './actionTypes';

const initState = {
  completedFilter: false,
  filterName: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case FILTER_BY_COMPLETED:
      return { ...state, completedFilter: !state.completedFilter };
    case SET_NAME_FILTER:
      return { ...state, filterName: action.filterName };
    default:
      return state;
  }
};
