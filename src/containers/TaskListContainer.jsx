// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import type { Task } from '../redux/state/tasksById/types';
import { tasksByCategorySelector } from '../redux/state/tasksById/selectors';
import { completeTask, createTask } from '../redux/state/tasksById/actions';
import type { ActiveCategoryId } from '../redux/state/categoriesById/types';
import { filterByCompletedSelector, nameFilterSelector } from '../redux/state/filters/selectors';

export type TaskListActions = {
  create: () => any,
  complete: (id: number) => any,
};

type Props = {
  tasks: Array<Task>,
  actions: TaskListActions,
};

type OwnProps = {
  activeCategory: ActiveCategoryId,
};

const TaskListContainer = ({ tasks, actions }: Props) => (
  <TaskList tasks={tasks} actions={actions} />
);

const mapStateToProps = (state, { activeCategory }: OwnProps) => {
  let tasks = tasksByCategorySelector(state, activeCategory);

  if (filterByCompletedSelector(state)) {
    tasks = tasks.filter(task => task.completed);
  }

  const filterName = nameFilterSelector(state);
  if (filterName) {
    tasks = tasks.filter(task => task.title.indexOf(filterName) !== -1);
  }

  return { tasks };
};

const mapDispatchToProps = (dispatch, { activeCategory }: OwnProps) => ({
  actions: {
    create: (title: string) => dispatch(createTask(activeCategory, title)),
    complete: (id: number) => dispatch(completeTask(id)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
