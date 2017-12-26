// @flow
import * as React from 'react';
import AddRootCategoryContainer from '../containers/AddRootCategoryContainer';
import CategoryListContainer from '../containers/CategoryListContainer';
import type { ActiveCategoryId } from '../redux/state/categoriesById/types';

export interface CategoryManagerProps {
  activeCategory: ActiveCategoryId;
}

const CategoryManager = ({ activeCategory }: CategoryManagerProps) => (
  <div className="scrollable-container">
    <div className="scrollable-container__header">
      <AddRootCategoryContainer />
    </div>
    <div className="scrollable-container__content scrollable-container__content_left">
      <div className="tree">
        <CategoryListContainer activeCategory={activeCategory || null} />
      </div>
    </div>
  </div>
);

export default CategoryManager;
