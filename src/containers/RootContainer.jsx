import React from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import configureStore from 'redux/configureStore';
import TaskPageContainer from 'containers/TaskPageContainer';
import CategoryPageContainer from 'containers/CategoryPageContainer';

import categoriesByIdActions from 'redux/state/categoriesById/actions';
import categoriesByIdSelectors from 'redux/state/categoriesById/selectors';
import tasksByIdActions from 'redux/state/tasksById/actions';
import tasksByIdSelectors from 'redux/state/tasksById/selectors';
import rootCategoriesSelectors from 'redux/state/rootCategories/selectors';

const TestComponent = ({ state }) => (
  <div>
    <div>state:</div>
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </div>
);

TestComponent.propTypes = {
  state: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  state,
});

const TestComponentContainer = connect(mapStateToProps)(TestComponent);

const initialState = {
  categoriesById: {
    1: {
      id: 1,
      title: 'hello world 1',
      children: [3],
      parent: null,
      tasks: [],
    },
    2: {
      id: 2,
      title: 'test category',
      children: [],
      parent: null,
      tasks: [1, 2],
    },
    3: {
      id: 3,
      title: 'hello 3',
      children: [4],
      parent: 1,
      tasks: [],
    },
    4: {
      id: 4,
      title: 'hello 4',
      children: [],
      parent: 3,
      tasks: [],
    },
  },
  tasksById: {
    1: {
      id: 1,
      title: 'task 1',
      completed: false,
      category: 2,
    },
    2: {
      id: 2,
      title: 'task 2',
      completed: true,
      category: 2,
    },
  },
  rootCategories: [1, 2],
};

const store = configureStore(initialState);

window.store = store; // TODO: remove it after redux store will be finished
window.cats = categoriesByIdActions; // TODO: remove it after redux store will be finished
window.catsSelectors = categoriesByIdSelectors; // TODO: remove it after redux store will be finished
window.tasks = tasksByIdActions; // TODO: remove it after redux store will be finished
window.tasksSelectors = tasksByIdSelectors; // TODO: remove it after redux store will be finished
window.rootCategoriesSelectors = rootCategoriesSelectors; // TODO: remove it after redux store will be finished

const RootContainer = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Redirect exact from="/" to="/categories" />
          <Route path="/categories" component={CategoryPageContainer} />
          <Route path="/tasks/:id" component={TaskPageContainer} />
          <Route path="/test" component={TestComponentContainer} />
          <Route component={() => <div>404</div>} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default RootContainer;
