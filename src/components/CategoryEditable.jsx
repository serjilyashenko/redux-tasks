import React from 'react';
import { Link } from 'react-router-dom';
import CategoryListContainer from '../containers/CategoryListContainer';

const CategoryEditable = ({ category, activeCategory }) => (
  <div className="tree-group">
    <div className="tree-group__row">
      <Link
        className="tree-group__row-link"
        to={`/categories/${category.id}`}
        href={`/categories/${category.id}`}
      >
        <input name="" type="checkbox" checked={Number(activeCategory) === Number(category.id)} onChange={() => {}} />
        {category.title}
      </Link>
      <span className="glyphicon glyphicon__edit" />
      <div className="tree-group__row-actions">
        <span className="glyphicon glyphicon__delete" />
        <span className="glyphicon glyphicon__add" />
      </div>
    </div>
    <div className="tree-list">
      <CategoryListContainer ids={category.children} activeCategory={activeCategory} />
    </div>
  </div>
);

export default CategoryEditable;
