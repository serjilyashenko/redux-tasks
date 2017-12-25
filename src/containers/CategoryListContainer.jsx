// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { categoriesByIdsSelector } from '../redux/state/categoriesById/selectors';
import { rootCategoryEntitiesSelector } from '../redux/state/rootCategories/selectors';
import type { ActiveCategoryId } from '../redux/state/categoriesById/types';
import CategoryList from '../components/CategoryList';
import type { CategoryListProps } from '../components/CategoryList';

const CategoryListContainer = ({ categories, activeCategory }: CategoryListProps) => (
  <CategoryList categories={categories} activeCategory={activeCategory} />
);

type OwnProps = {
  ids?: Array<number>,
  activeCategory: ActiveCategoryId,
};

const mapStateToProps = (state: any, ownProps: OwnProps): CategoryListProps => {
  const { activeCategory, ids } = ownProps;
  const categories = ids
    ? categoriesByIdsSelector(state, ids)
    : rootCategoryEntitiesSelector(state);

  return {
    activeCategory,
    categories,
  };
};

export default connect(mapStateToProps, () => ({}))(CategoryListContainer);
