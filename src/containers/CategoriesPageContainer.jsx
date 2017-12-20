/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CategoryManager from '../components/CategoryManager';

const CategoriesPageContainer = props => (
  <CategoryManager>
    <div> &lt;- choose category</div>
  </CategoryManager>
);

CategoriesPageContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoriesPageContainer;
