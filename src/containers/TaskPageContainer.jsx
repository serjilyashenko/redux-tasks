import React from 'react';
import PropTypes from 'prop-types';
import Page404 from 'components/Page404';

const TaskPage = props => <div>Task: {props.id}</div>;

TaskPage.propTypes = {
  id: PropTypes.number.isRequired,
};

const TaskPageContainer = props => {
  const id = Number(props.match.params.id);

  if (Number.isNaN(id)) {
    return <Page404/>
  }

  return <TaskPage id={id} />;
};

TaskPageContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TaskPageContainer;
