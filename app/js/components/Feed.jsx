'use strict';

import React from 'react';
import FeedItem from './FeedItem';

const test = ['Test1', 'Test2', 'Test3'];

class Feed extends React.Component {
  render() {
    const feeds = test.map(title => {
      return (
        <FeedItem key={title} title={title} />
      );
    });
    console.log(feeds);
    return (
      <ul className="list-group">
        {feeds}
      </ul>
    )
  }
}

export default Feed;
