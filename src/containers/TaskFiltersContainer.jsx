// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TaskFilters from '../components/TaskFilters';
import { filterByCompletedSelector } from '../redux/state/filterByCompleted/selectors';
import { filterByCompleted } from '../redux/state/filterByCompleted/actions';
import type { TaskFiltersProps } from '../components/TaskFilters';

const TaskFiltersContainer = ({ completedFilter, actions }: TaskFiltersProps) => (
  <TaskFilters completedFilter={completedFilter} actions={actions} />
);

const mapStateToProps = (state: any) => ({
  completedFilter: filterByCompletedSelector(state),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    filterByCompleted: () => dispatch(filterByCompleted()),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskFiltersContainer);
