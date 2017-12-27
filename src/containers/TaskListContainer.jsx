// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import type { Task } from '../redux/state/tasksById/types';
import { tasksByCategorySelector } from '../redux/state/tasksById/selectors';
import { completeTask, createTask } from '../redux/state/tasksById/actions';
import type { ActiveCategoryId } from '../redux/state/categoriesById/types';
import { filterByCompletedSelector } from '../redux/state/filterByCompleted/selectors';

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
  const categoryTasks = tasksByCategorySelector(state, activeCategory);

  if (!filterByCompletedSelector(state)) {
    return { tasks: categoryTasks };
  }

  const completedTasks = categoryTasks.filter(task => task.completed);

  return { tasks: completedTasks };
};

const mapDispatchToProps = (dispatch, { activeCategory }: OwnProps) => ({
  actions: {
    create: (title: string) => dispatch(createTask(activeCategory, title)),
    complete: (id: number) => dispatch(completeTask(id)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
