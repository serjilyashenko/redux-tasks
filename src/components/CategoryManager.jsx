// @flow
import * as React from 'react';
import AddRootCategoryContainer from '../containers/AddRootCategoryContainer';
import CategoryListContainer from '../containers/CategoryListContainer';
import type { ActiveCategoryId } from '../redux/state/categoriesById/types';
import type { CategoryComponentProps } from './CategoryEditable';

export type CategoryManagerProps = {
  activeCategory: ActiveCategoryId,
  // eslint-disable-next-line
  CategoryComponent: (props: CategoryComponentProps) => React.Node,
};

const CategoryManager = ({ activeCategory, CategoryComponent }: CategoryManagerProps) => (
  <div className="scrollable-container">
    <div className="scrollable-container__header">
      <AddRootCategoryContainer />
    </div>
    <div className="scrollable-container__content scrollable-container__content_left">
      <div className="tree">
        <CategoryListContainer
          activeCategory={activeCategory || null}
          CategoryComponent={CategoryComponent}
        />
      </div>
    </div>
  </div>
);

export default CategoryManager;
