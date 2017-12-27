// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import CategoryListContainer from '../containers/CategoryListContainer';
import type { CategoryComponentProps } from './CategoryEditable';

const CategoryOnTaskPage = ({
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
      <div className="tree-group__row-actions">
        <button className="glyphicon glyphicon__forward" onClick={() => actions.moveTaskTo(category.id)} />
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

export default CategoryOnTaskPage;
