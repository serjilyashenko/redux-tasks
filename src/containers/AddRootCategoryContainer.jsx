// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import AddRootCategory from '../components/AddRootCategory';
import { createCategory } from '../redux/state/categoriesById/actions';

type Props = {
  addCategory: (title: string) => any,
};

const AddRootCategoryContainer = ({ addCategory }: Props) => <AddRootCategory add={addCategory} />;

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addCategory: (title: string) => dispatch(createCategory(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRootCategoryContainer);
