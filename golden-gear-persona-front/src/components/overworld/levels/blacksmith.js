import React from 'react';
import _ from 'lodash';

import Girl from '../../assets/NPC/woman2-left.png';
import Kid from '../../assets/NPC/kid1-front.png';
import Oldman from '../../assets/NPC/oldman-front.png';
import Girl2 from '../../assets/NPC/girl1-front.png';
import Guard from '../../assets/NPC/guard-back.png';
import Smith from '../../assets/NPC/villager3-left.png';
import { GRID_ThroneRoom, BLOCKED_Blacksmith } from '../grids'

class Blacksmith extends React.Component{

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

                _.forEach(BLOCKED_Blacksmith, cell => {
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

                _.forEach(BLOCKED_Blacksmith, cell => {
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

                _.forEach(BLOCKED_Blacksmith, cell => {
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

                _.forEach(BLOCKED_Blacksmith, cell => {
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
        document.getElementById('d21_6').innerHTML = `<img src=${Smith} />`
        document.getElementById('d4_7').innerHTML = `<img src=${Kid} />`
        document.getElementById('d9_6').innerHTML = `<img src=${Girl} />`
        document.getElementById('d3_3').innerHTML = `<img src=${Oldman} />`
        document.getElementById('d6_10').innerHTML = `<img src=${Girl2} />`
        document.getElementById('d20_19').innerHTML = `<img src=${Guard} />`

    }

    render(){
       
        if((this.props.charPosition.x === 15 && this.props.charPosition.y === 4) || (this.props.charPosition.x === 15 && this.props.charPosition.y === 5) || (this.props.charPosition.x === 15 && this.props.charPosition.y === 6)){
            this.props.setCharacterPosition(14, 5);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Carnival');
            
        }
        return(
            <div id="blacksmith"> 
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>
                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default Blacksmith;