'use strict';

import React from 'react';
import FeedItem from './FeedItem';

class Feed extends React.Component {
  constructor() {
    super();

    this.sort = this.sort.bind(this);
  }

  sort() {
    return this.props.feeds.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      } else if (b.date > a.date) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  render() {
    const feeds = this.sort().map(feed => {
      return (
        <FeedItem
          key={feed.title}
          feed={feed}
          fav={this.props.toggleFav}
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
