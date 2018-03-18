import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from './actions';
//import logo from './mgp.png';

import GameContainer from './containers/gameContainer';
import HeaderContainer from './containers/headerContainer';
import CharacterCreationContainer from './containers/characterCreationContainer';
import CombatContainer from './containers/combatContainer'

const Landing = () => <h2>Landing </h2>


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container App">
        <div className="gameContainer">
        {/* <img src={logo} /> */}

          <BrowserRouter>
            <div>
              <HeaderContainer />
              <Route exact={true} path="/" component={Landing} />
              <Route path="/character_creation" component={CharacterCreationContainer} />
              <Route path="/game" component={GameContainer} />
              <Route path='/combat' component={CombatContainer} />
              {/* <Footer /> */}
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
