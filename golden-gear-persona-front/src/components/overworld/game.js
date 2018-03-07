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
            return <div key={1} className="row"> {_.map(row, cell => {
                return <div key={cell.x +'.'+ cell.y}style={{ height: 100 + 'px', width: 100 + 'px' }}> x: {cell.x}, y: {cell.y} </div>
            })
            } </div>
        })
    }

    handleClick = () =>{
        console.log(this.props)
       //const x = 2; const y = 2;
        //this.props.moveChar(x, y);
        this.props.moveCharUp();
    }

    render() {
        console.log('props in game', this.props)

        return (
            <div className="game">
                <div className="container">
                    {this.renderGrid()}
                    <button onClick={this.handleClick}>Move up</button>
                </div>
            </div>
        )
    }
}

export default Game;