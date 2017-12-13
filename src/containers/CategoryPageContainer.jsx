import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import CategoriesNavigation from 'components/CategoriesNavigation';
import TaskList from 'components/TaskList';

const RoutingLinks = () => (
  <div className="routing-test__container">
    <div className="routing-test">
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
);

const Search = () => (
  <div>
    <div className="filter-item filter-item_checkbox">
      <input name="" type="checkbox" checked onChange={() => {}} />
      <span>Show done</span>
    </div>
    <div className="filter-item">
      <form className="input-group" onSubmit={() => {}}>
        <input
          name="add-category"
          type="text"
          value="search"
          onChange={() => {}}
          className="form-control"
          placeholder="Enter category title"
          aria-label="add-category"
        />
        <span className="input-group-btn">
          <input type="submit" value="Search" className="btn btn-secondary" />
        </span>
      </form>
    </div>
  </div>
);

const Header = () => (
  <div className="grid-page__header">
    <RoutingLinks />
    <div className="column-area__container">
      <div className="column-area column-area_left">
        <h1>To-Do List</h1>
      </div>
      <div className="column-area column-area_right">
        <Search />
      </div>
    </div>
    <div className="progress progress_thin">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: '25%' }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {' '}
      </div>
    </div>
  </div>
);

const CategoryPageContainer = props => (
  <div className="grid-page">
    <Header />
    <div className="grid-page__body">
      <div className="grid-page__body-left">
        <Route path={`${props.match.url}/`} component={CategoriesNavigation} />
      </div>
      <div className="grid-page__body-center">
        <Route
          path={`${props.match.url}/:id`}
          component={localProps => <TaskList category={Number(localProps.match.params.id)} />}
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
