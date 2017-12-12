import React from 'react';
import { Link } from 'react-router-dom';
import AddRootCategory from './AddRootCategory';

const CategoriesNavigation = () => (
  <div className="scrollable-container">
    <div className="scrollable-container__header">
      <AddRootCategory />
    </div>
    <div className="scrollable-container__content scrollable-container__content_left">
      <div className="tree">
        <div className="tree-group">
          <div className="tree-group__row">
            <Link className="tree-group__row-link" to="/" href="/">
              <input name="" type="checkbox" checked onChange={() => {}} />
              Category 1
            </Link>
            <span className="glyphicon glyphicon__edit" />
            <div className="tree-group__row-actions">
              <span className="glyphicon glyphicon__delete" />
              <span className="glyphicon glyphicon__add" />
            </div>
          </div>
          <div className="tree-list">
            <div className="tree-group">
              <div className="tree-group__row">
                <Link className="tree-group__row-link" to="/" href="/">
                  <input name="" type="checkbox" onChange={() => {}} />
                  Category 2 1
                </Link>
                <span className="glyphicon glyphicon__edit" />
                <div className="tree-group__row-actions">
                  <span className="glyphicon glyphicon__delete" />
                  <span className="glyphicon glyphicon__add" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tree-group">
          <div className="tree-group__row">
            <Link className="tree-group__row-link" to="/" href="/">
              <input name="" type="checkbox" onChange={() => {}} />
              Category 2
            </Link>
            <span className="glyphicon glyphicon__edit" />
            <div className="tree-group__row-actions">
              <span className="glyphicon glyphicon__delete" />
              <span className="glyphicon glyphicon__add" />
            </div>
          </div>
          <div className="tree-list">
            <div className="tree-group">
              <div className="tree-group__row">Category 3 1</div>
            </div>
          </div>
        </div>
        <div className="tree-group">
          <div className="tree-group__row">Category 3</div>
          <div className="tree-list">
            <div className="tree-group">
              <div className="tree-group__row">Category 3 1</div>
            </div>
            <div className="tree-group">
              <div className="tree-group__row">Category 3 2</div>
            </div>
            <div className="tree-group">
              <div className="tree-group__row">Category 3 3</div>
            </div>
          </div>
        </div>
        <div className="tree-group">
          <div className="tree-group__row">Category 1</div>
          <div className="tree-list">
            <div className="tree-group">
              <div className="tree-group__row">Category 1 1</div>
            </div>
          </div>
        </div>
        <div className="tree-group">
          <div className="tree-group__row">Category 2</div>
          <div className="tree-list">
            <div className="tree-group">
              <div className="tree-group__row">Category 3 1</div>
            </div>
          </div>
        </div>
        <div className="tree-group">
          <div className="tree-group__row">Category 3</div>
          <div className="tree-list">
            <div className="tree-group">
              <div className="tree-group__row">Category 3 1</div>
            </div>
            <div className="tree-group">
              <div className="tree-group__row">Category 3 2</div>
            </div>
            <div className="tree-group">
              <div className="tree-group__row">Category 3 3</div>
            </div>
          </div>
        </div>
        <div className="tree-group">
          <div className="tree-group__row">Category 1</div>
          <div className="tree-list">
            <div className="tree-group">
              <div className="tree-group__row">Category 1 1</div>
            </div>
          </div>
        </div>
        <div className="tree-group">
          <div className="tree-group__row">Category 2</div>
          <div className="tree-list">
            <div className="tree-group">
              <div className="tree-group__row">Category 3 1</div>
            </div>
          </div>
        </div>
        <div className="tree-group">
          <div className="tree-group__row">Category 3</div>
          <div className="tree-list">
            <div className="tree-group">
              <div className="tree-group__row">Category 3 1</div>
            </div>
            <div className="tree-group">
              <div className="tree-group__row">Category 3 2</div>
            </div>
            <div className="tree-group">
              <div className="tree-group__row">Category 3 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CategoriesNavigation;
