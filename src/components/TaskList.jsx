import React from 'react';

const hi = '';

const TaskList = () => (
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
      <div className="task-item">
        <span className="task-item__title">
          <input name="" type="checkbox" checked onChange={() => {}} />
          Todo Item #1
        </span>
        <div className="task-item__actions">
          <span className="glyphicon glyphicon__edit"/>
        </div>
      </div>
      <div className="task-item">
        <span className="task-item__title">
          <input name="" type="checkbox" checked onChange={() => {}} />
          Todo Item #2
        </span>
        <div className="task-item__actions">
          <span className="glyphicon glyphicon__edit"/>
        </div>
      </div>
      <div className="task-item">
        <span className="task-item__title">
          <input name="" type="checkbox" checked onChange={() => {}} />
          Todo Item #3
        </span>
        <div className="task-item__actions">
          <span className="glyphicon glyphicon__edit"/>
        </div>
      </div>
      <div className="task-item">
        <span className="task-item__title">
          <input name="" type="checkbox" checked onChange={() => {}} />
          Todo Item #4
        </span>
        <div className="task-item__actions">
          <span className="glyphicon glyphicon__edit"/>
        </div>
      </div>
      <div className="task-item">
        <span className="task-item__title">
          <input name="" type="checkbox" checked onChange={() => {}} />
          Todo Item #5
        </span>
        <div className="task-item__actions">
          <span className="glyphicon glyphicon__edit"/>
        </div>
      </div>
    </div>
  </div>
);

export default TaskList;
