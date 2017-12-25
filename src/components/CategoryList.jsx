// @flow
import * as React from 'react';
import CategoryEditable from './CategoryEditable';
import type { ActiveCategoryId, Category } from '../redux/state/categoriesById/types';

export type CategoryListProps = {
  categories: Array<Category>,
  activeCategory: ActiveCategoryId,
};

const CategoryList = ({ categories, activeCategory }: CategoryListProps) =>
  categories.map(category => (
    <CategoryEditable key={category.id} category={category} activeCategory={activeCategory} />
  ));

export default CategoryList;
