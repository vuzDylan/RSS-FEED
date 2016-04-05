'use strict';

import React from 'react';
import Login from '../components/login';
import Home from './Home';
import { connect } from 'react-redux';
import { login, checkLogin } from '../actions/auth';
import { retrieve } from '../actions/user';
import { addUser } from '../actions/user';
import getRss from '../providers/rss';

function mapStateToProps(store) {
  return {
    login: store.auth.login,
  };
}

class App extends React.Component {
  constructor() {
    super();

    this.loginUser = this.loginUser.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(retrieve());
    this.props.dispatch(checkLogin());
    getRss('usNews').then(data => {
      console.log(data);
    });
  }

  loginUser(username, password) {
    this.props.dispatch(login({username, password}));
  }

  createUser(username, password) {
    this.props.dispatch(addUser({username, password}));
  }

  render() {
    return this.props.login ?
      <Home /> : <Login login={this.loginUser} createUser={this.createUser} />
  }
}

export default connect(mapStateToProps)(App);
