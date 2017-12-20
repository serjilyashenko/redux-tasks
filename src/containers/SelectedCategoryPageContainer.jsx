/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import TaskList from 'components/TaskList';
import CategoryManager from '../components/CategoryManager';

const SelectedCategoryPageContainer = props => (
  <CategoryManager activeCategory={props.match.params.id}>
    <TaskList />
  </CategoryManager>
);

SelectedCategoryPageContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default SelectedCategoryPageContainer;
