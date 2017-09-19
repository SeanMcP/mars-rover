import React, { Component } from 'react';

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
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="rover">Rover:</label>
          <select onChange={this.handleRover} id="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
          <label htmlFor="camera">Camera Type:</label>
          <select onChange={this.handleCamera} id="rover" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        </div>
      </form>
    )
  }
}
