import React from 'react';
import { connect } from 'react-redux';
import { rootCategoryEntitiesSelector } from '../redux/state/rootCategories/selectors';
import CategoryList from '../components/CategoryList';

const RootCategoryListContainer = ({ categories, activeCategory }) => (
  <CategoryList categories={categories} activeCategory={activeCategory} />
);

const mapStateToProps = (state, { activeCategory }) => ({
  activeCategory,
  categories: rootCategoryEntitiesSelector(state),
});

export default connect(mapStateToProps)(RootCategoryListContainer);
