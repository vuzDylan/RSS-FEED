'use strict';

import React from 'react';

class Nav extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand" href="#">RSS Feed</a>
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              All  
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              US News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              World News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Weather
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tech
            </a>
          </li>
        </ul>
        <button onClick={ this.logout } type="button" className="btn btn-secondary-outline pull-xs-right">Logout</button>
        <form onSubmit={ this.handleSubmit } className="form-inline pull-xs-right">
          <input className="form-control" type="text" placeholder="Search" />
          <button className="btn btn-success-outline" type="submit">Search</button>
        </form>
      </nav>
    )
  }
}

export default Nav;
