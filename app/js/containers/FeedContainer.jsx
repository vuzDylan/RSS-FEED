'use strict';

import React from 'react';
import Feed from '../components/Feed';
import Alerts from '../components/Alerts';
import { connect } from 'react-redux';
import { closeAlert } from '../actions/alerts';
import { getFeed } from '../actions/feed';

function mapStateToProps(store) {
  return {
    alert: store.alerts,
    feeds: store.feed.feeds,
  };
}

class FeedContainer extends React.Component {
  constructor() {
    super();

    this.dismiss = this.dismiss.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getFeed('weather'));
    this.props.dispatch(getFeed('usNews'));
    this.props.dispatch(getFeed('worldNews'));
    this.props.dispatch(getFeed('tech'));
  }

  dismiss() {
    this.props.dispatch(closeAlert());
  }

  render() {
    return (
      <div className="container-fluid">
        { this.props.alert.message ?
            <Alerts dismiss={this.dismiss} alert={this.props.alert} /> : null }
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title text-xs-center">Yolo Feed</h4>
                <Feed feeds={this.props.feeds} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(FeedContainer);
