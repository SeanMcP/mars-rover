import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from './BaseLayout'
import GetImageForm from './GetImageForm'

class App extends Component {
  render() {
    return (
      <BaseLayout>
        <GetImageForm />
      </BaseLayout>
    );
  }
}

export default App;
