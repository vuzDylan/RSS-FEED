'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { closeAlert } from '../actions/alerts';
import { addUser } from '../actions/user';

function mapStateToProps(store) {
  return {
    alert: store.alerts,
  }
}

class Login extends React.Component {
  constructor() {
    super();

    this.dismiss = this.dismiss.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
  }

  dismiss(e) {
    e.preventDefault();
    this.props.dispatch(closeAlert());
  }

  renderAlert() {
    const className = "alert alert-" + this.props.alert.className;
    return this.props.alert.message ? 
        <div className={className} role="alert">
          <button onClick={this.dismiss} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          {this.props.alert.message}
        </div> : null;
  }

  loginUser(e) {
    e.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.props.dispatch(login({username, password}));
  }

  createUser(e) {
    e.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.props.dispatch(addUser({username, password}));
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3 v-center card">
          <div className="card-block">
            {this.renderAlert()}
            <div className="card-block">
              <h2 id="title" className="text-primary text-xs-center">Yolo Feed</h2>
              <hr />
              <form onSubmit={this.loginUser}>
                <fieldset className="form-group">
                  <input ref="username" className="form-control form-control-lg" type="text" placeholder="username" />
                </fieldset>
                <fieldset className="form-group">
                  <input ref="password" className="form-control form-control-lg" type="password" placeholder="password" />
                </fieldset>
                <button className="btn btn-primary-outline btn-block" onClick={this.loginUser}>Login</button>
                <button type="button" className="btn btn-warning-outline btn-block" onClick={this.createUser}>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
