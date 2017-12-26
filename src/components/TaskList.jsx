// @flow
import React from 'react';
import TaskItem from './TaskItem';
import type { Task } from '../redux/state/tasksById/types';
import type { TaskListActions } from '../containers/TaskListContainer';
import AddTask from './AddTask';

type Props = {
  tasks: Array<Task>,
  actions: TaskListActions,
};

const TaskList = ({ tasks, actions }: Props) => {
  const taskElements = tasks.map(task => <TaskItem task={task} actions={actions} key={task.id} />);

  return (
    <div className="scrollable-container">
      <div className="scrollable-container__header">
        <div className="adding-input adding-input_right">
          <AddTask create={actions.create} />
        </div>
      </div>
      <div className="scrollable-container__content scrollable-container__content_right">
        {taskElements}
      </div>
    </div>
  );
};

export default TaskList;
