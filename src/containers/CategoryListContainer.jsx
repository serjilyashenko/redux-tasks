import React from 'react';
import { connect } from 'react-redux';
import { categoriesByIdsSelector } from '../redux/state/categoriesById/selectors';
import CategoryList from '../components/CategoryList';

const CategoryListContainer = ({ categories, activeCategory }) => (
  <CategoryList categories={categories} activeCategory={activeCategory} />
);

const mapStateToProps = (state, { ids, activeCategory }) => ({
  categories: categoriesByIdsSelector(state, ids),
  activeCategory
});

export default connect(mapStateToProps)(CategoryListContainer);
