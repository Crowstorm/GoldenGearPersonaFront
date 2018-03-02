import React, { Component } from 'react';
import './App.css';
import logo from './mgp.png'

import TitleScreenContainer from './containers/titleScreenContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} />
        <TitleScreenContainer />
      </div>
    );
  }
}

export default App;
