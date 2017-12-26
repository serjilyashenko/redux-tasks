// @flow
import * as React from 'react';

type Props = {
  add: (title: string) => any,
};

type State = {
  title: string,
};

class AddRootCategory extends React.Component<Props, State> {
  state = {
    title: '',
  };

  onChange = (event: { target: { value: string } }) => {
    this.setState({
      title: event.target.value,
    });
  };

  onSubmit = (event: { preventDefault: () => any }) => {
    event.preventDefault();
    const { add } = this.props;
    const { title } = this.state;

    if (!title) {
      return;
    }

    add(title);
    this.setState({
      title: '',
    });
  };

  render() {
    const { title } = this.state;

    return (
      <div className="adding-input adding-input_short">
        <form className="input-group" onSubmit={this.onSubmit}>
          <input
            name="add-category"
            type="text"
            value={title}
            onChange={this.onChange}
            className="form-control"
            placeholder="Enter category title"
            aria-label="add-category"
          />
          <span className="input-group-btn">
            <input type="submit" value="Add" className="btn btn-secondary" />
          </span>
        </form>
      </div>
    );
  }
}

export default AddRootCategory;
