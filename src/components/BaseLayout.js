import React, { Component } from 'react';

export default class BaseLayout extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
