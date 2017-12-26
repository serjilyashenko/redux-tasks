// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import TaskFilters from './TaskFilters';
import type { ActiveCategoryId } from '../redux/state/categoriesById/types';
import CategoryManager from './CategoryManager';

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
          <CategoryManager activeCategory={activeCategory || null} />
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
