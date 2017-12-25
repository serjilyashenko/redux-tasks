// @flow
import * as React from 'react';
import TaskList from '../components/TaskList';
import CategoriesPage from '../components/CategoriesPage';

type Props = {
  match: {
    params: {
      id: number,
    },
  },
};

const SelectedCategoryPageContainer = (props: Props) => (
  <CategoriesPage activeCategory={props.match.params.id}>
    <TaskList />
  </CategoriesPage>
);

export default SelectedCategoryPageContainer;
