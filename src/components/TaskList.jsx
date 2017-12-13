/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const hi = '';

const Task = ({ id }) => (
  <div className="task-item">
    <Link to={`/tasks/${id}`} href={`/tasks/${id}`} className="task-item__title">
      <input name="" type="checkbox" checked onChange={() => {}} />
      Todo Item #{id}
    </Link>
    <div className="task-item__actions">
      <span className="glyphicon glyphicon__edit" />
    </div>
  </div>
);

const TaskList = () => {
  const taskElements = new Array(20).fill(0).map((it, index) => <Task id={index} key={index} />);

  return (
    <div className="scrollable-container">
      <div className="scrollable-container__header">
        <div className="adding-input adding-input_right">
          <form className="input-group" onSubmit={() => {}}>
            <input
              name="add-category"
              type="text"
              value={hi}
              onChange={() => {}}
              className="form-control"
              placeholder="Enter task title"
              aria-label="add-category"
            />
            <span className="input-group-btn">
              <input type="submit" value="Add" className="btn btn-secondary" />
            </span>
          </form>
        </div>
      </div>
      <div className="scrollable-container__content scrollable-container__content_right">
        {taskElements}
      </div>
    </div>
  );
};

export default TaskList;
