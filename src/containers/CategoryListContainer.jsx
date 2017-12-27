// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { categoriesByIdsSelector } from '../redux/state/categoriesById/selectors';
import { createCategory, removeCategory } from '../redux/state/categoriesById/actions';
import { moveTaskTo } from '../redux/state/tasksById/actions';
import { rootCategoryEntitiesSelector } from '../redux/state/rootCategories/selectors';
import CategoryList from '../components/CategoryList';
import type { CategoryListProps } from '../components/CategoryList';
import type { CategoryComponentProps } from '../components/CategoryEditable';
import type {ActiveCategoryId} from "../redux/state/categoriesById/types";

const CategoryListContainer = ({
  CategoryComponent,
  categories,
  activeCategory,
  activeTask,
  actions,
}: CategoryListProps) => (
  <CategoryList
    CategoryComponent={CategoryComponent}
    categories={categories}
    activeCategory={activeCategory}
    activeTask={activeTask}
    actions={actions}
  />
);

type OwnProps = {
  ids?: Array<number>,
  activeCategory: ActiveCategoryId,
  activeTask?: number,
  CategoryComponent: (props: CategoryComponentProps) => React.Node,
};

const mapStateToProps = (state: any, ownProps: OwnProps) => {
  const { CategoryComponent, activeCategory, activeTask, ids } = ownProps;
  const categories = ids
    ? categoriesByIdsSelector(state, ids)
    : rootCategoryEntitiesSelector(state);

  return {
    CategoryComponent,
    activeCategory,
    activeTask,
    categories,
  };
};

const mapDispatchToProps = (dispatch, ownProps: OwnProps) => ({
  actions: {
    create: (title: string, parent: number) => dispatch(createCategory(title, parent)),
    remove: (id: number) => dispatch(removeCategory(id)),
    moveTaskTo: (id: number) => dispatch(moveTaskTo(ownProps.activeTask, id)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer);
