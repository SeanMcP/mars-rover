import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <nav className="navbar sticky-top navbar-inverse bg-inverse d-flex justify-content-flex-start">
        <div className="d-flex">
          <img src="https://api.nasa.gov/images/logo.png" alt="NASA" style={{height: 36, width: 44}}/>
          <h2>Mars Rover</h2>
        </div>
        {this.props.children}
      </nav>
    )
  }
}
