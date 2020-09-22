import React, { Component, Fragment } from 'react';

class Children extends Component {
  render() {
    return (
      <Fragment>
        <button>Mudar text</button>
      </Fragment>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { text: 'Este Texto' }
  }
  render() {
    return (
      <>
        <h1>{this.state.text}</h1>
        <Children />
      </>
    );
  }
}

export default App;
