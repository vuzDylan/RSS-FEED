'use strict';

import React from 'react';
import Nav from '../containers/Nav';
import { connect } from 'react-redux';

function mapStateToProps(store) {
  return {
    user: store.user[store.auth.current],
  };
}

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid">
          <h1>Hello { this.props.user.username }</h1>
          <p>{ this.props.user.last }</p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home);
