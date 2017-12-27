// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import TaskFilters from './TaskFilters';
import type { ActiveCategoryId } from '../redux/state/categoriesById/types';
import CategoryEditable from "./CategoryEditable";
import CategoryListContainer from "../containers/CategoryListContainer";
import AddRootCategoryContainer from "../containers/AddRootCategoryContainer";

type Props = {
  activeCategory?: ActiveCategoryId,
  children: React.Node,
};

const CategoriesPage = ({ children, activeCategory }: Props) => (
  <div className="grid-page">
    <div className="grid-page__header">
      <div className="column-area__container">
        <div className="column-area column-area_left">
          <Link to="/categories" href="/categories" className="header-title">
            To-Do List
          </Link>
        </div>
        <div className="column-area column-area_right">
          <TaskFilters />
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
    <div className="grid-page__body">
      <div className="grid-page__body">
        <div className="grid-page__body-left">

          <div className="scrollable-container">
            <div className="scrollable-container__header">
              <AddRootCategoryContainer />
            </div>
            <div className="scrollable-container__content scrollable-container__content_left">
              <div className="tree">
                <CategoryListContainer
                  activeCategory={activeCategory || null}
                  CategoryComponent={CategoryEditable}
                />
              </div>
            </div>
          </div>

        </div>
        <div className="grid-page__body-center">{children}</div>
      </div>
    </div>
  </div>
);

CategoriesPage.defaultProps = {
  activeCategory: null,
};

export default CategoriesPage;
