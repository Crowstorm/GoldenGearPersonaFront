import React from 'react';
import _ from 'lodash';

import Guard1 from '../../assets/NPC/guard-front.png';
import Guard from '../../assets/NPC/guard-back.png';
import Monk from '../../assets/NPC/praying-monk-front.png';

import { GRID_ThroneRoom, BLOCKED_CastleSecondFloor } from '../grids'

class CastleSecondFloor extends React.Component{

    renderPosition = (cell) => {
        if (this.props.charPosition.x === cell.x && this.props.charPosition.y === cell.y) {
            return <img src={this.props.charPosition.model} style={{ height: 40, transform: 'translateY(-10px)' }} />;
        }
    }

    renderGrid() {
        return _.map(GRID_ThroneRoom, row => {
            return <div key={`row${row[0].y}`} className="row" style={{ margin: 0 }}> {_.map(row, cell => {
                return <div key={cell.x + '.' + cell.y} id={'d' + cell.x + '_' + cell.y} style={{ height: 32, width: 32, boxSizing: 'border-box' }}> {/*x: {cell.x}, y: {cell.y} */} {this.renderPosition(cell)} </div>
            })
            } </div>
        })
    }

    handleKeyDown = (e) => {
        //console.log(e);
        var d = new Date();
       // console.log(d);
        switch (e.key) {
            case "ArrowUp": {
                let err = [];

                _.forEach(BLOCKED_CastleSecondFloor, cell => {
                    if (this.props.charPosition.y + 1 === cell.y && this.props.charPosition.x === cell.x) {
                        console.log('blocked')
                        err.push('blocked');
                    }
                })
                if (err.length === 0) {
                    this.props.moveCharUp();
                }
                break;
            }
            case "ArrowDown": {
                let err = [];

                _.forEach(BLOCKED_CastleSecondFloor, cell => {
                    if (this.props.charPosition.y - 1 === cell.y && this.props.charPosition.x === cell.x) {
                        console.log('blocked')
                        err.push('blocked');
                    }
                })
                if (err.length === 0) {
                    this.props.moveCharDown();
                }
                break;
            }
            case "ArrowLeft": {
                let err = [];

                _.forEach(BLOCKED_CastleSecondFloor, cell => {
                    if (this.props.charPosition.y === cell.y && this.props.charPosition.x - 1 === cell.x) {
                        console.log('blocked')
                        err.push('blocked');
                    }
                })
                if (err.length === 0) {
                    this.props.moveCharLeft();
                }
                break;
            }
            case "ArrowRight": {
                let err = [];

                _.forEach(BLOCKED_CastleSecondFloor, cell => {
                    if (this.props.charPosition.y === cell.y && this.props.charPosition.x + 1 === cell.x) {
                        console.log('blocked')
                        err.push('blocked');
                    }
                })
                if (err.length === 0) {
                    this.props.moveCharRight();
                }
                break;
            }
            case 'Enter': {
               
                
                break;
                
            }
            default: { return }
        }
    }


    componentDidMount() {

        document.addEventListener("keydown", this.handleKeyDown);
        document.getElementById('d21_23').innerHTML = `<img src=${Guard1} />`
        document.getElementById('d14_17').innerHTML = `<img src=${Guard1} />`
        document.getElementById('d14_11').innerHTML = `<img src=${Guard} />`
        document.getElementById('d5_8').innerHTML = `<img src=${Guard} />`
        document.getElementById('d22_8').innerHTML = `<img src=${Guard} />`
        document.getElementById('d14_4').innerHTML = `<img src=${Monk} />`
    }

    render(){
        
        if((this.props.charPosition.x === 4 && this.props.charPosition.y === 23) ||( this.props.charPosition.x === 5 && this.props.charPosition.y === 23) ||( this.props.charPosition.x === 6 && this.props.charPosition.y === 23)){
            this.props.setCharacterPosition(4, 23);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Corridor');
            
        }
        if((this.props.charPosition.x === 22 && this.props.charPosition.y === 23) || (this.props.charPosition.x === 23 && this.props.charPosition.y === 23)){
            this.props.setCharacterPosition(21, 23);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Corridor');
            
        }
        
        return(
            <div id="castlesecondfloor"> 
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>
                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default CastleSecondFloor;