import React from 'react';
import _ from 'lodash';
import './game.css';


const GRID = [
    [{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }],
    [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }],
    [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
]
class Game extends React.Component {
    renderGrid() {
        return _.map(GRID, row => {
            return <div className="row"> {_.map(row, cell => {
                return <div style={{ height: 100 + 'px', width: 100 + 'px' }}> x: {cell.x}, y: {cell.y} </div>
            })
            } </div>
        })
    }

    render() {
        return (
            <div className="game">
                <div className="container">
                    {this.renderGrid()}
                </div>
            </div>
        )
    }
}

export default Game;