import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from './BaseLayout'
import Navbar from './Navbar'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <BaseLayout>
        <Navbar>
          <h2>I am the navbar</h2>
        </Navbar>
        <h1>Yo</h1>
      </BaseLayout>
    );
  }
}

export default App;
