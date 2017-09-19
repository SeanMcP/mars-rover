import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from './BaseLayout.js'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <BaseLayout>
        <h1>Yo</h1>
      </BaseLayout>
    );
  }
}

export default App;
