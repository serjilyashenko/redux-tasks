/* eslint-disable */
// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import type { Task } from '../redux/state/tasksById/types';
import TaskEditor from './TaskEditor';
import type { TaskActions } from '../containers/TaskPageContainer';

type CategoryProps = {
  id: number,
  children?: React.Node,
};

const Category = ({ id, children }: CategoryProps) => (
  <div className="tree-group">
    <div className="tree-group__row">
      <Link className="tree-group__row-link" to={`/categories/${id}`} href={`/categories/${id}`}>
        <input name="" type="checkbox" checked onChange={() => {}} />
        Category {id}
      </Link>
      <div className="tree-group__row-actions">
        <span className="glyphicon glyphicon__forward" />
      </div>
    </div>
    <div className="tree-list">{children}</div>
  </div>
);

const Categories = () => (
  <div className="tree">
    <Category id={1}>
      <Category id={2} />
      <Category id={3} />
    </Category>
  </div>
);

type Props = {
  task: Task,
  actions: TaskActions,
};

const TaskPage = ({ task, actions }: Props) => (
  <div className="grid-page">
    <div className="grid-page__header">
      <div className="column-area__container">
        <div className="column-area column-area_left">
          <h1>{task.title}</h1>
        </div>
      </div>
    </div>
    <div className="grid-page__body">
      <div className="grid-page__body-left">
        <div className="scrollable-container">
          <div className="scrollable-container__content scrollable-container__content_left">
            <Categories />
          </div>
        </div>
      </div>
      <div className="grid-page__body-center">
        <div className="scrollable-container">
          <div className="scrollable-container__content scrollable-container__content_left">
            <TaskEditor task={task} actions={actions} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TaskPage;
