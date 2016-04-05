'use strict';

import React from 'react';

class Alerts extends React.Component {
  constructor() {
    super();
  }

  render() {
    const className = "alert alert-" + this.props.alert.className;
    return (
      <div className={className} style={{marginTop: "1%"}} role="alert">
        <button className="close" type="button" onClick={this.props.dismiss} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        {this.props.alert.message}
      </div>
    )
  }
}

export default Alerts;
