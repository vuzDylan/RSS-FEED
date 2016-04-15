'use strict';

import React from 'react';
import Feed from '../components/Feed';
import Alerts from '../components/Alerts';
import { connect } from 'react-redux';
import { favorite } from '../actions/user';
import { closeAlert } from '../actions/alerts';
import { getFeed } from '../actions/feed';

function mapStateToProps(store) {
  return {
    alert: store.alerts,
    filter: store.feed.filter,
    selected: store.feed.selected,
    feeds: store.feed.feeds,
    user: store.user,
    current: store.auth.current,
  };
}

class FeedContainer extends React.Component {
  constructor() {
    super();

    this.filter = this.filter.bind(this);
    this.dismiss = this.dismiss.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getFeed('WEATHER_FEEDS'));
    this.props.dispatch(getFeed('US_NEWS_FEEDS'));
    this.props.dispatch(getFeed('WORLD_NEWS_FEEDS'));
    this.props.dispatch(getFeed('TECH_FEEDS'));
    this.props.dispatch(getFeed('SPORTS_FEEDS'));
  }

  dismiss() {
    this.props.dispatch(closeAlert());
  }

  toggleFav(fav) {
    this.props.dispatch(favorite(fav));
  }

  filter() {
    return this.props.feeds.filter(feed => {
      if (this.props.selected === "FAV_FEEDS") {
        return !!this.props.user[this.props.current].favorites.find(fav => fav === feed.title);
      } else {
        return this.props.selected === "ALL_FEEDS" || this.props.selected === feed.feed;
      }
    }).filter(feed => {
      return feed.title.indexOf(this.props.filter) !== -1;
    });
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
                <Feed feeds={this.filter()} toggleFav={this.toggleFav} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(FeedContainer);
