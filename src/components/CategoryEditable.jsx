// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import CategoryListContainer from '../containers/CategoryListContainer';
import type { ActiveCategoryId, Category } from '../redux/state/categoriesById/types';

export type CategoryActions = {
  remove: (id: number) => any,
};

type Props = {
  category: Category,
  activeCategory: ActiveCategoryId,
  actions: CategoryActions,
};

const CategoryEditable = ({ category, activeCategory, actions }: Props) => (
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
          onChange={() => {}}
        />
        {category.title}
      </Link>
      <span className="glyphicon glyphicon__edit" />
      <div className="tree-group__row-actions">
        <button
          className="glyphicon glyphicon__delete"
          onClick={() => actions.remove(category.id)}
        />
        <span className="glyphicon glyphicon__add" />
      </div>
    </div>
    <div className="tree-list">
      <CategoryListContainer ids={category.children} activeCategory={activeCategory} />
    </div>
  </div>
);

export default CategoryEditable;
