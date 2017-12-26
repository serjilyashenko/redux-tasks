// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { categoriesByIdsSelector } from '../redux/state/categoriesById/selectors';
import { createCategory, removeCategory } from '../redux/state/categoriesById/actions';
import { rootCategoryEntitiesSelector } from '../redux/state/rootCategories/selectors';
import type { ActiveCategoryId } from '../redux/state/categoriesById/types';
import CategoryList from '../components/CategoryList';
import type { CategoryListProps } from '../components/CategoryList';

const CategoryListContainer = ({ categories, activeCategory, actions }: CategoryListProps) => (
  <CategoryList categories={categories} activeCategory={activeCategory} actions={actions} />
);

type OwnProps = {
  ids?: Array<number>,
  activeCategory: ActiveCategoryId,
};

const mapStateToProps = (state: any, ownProps: OwnProps) => {
  const { activeCategory, ids } = ownProps;
  const categories = ids
    ? categoriesByIdsSelector(state, ids)
    : rootCategoryEntitiesSelector(state);

  return {
    activeCategory,
    categories,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    create: (title: string, parent: number) => dispatch(createCategory(title, parent)),
    remove: (id: number) => dispatch(removeCategory(id)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer);
