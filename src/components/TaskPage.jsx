/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TaskPageHeader = ({ id }) => (
  <div className="grid-page__header">
    <div className="column-area__container">
      <div className="column-area column-area_left">
        <h1>To-Do Item #{id}</h1>
      </div>
    </div>
  </div>
);

const Category = ({ id, children }) => (
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
    <Category id="1">
      <Category id="1.1" />
      <Category id="1.2" />
    </Category>
    <Category id="2">
      <Category id="2.1" />
    </Category>
    <Category id="3">
      <Category id="3.1" />
      <Category id="3.2" />
      <Category id="3.2" />
    </Category>
    <Category id="1">
      <Category id="1.1" />
      <Category id="1.2" />
    </Category>
    <Category id="2">
      <Category id="2.1" />
    </Category>
    <Category id="3">
      <Category id="3.1" />
      <Category id="3.2" />
      <Category id="3.2" />
    </Category>
    <Category id="1">
      <Category id="1.1" />
      <Category id="1.2" />
    </Category>
    <Category id="2">
      <Category id="2.1" />
    </Category>
    <Category id="3">
      <Category id="3.1" />
      <Category id="3.2" />
      <Category id="3.2" />
    </Category>
  </div>
);

const TaskEdit = () => (
  <form>
    <div className="form-group">
      <div className="column-area__container">
        <div className="column-area_right">
          <div className="inline-control">
            <button type="button" className="btn btn-secondary inline-control">
              Save changes
            </button>
          </div>
          <div className="inline-control">
            <button type="button" className="btn btn-secondary inline-control">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="form-group">
      <div className="row">
        <div className="col-4">
          <input
            type=""
            className="form-control"
            placeholder=""
            value="Task Name"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
    <div className="form-check inline-control inline-control_checkbox">
      <label className="form-check-label">
        <input type="checkbox" className="form-check-input" />
        Done
      </label>
    </div>
    <div className="form-group">
      <textarea className="form-control" rows="10" placeholder="Description" />
    </div>
  </form>
);

const TaskPage = ({ id }) => (
  <div className="grid-page">
    <TaskPageHeader id={id} />
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
            <TaskEdit />
          </div>
        </div>
      </div>
    </div>
  </div>
);

TaskPage.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TaskPage;
