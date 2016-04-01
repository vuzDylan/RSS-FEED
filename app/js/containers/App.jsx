'use strict';

import React from 'react';
import Login from '../components/login';
import { connect } from 'react-redux';
import { login, checkLogin } from '../actions/auth';
import { retrieve } from '../actions/user';
import { addUser } from '../actions/user';

function mapStateToProps(store) {
  return {
    login: store.auth.login,
  };
}

class App extends React.Component {
  constructor() {
    super();

    this.renderLogin = this.renderLogin.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(retrieve());
    this.props.dispatch(checkLogin());
  }

  loginUser(username, password) {
    this.props.dispatch(login({username, password}));
  }

  createUser(username, password) {
    this.props.dispatch(addUser({username, password}));
  }

  renderLogin() {
    return (
      <Login 
        login={this.loginUser}
        createUser={this.createUser}
      />
    )
  }

  render() {
    return (
      <div className="container-fluid">
        {this.props.login ? this.props.children : this.renderLogin()}
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
