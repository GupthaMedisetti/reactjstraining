import React, { Component } from 'react';
import { FormContainer } from './containers/Form';
import { DisplayContainer } from './containers/Display';

class App extends Component {
  render() {
    return (
        <div>
            <FormContainer />
            <DisplayContainer />
        </div>
    );
  }
}

export default App;
