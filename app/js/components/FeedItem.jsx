'use strict';

import React from 'react';
import { connect } from 'react-redux';

const feed_type = {
  'TECH_FEEDS': 'Tech',
  'SPORTS_FEEDS': 'Sports',
  'US_NEWS_FEEDS': 'US News',
  'WEATHER_FEEDS': 'Weather',
  'WORLD_NEWS_FEEDS': 'World News',
};

function mapStateToProps(store) {
  return {
    favs: store.user[store.auth.current].favorites,
  };
}

class FeedItem extends React.Component {
  constructor() {
    super();

    this.fav = this.fav.bind(this);
    this.open = this.open.bind(this);
  }

  open() {
    window.location.href = this.props.feed.link;
  }

  fav() {
    this.props.fav(this.props.feed);
  }

  render() {
    let favClass = "label label-default label-pill pull-xs-right favorite";
    if (this.props.favs.find(feed => feed === this.props.feed.title)){
      favClass += " active";
    }

    return (
      <li type="button" className="list-group-item">
        <h4 className="list-group-item-heading link" onClick={this.open}>{this.props.feed.title}</h4>
        <span onClick={this.fav} className={favClass}>&#x2605;</span>
        <p className="list-group-item-text">{this.props.feed.date.toString()}</p>
        <p>{feed_type[this.props.feed.feed]}</p>
      </li>
    )
  }
}

export default connect(mapStateToProps)(FeedItem);
