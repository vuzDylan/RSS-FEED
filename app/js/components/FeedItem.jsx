'use strict';

import React from 'react';

// add css for link and favorite

class FeedItem extends React.Component {
  render() {
    return (
      <li type="button" className="list-group-item">
        <h4 className="list-group-item-heading link">{this.props.title}</h4>
        <span className="label label-default label-pill pull-xs-right favorite">&#x2605;</span>
        <p className="list-group-item-text">stuff...</p>
      </li>
    )
  }
}

export default FeedItem;
