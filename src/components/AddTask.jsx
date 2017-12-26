// @flow
import * as React from 'react';

type Props = {
  create: (title: string) => any,
};

type State = {
  title: string,
};

class AddTask extends React.Component<Props, State> {
  state = {
    title: '',
  };

  onChange = (event: { target: { value: string } }) => this.setState({ title: event.target.value });

  onSubmit = (event: { preventDefault: () => any }) => {
    event.preventDefault();
    const { title } = this.state;
    const { create } = this.props;

    if (!title) {
      return;
    }

    create(title);
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;

    return (
      <form className="input-group" onSubmit={this.onSubmit}>
        <input
          name="add-task"
          type="text"
          value={title}
          onChange={this.onChange}
          className="form-control"
          placeholder="Enter task title"
          aria-label="add-category"
        />
        <span className="input-group-btn">
          <input type="submit" value="Add" className="btn btn-secondary" />
        </span>
      </form>
    );
  }
}

export default AddTask;
