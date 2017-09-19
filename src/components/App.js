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
      </BaseLayout>
    );
  }
}

export default App;
