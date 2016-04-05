'use strict';

import React from 'react';
import Nav from '../containers/Nav';
import FeedContainer from '../containers/FeedContainer';

class Home extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Nav />
        <FeedContainer />
      </div>
    )
  }
}

export default Home;
