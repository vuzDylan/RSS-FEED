'use strict';

import React from 'react';
import Login from './Login';
import Home from '../components/Home';
import { connect } from 'react-redux';
import { retrieve } from '../actions/user';
import { checkLogin } from '../actions/auth';

function mapStateToProps(store) {
  return {
    login: store.auth.login,
  };
}

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(retrieve());
    this.props.dispatch(checkLogin());
  }

  render() {
    return this.props.login ?  <Home /> : <Login />
  }
}

export default connect(mapStateToProps)(App);
