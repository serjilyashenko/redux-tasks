// @flow
import * as React from 'react';

export type TaskFiltersProps = {
  completedFilter: boolean,
  nameFilter: string,
  actions: {
    filterByCompleted: () => any,
    setFilterName: (filterName: string) => any,
  },
};

const TaskFilters = ({ completedFilter, nameFilter, actions }: TaskFiltersProps) => (
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
          value={nameFilter}
          onChange={event => actions.setFilterName(event.target.value)}
          className="form-control"
          placeholder="Search"
        />
        <span className="input-group-btn">
          <input type="submit" value="Search" className="btn btn-secondary" />
        </span>
      </form>
    </div>
  </div>
);

export default TaskFilters;
