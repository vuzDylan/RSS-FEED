'use strict';

import React from 'react';
import Nav from '../components/nav';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

function mapStateToProps(store) {
  return {
    user: store.user[store.auth.current],
  };
}

class Home extends React.Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <div>
        <Nav logout={ this.logout } />
        <div className="container-fluid">
          <h1>Hello { this.props.user.username }</h1>
          <p>{ this.props.user.last }</p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home);
