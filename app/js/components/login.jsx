'use strict';

import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  login() {
    this.props.login(
      this.refs.username.value,
      this.refs.password.value
    )
  }

  register() {
    this.props.createUser(
      this.refs.username.value,
      this.refs.password.value
    )
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3 v-center card">
          <div className="card-block">
            <div className="card-block">
              <h2 id="title" className="text-primary text-xs-center">Yolo Feed</h2>
              <hr />
              <form>
                <fieldset className="form-group">
                  <input ref="username" className="form-control form-control-lg" type="text" placeholder="username" />
                </fieldset>
                <fieldset className="form-group">
                  <input ref="password" className="form-control form-control-lg" type="password" placeholder="password" />
                </fieldset>
              </form>
              <button type="button" className="btn btn-primary-outline btn-block" onClick={this.login}>Login</button>
              <button type="button" className="btn btn-warning-outline btn-block" onClick={this.register}>Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
