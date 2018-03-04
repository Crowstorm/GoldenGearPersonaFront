import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './mgp.png'

import HeaderContainer from './containers/headerContainer'
import TitleScreenContainer from './containers/titleScreenContainer'

const Dashboard = () => <h2>Dashboard </h2>
const Landing = () => <h2>Landing </h2>
const Footer = () => <h2>Footer </h2>

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="gameContainer">
        {/* <img src={logo} /> */}

          <BrowserRouter>
            <div>
              <HeaderContainer />
              <Route exact={true} path="/" component={Landing} />
              <Route path="/surveys" component={Dashboard} />

              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
