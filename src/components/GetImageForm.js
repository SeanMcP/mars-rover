import React, { Component } from 'react';

import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'

const API_KEY = "MVHTfQrfmsyH7Ko3RBBgdudnBbDzYpgQASS8AHMf"

export default class GetImageForm extends Component {
  constructor() {
    super()
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    }
    this.handleRover = this.handleRover.bind(this)
    this.handleCamera = this.handleCamera.bind(this)
    this.handleSol = this.handleSol.bind(this)
    this.fetchRoverImage = this.fetchRoverImage.bind(this)
  }
  handleRover(e) {
    e.preventDefault();
    this.setState({rover: e.target.value})
  }
  handleCamera(e) {
    e.preventDefault();
    this.setState({camera: e.target.value})
  }
  handleSol(e) {
    e.preventDefault();
    this.setState({sol: e.target.value})
  }
  fetchRoverImage(e) {
    e.preventDefault()
    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

    fetch(imageUrl)
    .then(results => results.json())
    .then(responseData => {
      this.setState({images: responseData.photos})
    })
    .catch(error => console.log('Error with fetching: ', error))
  }
  render() {
    return (
      <div className="">
        <div className="d-flex p-2 justify-content-between" style={{backgroundColor: 'black', color: 'white'}}>
          <img src="https://api.nasa.gov/images/logo.png" alt="NASA" style={{height: 36, width: 44}}/>
          <form onSubmit={this.fetchRoverImage}>
            <label htmlFor="rover" className="mx-2">Rover:</label>
            <select onChange={this.handleRover} id="rover" value={this.state.value}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirt</option>
            </select>
            <label htmlFor="camera" className="mx-2">Camera Type:</label>
            <select onChange={this.handleCamera} id="rover" value={this.state.value}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
            <label htmlFor="sol" className="mx-2">Martian Sol: 1000-2000</label>
            <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
            <GetImageButton onClick={this.fetchRoverImage} />
          </form>
        </div>
        <ImageDisplay images={this.state.images} />
      </div>
    )
  }
}
