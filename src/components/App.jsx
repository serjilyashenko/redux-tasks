/* eslint-disable */
import React, { Component } from 'react';

let idCounter = 10;

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      isEditing: false,
    };
  }

  handleOnChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleOnDoubleClick = () => {
    this.setState({
      isEditing: true,
    });
  };

  moveCaretAtEnd = e => {
    const tempValue = e.target.value;
    e.target.value = '';
    e.target.value = tempValue;
  };

  handleOnSubmit = e => {
    const { value } = this.state;
    e.preventDefault();
    if (value) {
      this.props.onSave(value);
      this.setState({
        isEditing: false,
      });
    }
  };

  render() {
    const { isEditing } = this.state;
    const value = isEditing ? this.state.value : this.props.value;
    if (!isEditing) {
      return <span onDoubleClick={this.handleOnDoubleClick}>{this.props.value}</span>;
    }

    return (
      <form
        style={{ display: 'inline-block' }}
        onSubmit={this.handleOnSubmit}
        onBlur={this.handleOnSubmit}
      >
        <input
          value={value}
          onChange={this.handleOnChange}
          onDoubleClick={this.handleOnDoubleClick}
        />
      </form>
    );
  }
}

class App extends Component {
  state = {
    newCategoryTitle: '',
    categoriesById: {
      1: {
        id: 1,
        title: 'hello world',
        children: [],
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
    },
    rootCategories: [1, 2],
    activeCategory: 2,
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
  };

  handleOnChange = e => {
    this.setState({
      newCategoryTitle: e.target.value,
    });
  };

  handleOnSubmit = e => {
    const { newCategoryTitle } = this.state;
    e.preventDefault();
    this.addCategory(newCategoryTitle);
  };

  addCategory(title, parentId) {
    if (!title) {
      return;
    }

    const id = idCounter++;
    const category = { title, id, deleted: false, children: [], parent: null };
    const rootCategories = this.state.rootCategories.slice();
    let categoriesById = { ...this.state.categoriesById };

    if (parentId) {
      const parent = categoriesById[parentId];
      const children = parent.children.slice();
      children.push(category.id);
      categoriesById = {
        ...categoriesById,
        [parent.id]: { ...parent, children, parent: parent.id },
      };
    } else {
      rootCategories.push(category.id);
    }

    categoriesById = { ...categoriesById, [category.id]: category };
    this.setState({
      newCategoryTitle: '',
      rootCategories,
      categoriesById,
    });
  }

  removeCategory(id) {
    this.setState(prevState => ({
      ...prevState,
      categoriesById: {
        ...prevState.categoriesById,
        [id]: {
          ...prevState.categoriesById[id],
          deleted: true,
        },
      },
    }));
  }

  handleOnSave = (id, value) => {
    this.setState(prevState => ({
      ...prevState,
      categoriesById: {
        ...prevState.categoriesById,
        [id]: {
          ...prevState.categoriesById[id],
          title: value,
        },
      },
    }));
  };

  handleOnClick = id => {
    this.setState({
      activeCategory: id,
    });
  };

  renderCategories(ids) {
    const { activeCategory } = this.state;
    return ids.map(id => {
      const category = this.state.categoriesById[id];

      if (category.deleted) {
        return null;
      }

      const children = category.children.length ? this.renderCategories(category.children) : null;
      return (
        <div key={id} className="category-item">
          <span onClick={() => this.handleOnClick(id)}>
            {activeCategory === id ? '>' : ''}
            <TextInput value={category.title} onSave={value => this.handleOnSave(id, value)} />{' '}
          </span>
          <span onClick={() => this.addCategory('children name', id)}>+</span>{' '}
          <span onClick={() => this.removeCategory(id)}>x</span>
          <div>{children}</div>
        </div>
      );
    });
  }

  renderTasks(ids = []) {
    return ids.map(id => <div key={id}>hello {this.state.tasksById[id].title}</div>);
  }

  render() {
    const { activeCategory, categoriesById, rootCategories, newCategoryTitle } = this.state;
    const activeTasks = activeCategory ? categoriesById[activeCategory].tasks : [];
    return (
      <div>
        <form className="input-group" onSubmit={this.handleOnSubmit}>
          <input
            name="add-category"
            type="text"
            value={newCategoryTitle}
            onChange={this.handleOnChange}
            className="form-control"
            placeholder="Enter category title"
            aria-label="add-category"
          />
          <span className="input-group-btn">
            <input type="submit" value="Add" className="btn btn-secondary" />
          </span>
        </form>
        <h2>Categories</h2>
        <div>{this.renderCategories(rootCategories)}</div>
        <h2>Tasks for {activeCategory}</h2>
        <div>{this.renderTasks(activeTasks)}</div>
      </div>
    );
  }
}

export default App;
