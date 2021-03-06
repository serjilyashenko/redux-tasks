// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import CategoryListContainer from '../containers/CategoryListContainer';
import type { ActiveCategoryId, Category } from '../redux/state/categoriesById/types';

export type CategoryActions = {
  create: (title: string, parent: number) => any,
  remove: (id: number) => any,
  moveTaskTo: (id: number) => any,
};

export type CategoryComponentProps = {
  CategoryComponent: (props: CategoryComponentProps) => React.Node,
  category: Category,
  activeCategory: ActiveCategoryId,
  activeTask?: number | null,
  actions: CategoryActions,
};

const CategoryEditable = ({
  CategoryComponent,
  category,
  activeCategory,
  activeTask,
  actions,
}: CategoryComponentProps) => (
  <div className="tree-group">
    <div className="tree-group__row">
      <Link
        className="tree-group__row-link"
        to={`/categories/${category.id}`}
        href={`/categories/${category.id}`}
      >
        <input
          name=""
          type="checkbox"
          checked={activeCategory ? activeCategory === category.id : false}
          onChange={() => ({})}
        />
        {category.title}
      </Link>
      <span className="glyphicon glyphicon__edit" />
      <div className="tree-group__row-actions">
        <button
          className="glyphicon glyphicon__delete"
          onClick={() => actions.remove(category.id)}
        />
        <button
          className="glyphicon glyphicon__add"
          onClick={() => actions.create('New Category', category.id)}
        />
      </div>
    </div>
    <div className="tree-list">
      <CategoryListContainer
        ids={category.children}
        CategoryComponent={CategoryComponent}
        activeCategory={activeCategory}
        activeTask={activeTask}
      />
    </div>
  </div>
);

CategoryEditable.defaultProps = {
  activeTask: null,
};

export default CategoryEditable;
