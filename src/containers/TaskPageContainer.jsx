// @flow
import React from 'react';
import { connect } from 'react-redux';
import TaskPage from '../components/TaskPage';
import Page404 from '../components/Page404';
import { taskByIdSelector } from '../redux/state/tasksById/selectors';
import type { Task } from '../redux/state/tasksById/types';
import { completeTask, editTaskDescription, renameTask } from '../redux/state/tasksById/actions';

export type TaskActions = {
  rename: (id: number, value: string) => any,
  complete: (id: number) => any,
  editDescription: (id: number, value: string) => any,
};

type Props = {
  task: Task | void,
  actions: TaskActions,
};

type OwnProps = {
  match: {
    params: {
      id: string,
    },
  },
};

const TaskPageContainer = ({ task, actions }: Props) => {
  if (!task) {
    return <Page404 />;
  }

  return <TaskPage task={task} actions={actions} />;
};

const mapStateToProps = (state: any, { match: { params: { id } } }: OwnProps) => ({
  task: taskByIdSelector(state, id),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    rename: (id: number, title: string) => dispatch(renameTask(id, title)),
    complete: (id: number) => dispatch(completeTask(id)),
    editDescription: (id: number, description: string) =>
      dispatch(editTaskDescription(id, description)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskPageContainer);
