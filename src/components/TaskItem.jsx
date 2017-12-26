// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { Task } from '../redux/state/tasksById/types';
import type { TaskListActions } from '../containers/TaskListContainer';

type Props = {
  task: Task,
  actions: TaskListActions,
};

const TaskItem = ({ task, actions }: Props) => (
  <div className="task-item">
    <input
      name=""
      type="checkbox"
      checked={task.completed}
      onChange={() => actions.complete(task.id)}
    />
    <Link to={`/tasks/${task.id}`} href={`/tasks/${task.id}`} className="task-item__title">
      {task.title}
    </Link>
    <div className="task-item__actions">
      <span className="glyphicon glyphicon__edit" />
    </div>
  </div>
);

export default TaskItem;
