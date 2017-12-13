/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import AddRootCategory from './AddRootCategory';

const Category = ({ id, children }) => (
  <div className="tree-group">
    <div className="tree-group__row">
      <Link className="tree-group__row-link" to={`/categories/${id}`} href={`/categories/${id}`}>
        <input name="" type="checkbox" checked onChange={() => {}} />
        Category {id}
      </Link>
      <span className="glyphicon glyphicon__edit" />
      <div className="tree-group__row-actions">
        <span className="glyphicon glyphicon__delete" />
        <span className="glyphicon glyphicon__add" />
      </div>
    </div>
    <div className="tree-list">{children}</div>
  </div>
);

const CategoriesNavigation = () => (
  <div className="scrollable-container">
    <div className="scrollable-container__header">
      <AddRootCategory />
    </div>
    <div className="scrollable-container__content scrollable-container__content_left">
      <div className="tree">
        <Category id="1">
          <Category id="1.1" />
          <Category id="1.2" />
        </Category>
        <Category id="2">
          <Category id="2.1" />
        </Category>
        <Category id="3">
          <Category id="3.1" />
          <Category id="3.2" />
          <Category id="3.2" />
        </Category>
        <Category id="1">
          <Category id="1.1" />
          <Category id="1.2" />
        </Category>
        <Category id="2">
          <Category id="2.1" />
        </Category>
        <Category id="3">
          <Category id="3.1" />
          <Category id="3.2" />
          <Category id="3.2" />
        </Category>
        <Category id="1">
          <Category id="1.1" />
          <Category id="1.2" />
        </Category>
        <Category id="2">
          <Category id="2.1" />
        </Category>
        <Category id="3">
          <Category id="3.1" />
          <Category id="3.2" />
          <Category id="3.2" />
        </Category>
      </div>
    </div>
  </div>
);

export default CategoriesNavigation;
