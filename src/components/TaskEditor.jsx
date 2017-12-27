// @flow
import * as React from 'react';
import type { Task } from '../redux/state/tasksById/types';
import type { TaskActions } from '../containers/TaskPageContainer';

type Props = {
  task: Task,
  actions: TaskActions,
};

type State = {
  title: string,
  completed: boolean,
  description: string,
};

type InputEvent = {
  target: {
    value: string,
  },
};

class TaskEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { task: { title, completed, description } } = this.props;

    this.state = {
      title,
      completed,
      description,
    };
  }

  onSubmit = (event: { preventDefault: () => any }) => {
    event.preventDefault();
  };

  onTitleChange = (event: InputEvent) => this.setState({ title: event.target.value });

  onDescriptionChange = (event: InputEvent) => this.setState({ description: event.target.value });

  onCompletedChange = () =>
    this.setState((prevState: State) => ({ completed: !prevState.completed }));

  onResetForm = () => {
    const { task: { title, completed, description } } = this.props;
    this.setState({ title, completed, description });
  };

  onSave = () => {
    const { task: { id, title, completed, description }, actions } = this.props;
    const newTitle = this.state.title;
    const newCompleted = this.state.completed;
    const newDescription = this.state.description;

    if (this.checkField(title, newTitle)) {
      actions.rename(id, newTitle);
    }

    if (completed !== newCompleted) {
      actions.complete(id);
    }

    if (this.checkField(description, newDescription)) {
      actions.editDescription(id, newDescription);
    }
  };

  checkField = <T>(oldValue: T, newValue: T) => newValue && oldValue !== newValue;

  render() {
    const { title, completed, description } = this.state;
    const { onTitleChange, onDescriptionChange, onCompletedChange, onResetForm, onSave } = this;

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <div className="column-area__container">
            <div className="column-area_right">
              <div className="inline-control">
                <button type="button" className="btn btn-secondary inline-control" onClick={onSave}>
                  Save changes
                </button>
              </div>
              <div className="inline-control">
                <button
                  type="button"
                  className="btn btn-secondary inline-control"
                  onClick={onResetForm}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-4">
              <input
                type="task-name"
                className="form-control"
                placeholder=""
                value={title}
                onChange={onTitleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-check inline-control inline-control_checkbox">
          <label htmlFor="task-done" className="form-check-label">
            <input
              name="task-done"
              type="checkbox"
              checked={completed}
              className="form-check-input"
              onChange={onCompletedChange}
            />
            Done
          </label>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="10"
            placeholder="Description"
            value={description}
            onChange={onDescriptionChange}
          />
        </div>
      </form>
    );
  }
}

export default TaskEditor;
