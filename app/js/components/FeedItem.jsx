'use strict';

import React from 'react';

// add css for link and favorite

class FeedItem extends React.Component {
  constructor() {
    super();

    this.open = this.open.bind(this);
  }

  open() {
    window.location.href = this.props.feed.link;
  }

  fav() {
    this.props.fav(this.props.feed);
  }

  render() {
    return (
      <li type="button" className="list-group-item">
        <h4 className="list-group-item-heading link" onClick={this.open}>{this.props.feed.title}</h4>
        <span className="label label-default label-pill pull-xs-right favorite">&#x2605;</span>
        <p className="list-group-item-text">{this.props.feed.date.toString()}</p>
      </li>
    )
  }
}

export default FeedItem;
