import React, { Component } from 'react';

export default class GetImageButton extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <button className="btn btn-secondary ml-2" type="submit" onSubmit={this.props.onClick}>Search</button>
    )
  }
}
