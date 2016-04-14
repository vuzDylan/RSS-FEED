'use strict';

import React from 'react';
import FeedItem from './FeedItem';

class Feed extends React.Component {
  render() {
    const feeds = this.props.feeds.map(feed => {
      return (
        <FeedItem
          key={feed.title}
          feed={feed}
          fav={this.props.fav}
        />
      );
    });
    return (
      <ul className="list-group">
        {feeds}
      </ul>
    )
  }
}

export default Feed;
