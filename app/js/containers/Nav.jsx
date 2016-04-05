'use strict';

import {
  ALL_FEEDS,
  SPORTS_FEEDS,
  WEATHER_FEEDS,
  FAV_FEEDS,
  US_NEWS_FEEDS,
  WORLD_NEWS_FEEDS,
  TECH_FEEDS,
} from '../consts/feed';
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { selectFeed, filterFeed } from '../actions/feed';

function mapStateToProps(store) {
  return {
    selected: store.feed.selected,
  };
}

class Nav extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleFilter() {
    this.props.dispatch(filterFeed(this.refs.search.value));
  }

  handleClick(type, e) {
    e.preventDefault();
    this.props.dispatch(selectFeed(type));
  }

  logout() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand" href="#">RSS Feed</a>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a
              onClick={this.handleClick.bind(this, ALL_FEEDS)}
              className={ "nav-link" + (this.props.selected===ALL_FEEDS ? " active" : "") }
              href="#">
              All  
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={this.handleClick.bind(this, SPORTS_FEEDS)}
              className={ "nav-link" + (this.props.selected===SPORTS_FEEDS ? " active" : "") }
              href="#">
              Sports
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={this.handleClick.bind(this, US_NEWS_FEEDS)}
              className={ "nav-link" + (this.props.selected===US_NEWS_FEEDS ? " active" : "") }
              href="#">
              US News
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={this.handleClick.bind(this, WORLD_NEWS_FEEDS)}
              className={ "nav-link" + (this.props.selected===WORLD_NEWS_FEEDS ? " active" : "") }
              href="#">
              World News
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={this.handleClick.bind(this, WEATHER_FEEDS)}
              className={ "nav-link" + (this.props.selected===WEATHER_FEEDS ? " active" : "") }
              href="#">
              Weather
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={this.handleClick.bind(this, TECH_FEEDS)}
              className={ "nav-link" + (this.props.selected===TECH_FEEDS ? " active" : "") }
              href="#">
              Tech
            </a>
          </li>
        </ul>
        <button onClick={ this.logout } type="button" className="btn btn-secondary-outline pull-xs-right">Logout</button>
        <form onSubmit={ this.handleSubmit } className="form-inline pull-xs-right">
          <input className="form-control" onChange={this.handleFilter} type="text" ref="search" placeholder="Search" />
        </form>
      </nav>
    )
  }
}

export default connect(mapStateToProps)(Nav);
