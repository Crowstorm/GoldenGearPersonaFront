import React from 'react';
import _ from 'lodash';
import './game.css';
import princess from '../assets/princess2.png'

import {GRID25, BLOCKED} from './grids'

import Dialogue from '../extraInterfaces/dialogue';

//lista zablokowanych pol
// const BLOCKED = [
    
// ]

class Game extends React.Component {
    //Funckja ktora zwraca img z ludzikiem
    renderPosition = (cell) =>{
        if(this.props.charPosition.x === cell.x && this.props.charPosition.y === cell.y){
            return <img src={this.props.charPosition.model} style={{height: 40, transform: 'translateY(-10px)'}}/>;
        }
    }
    
    //Funkcja, ktora leci po kazdym rzadku i po kazdej komorce rzadku. Nadaje im odpowiednie atrybuty i ma w sobie funkcje powyzej, ktora uaktywnia sie kiedy pozycja w stanie aplikacji
    //zgadza sie z x i y komorki
    renderGrid() {
        return _.map(GRID25, row => {
            return <div key={`row${row[0].y}`} className="row" style={{margin: 0}}> {_.map(row, cell => {
                return <div key={cell.x + '.' + cell.y} id={'d'+cell.x + '_' + cell.y} style={{ height: 32, width: 32,boxSizing: 'border-box' }}> {/*x: {cell.x}, y: {cell.y} */} {this.renderPosition(cell)} </div>
            })
            } </div>
        })
    }
 
    //Funkcja "nasluchujaca" klikniesz klawiszem. Gora dol, lewo prawo
    handleKeyDown = (e) => {
        console.log(e);
        var d = new Date();
        console.log(d);
        switch (e.key) {
            case "ArrowUp": {
                let err = [];

                _.forEach(BLOCKED, cell =>{
                    if(this.props.charPosition.y+1 === cell.y && this.props.charPosition.x === cell.x){
                        console.log('blocked')
                        err.push('blocked');
                    }
                })
                if(err.length === 0){
                    this.props.moveCharUp();
                }
                break;
            }
            case "ArrowDown": {
                let err = [];

                _.forEach(BLOCKED, cell =>{
                    if(this.props.charPosition.y-1 === cell.y && this.props.charPosition.x === cell.x){
                        console.log('blocked')
                        err.push('blocked');
                    }
                })
                if(err.length === 0){
                    this.props.moveCharDown();
                }
                break;
            }
            case "ArrowLeft": {
                let err = [];

                _.forEach(BLOCKED, cell =>{
                    if(this.props.charPosition.y === cell.y && this.props.charPosition.x -1 === cell.x){
                        console.log('blocked')
                        err.push('blocked');
                    }
                })
                if(err.length === 0){
                    this.props.moveCharLeft();
                }
                break;
            }
            case "ArrowRight": {
                let err = [];

                _.forEach(BLOCKED, cell =>{
                    if(this.props.charPosition.y === cell.y && this.props.charPosition.x +1 === cell.x){
                        console.log('blocked')
                        err.push('blocked');
                    }
                })
                if(err.length === 0){
                    this.props.moveCharRight();
                }
                break;
            }
            default: { return }
        }
    }

    componentDidMount() {
        
        document.addEventListener("keydown", this.handleKeyDown);
 
        document.getElementById('d12_16').innerHTML = `<img src=${princess} />`
    }

    render() {
        return (
            <div className="game">
            <Dialogue />
                <div onKeyDown={this.handleKeyDown} style={{width: 800}}>
                    {this.renderGrid()}
                </div>
                {/* <div>
                    <p style={{color: 'black'}}>Obecna pozycja: {this.props.charPosition.x}, {this.props.charPosition.y} </p>
                </div>
                <img src={princess} /> */}
                
            </div>
        )
    }
}

export default Game;