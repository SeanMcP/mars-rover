import React, { Component } from 'react';

export default class ImageDisplay extends Component {

  render() {
    let displayImages = this.props.images.map(image => {
      return (
        <div key={image.id} className="card m-5">
          <img className="card-img-top" src={image.img_src} alt="" />
          <div className="card-footer text-muted p-2 text-center">
            Rover: {image.rover.name} | Sol: {image.sol} ({image.earth_date})
          </div>
        </div>
      )
    })
    return (
      <div className="container">
        {displayImages}
      </div>
    )
  }
}
