/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const TaskPageHeader = ({ id }) => (
  <div className="grid-page__header">
    <div className="column-area__container">
      <div className="column-area column-area_left">
        <h1>To-Do Item #{id}</h1>
      </div>
    </div>
  </div>
);

const TaskPage = ({ id }) => (
  <div className="grid-page">
    <TaskPageHeader id={id} />
    <div className="grid-page__body">
      <div className="grid-page__body-left">left</div>
      <div className="grid-page__body-center">right</div>
    </div>
  </div>
);

TaskPage.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TaskPage;
