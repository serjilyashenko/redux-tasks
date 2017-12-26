// @flow
import * as React from 'react';
import CategoryEditable from './CategoryEditable';
import type { ActiveCategoryId, Category } from '../redux/state/categoriesById/types';
import type { CategoryActions } from './CategoryEditable';

export type CategoryListProps = {
  categories: Array<Category>,
  activeCategory: ActiveCategoryId,
  actions: CategoryActions,
};

const CategoryList = ({ categories, activeCategory, actions }: CategoryListProps) =>
  categories.map(category => (
    <CategoryEditable
      key={category.id}
      category={category}
      activeCategory={activeCategory}
      actions={actions}
    />
  ));

export default CategoryList;
