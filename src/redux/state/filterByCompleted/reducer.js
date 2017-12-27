export const FILTER_BY_COMPLETED = 'FILTER_BY_COMPLETED';

export default (state = false, action) => {
  if (action.type === FILTER_BY_COMPLETED) {
    return !state;
  }

  return state;
};
