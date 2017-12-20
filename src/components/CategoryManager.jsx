import React from 'react';
import {Link} from "react-router-dom";
import AddRootCategory from "./AddRootCategory";
import RootCategoryListContainer from "../containers/RootCategoryListContainer";

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
    <div className="inline-control inline-control_checkbox">
      <label className="form-check-label">
        <input type="checkbox" className="form-check-input" />
        Show done
      </label>
    </div>
    <div className="inline-control">
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

const CategoriesPageHeader = () => (
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

const CategoryManager = ({ children, activeCategory }) => (
  <div className="grid-page">
    <CategoriesPageHeader />
    <div className="grid-page__body">
      <div className="grid-page__body-left">
        <div className="scrollable-container">
          <div className="scrollable-container__header">
            <AddRootCategory />
          </div>
          <div className="scrollable-container__content scrollable-container__content_left">
            <div className="tree">
              <RootCategoryListContainer activeCategory={activeCategory} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid-page__body-center">{children}</div>
    </div>
  </div>
);

export default CategoryManager;
