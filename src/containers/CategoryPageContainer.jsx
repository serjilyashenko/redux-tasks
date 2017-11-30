import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import CategoriesNavigation from 'components/CategoriesNavigation';

const CategoryPageContainer = props => (
  <div className="grid-page">
    <div className="grid-page__header">
      <div>
        <Link to="/" href="/">
          home
        </Link>{' '}
        <Link to="/categories" href="/categories">
          categories
        </Link>{' '}
        <Link to="/categories/hello" href="/categories/hello">
          category
        </Link>{' '}
        <Link to="/tasks/hi" href="/tasks/hi">
          task
        </Link>{' '}
        <Link to="/test" href="/test">
          testState
        </Link>
      </div>
    </div>
    <div className="grid-page__body">
      <div className="grid-page__body-left">
        <Route path={`${props.match.url}/`} component={CategoriesNavigation} />
      </div>
      <div className="grid-page__body-center">
        <Route
          path={`${props.match.url}/:id`}
          component={props1 => <div>id: {props1.match.params.id}</div>}
        />
      </div>
    </div>
  </div>
);

CategoryPageContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryPageContainer;
