export const tasksByIdSelector = state => state.tasksById;

export const taskByIdSelector = (state, id) => tasksByIdSelector(state)[id];

export default { tasksByIdSelector, taskByIdSelector };
