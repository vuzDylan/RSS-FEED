'use strict';

import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(store) {
  return {
  };
}

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}

export default connect(mapStateToProps)(Home);
