import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from './BaseLayout'
import Navbar from './Navbar'
import GetImageForm from './GetImageForm'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <BaseLayout>
        <Navbar>
          <GetImageForm />
        </Navbar>
        <h1>Yo</h1>
      </BaseLayout>
    );
  }
}

export default App;
