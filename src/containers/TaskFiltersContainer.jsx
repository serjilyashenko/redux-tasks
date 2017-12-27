// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TaskFilters from '../components/TaskFilters';
import { filterByCompletedSelector, nameFilterSelector } from '../redux/state/filters/selectors';
import { filterByCompleted, setFilterName } from '../redux/state/filters/actions';
import type { TaskFiltersProps } from '../components/TaskFilters';

const TaskFiltersContainer = ({ completedFilter, nameFilter, actions }: TaskFiltersProps) => (
  <TaskFilters completedFilter={completedFilter} nameFilter={nameFilter} actions={actions} />
);

const mapStateToProps = (state: any) => ({
  completedFilter: filterByCompletedSelector(state),
  nameFilter: nameFilterSelector(state),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    filterByCompleted: () => dispatch(filterByCompleted()),
    setFilterName: (filterName: string) => dispatch(setFilterName(filterName)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskFiltersContainer);
