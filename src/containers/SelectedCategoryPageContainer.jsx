// @flow
import * as React from 'react';
import TaskList from '../components/TaskList';
import CategoriesPage from '../components/CategoriesPage';

type Props = {
  match: {
    params: {
      id: string,
    },
  },
};

const SelectedCategoryPageContainer = (props: Props) => (
  <CategoriesPage activeCategory={Number(props.match.params.id)}>
    <TaskList />
  </CategoriesPage>
);

export default SelectedCategoryPageContainer;
