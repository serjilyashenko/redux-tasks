import React from 'react';
import CategoryEditable from './CategoryEditable';

const CategoryList = ({ categories, activeCategory }) =>
  categories.map(category => (
    <CategoryEditable
      key={category.id}
      category={category}
      activeCategory={activeCategory}
    />
  ));

export default CategoryList;
