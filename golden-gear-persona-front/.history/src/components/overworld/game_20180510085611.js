import React from 'react';
import _ from 'lodash';
import './game.css';
import princess from '../assets/princess2.png'

import { GRID25, BLOCKED } from './grids'


//levels
import ThroneRoom from './levels/throneRoom'

//lista zablokowanych pol
// const BLOCKED = [

// ]

class Game extends React.Component {

    render() {
        console.log(this.props, 'propsy');
        let levelRenderer = () => {
            switch (this.props.mechanics.currentLevel) {
                case "ThroneRoom":
                return (
                    <ThroneRoom {...this.props} />
                )
            }
        }
        return (
            <div className="game" style={{ position: 'relative' }}>

                {/* <div>
                    <p style={{color: 'black'}}>Obecna pozycja: {this.props.charPosition.x}, {this.props.charPosition.y} </p>
                </div>
                 */}
                {/* <ThroneRoom {...this.props} /> */}
                {levelRenderer}

            </div>
        )
    }
}

export default Game;