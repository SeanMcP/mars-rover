import React, { Component } from 'react';

export default class GetImageButton extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <button className="btn" type="submit" onSubmit={this.props.onClick}>Search</button>
    )
  }
}
