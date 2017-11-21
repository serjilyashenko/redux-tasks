import React from 'react';

class App extends React.Component {
  state = {
    world: 'hi',
  };

  render() {
    return (
      <div>
        <h1 className="app__element">
          {this.props.text} {this.state.world}
        </h1>
      </div>
    );
  }
}

export default App;
