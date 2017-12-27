import * as React from 'react';

export type TaskFiltersProps = {
  completedFilter: boolean,
  actions: {
    filterByCompleted: () => any,
  },
};

const TaskFilters = ({ completedFilter, actions }: TaskFiltersProps) => (
  <div>
    <div className="inline-control inline-control_checkbox">
      <label htmlFor="task-filter" className="form-check-label">
        <input
          name="task-filter"
          type="checkbox"
          className="form-check-input"
          checked={completedFilter}
          onChange={() => actions.filterByCompleted()}
        />
        Show done
      </label>
    </div>
    <div className="inline-control">
      <form className="input-group" onSubmit={() => {}}>
        <input
          name="add-category"
          type="text"
          value="search"
          onChange={() => {}}
          className="form-control"
          placeholder="Enter category title"
          aria-label="add-category"
        />
        <span className="input-group-btn">
          <input type="submit" value="Search" className="btn btn-secondary" />
        </span>
      </form>
    </div>
  </div>
);

export default TaskFilters;
