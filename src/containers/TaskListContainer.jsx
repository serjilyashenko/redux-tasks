// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import type { Task } from '../redux/state/tasksById/types';
import { tasksByCategorySelector } from '../redux/state/tasksById/selectors';
import { completeTask, createTask } from '../redux/state/tasksById/actions';

export type TaskListActions = {
  create: () => any,
  complete: (id: number) => any,
};

type Props = {
  tasks: Array<Task>,
  actions: TaskListActions,
};

type OwnProps = {
  activeCategory: number,
};

const TaskListContainer = ({ tasks, actions }: Props) => (
  <TaskList tasks={tasks} actions={actions} />
);

const mapStateToProps = (state, { activeCategory }: OwnProps) => ({
  tasks: tasksByCategorySelector(state, activeCategory),
});

const mapDispatchToProps = (dispatch, { activeCategory }: OwnProps) => ({
  actions: {
    create: (title: string) => dispatch(createTask(activeCategory, title)),
    complete: (id: number) => dispatch(completeTask(id)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
