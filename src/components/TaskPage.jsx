/* eslint-disable */
// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import type { Task } from '../redux/state/tasksById/types';
import TaskEditor from './TaskEditor';
import type { TaskActions } from '../containers/TaskPageContainer';
import CategoryListContainer from "../containers/CategoryListContainer";
import CategoryOnTaskPage from "./CategoryOnTaskPage";

type CategoryProps = {
  id: number,
  children?: React.Node,
};

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
            <div className="tree">
              <CategoryListContainer
                activeCategory={task.category}
                activeTask={task.id}
                CategoryComponent={CategoryOnTaskPage}
              />
            </div>
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
