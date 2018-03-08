import React from 'react';
import _ from 'lodash';
import './game.css';


const GRID = [
    [{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }],
    [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }],
    [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
]
class Game extends React.Component {

    renderPosition = (cell) =>{
        if(this.props.charPosition.x == cell.x && this.props.charPosition.y == cell.y){
            return 'Tu jestem xD'
        }
    }
    
    renderGrid() {
        return _.map(GRID, row => {
            return <div key={`row${row[0].y}`} className="row"> {_.map(row, cell => {
                return <div key={cell.x + '.' + cell.y} style={{ height: 100, width: 100 }}> x: {cell.x}, y: {cell.y} {this.renderPosition(cell)} </div>
            })
            } </div>
        })
    }

    


    handleClick = () => {
        console.log(this.props)
        this.props.moveCharUp();
    }

    handleKeyDown = (e) => {
        console.log(e);
        switch (e.key) {
            case "ArrowUp": {
                this.props.moveCharUp();
                break;
            }
            case "ArrowDown": {
                this.props.moveCharDown();
                break;
            }
            case "ArrowLeft": {
                this.props.moveCharLeft();
                break;
            }
            case "ArrowRight": {
                this.props.moveCharRight();
                break;
            }
            default: { return }
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    render() {
        return (
            <div className="game">
                <div onKeyDown={this.handleKeyDown} className="container">
                    {this.renderGrid()}
                    <button onClick={this.handleClick}>Move up</button>
                </div>
                <div>
                    <p>Obecna pozycja: {this.props.charPosition.x}, {this.props.charPosition.y} </p>
                </div>
            </div>
        )
    }
}

export default Game;