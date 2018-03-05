import React from 'react';

import Game from '../components/overworld/game';
import OverworldInterface from '../components/overworld/overworldInterface'

class GameContainer extends React.Component {
    render() {
        return (
            <div>
                <OverworldInterface />
                <Game />
            </div>
        )
    }
}

export default GameContainer;