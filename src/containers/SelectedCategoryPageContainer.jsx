// @flow
import * as React from 'react';
import CategoriesPage from '../components/CategoriesPage';
import TaskListContainer from './TaskListContainer';

type Props = {
  match: {
    params: {
      id: string,
    },
  },
};

const SelectedCategoryPageContainer = ({ match: { params: { id } } }: Props) => (
  <CategoriesPage activeCategory={Number(id)}>
    <TaskListContainer activeCategory={Number(id)} />
  </CategoriesPage>
);

export default SelectedCategoryPageContainer;
