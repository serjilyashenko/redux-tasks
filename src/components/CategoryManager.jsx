// @flow
import * as React from 'react';
import AddRootCategory from './AddRootCategory';
import CategoryListContainer from '../containers/CategoryListContainer';
import type { ActiveCategoryId } from '../redux/state/categoriesById/types';

export interface CategoryManagerProps {
  activeCategory: ActiveCategoryId;
}

const CategoryManager = ({ activeCategory }: CategoryManagerProps) => (
  <div className="scrollable-container">
    <div className="scrollable-container__header">
      <AddRootCategory />
    </div>
    <div className="scrollable-container__content scrollable-container__content_left">
      <div className="tree">
        <CategoryListContainer activeCategory={activeCategory || null} />
      </div>
    </div>
  </div>
);

export default CategoryManager;
