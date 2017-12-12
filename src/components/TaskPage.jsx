import React from 'react';
import PropTypes from 'prop-types';

const TaskPage = props => <div>Task : {props.id}</div>;

TaskPage.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TaskPage;
