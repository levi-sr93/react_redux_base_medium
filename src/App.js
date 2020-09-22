import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import appActions from './appActions';
import store from './store';

class Children extends Component {
  setText(){
    this.props.dispatch(appActions.setText('Aquele Texto'))
  }

  render() {
    return (
      <Fragment>
        <button>Mudar text</button>
      </Fragment>
    )
  }
}

const ChildrenConnected = connect( store => ({text: store.text}))(Children);

class App extends Component {
  constructor() {
    super();
    this.state = { text: 'Este Texto' }
  }
  render() {
    return (
      <Fragment>
        <h1>{this.state.text}</h1>
        <ChildrenConnected />
      </Fragment>
    );
  }
}

export default connect(store => ({text: store.text}))(App);
