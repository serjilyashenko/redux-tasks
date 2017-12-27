// @flow
import * as React from 'react';
import type { ActiveCategoryId, Category } from '../redux/state/categoriesById/types';
import type { CategoryActions, CategoryComponentProps } from './CategoryEditable';

export type CategoryListProps = {
  CategoryComponent: (props: CategoryComponentProps) => React.Node,
  categories: Array<Category>,
  activeCategory: ActiveCategoryId,
  activeTask: number | null,
  actions: CategoryActions,
};

const CategoryList = ({
  CategoryComponent,
  categories,
  activeCategory,
  activeTask,
  actions,
}: CategoryListProps) =>
  categories.map(category => (
    <CategoryComponent
      key={category.id}
      CategoryComponent={CategoryComponent}
      category={category}
      activeCategory={activeCategory}
      activeTask={activeTask}
      actions={actions}
    />
  ));

export default CategoryList;
