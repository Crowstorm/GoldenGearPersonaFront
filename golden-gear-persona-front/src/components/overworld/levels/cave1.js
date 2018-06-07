import React from 'react';
import _ from 'lodash';

import { GRID_ThroneRoom, BLOCKED_Cave1 } from '../grids'


import Wolf from '../../assets/Enemies/wolf.png';
class Cave1 extends React.Component{

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

                _.forEach(BLOCKED_Cave1, cell => {
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

                _.forEach(BLOCKED_Cave1, cell => {
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

                _.forEach(BLOCKED_Cave1, cell => {
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

                _.forEach(BLOCKED_Cave1, cell => {
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
        document.getElementById('d13_16').innerHTML = `<img src=${Wolf} />`

    }

    render(){
       
        if((this.props.charPosition.x === 12 && this.props.charPosition.y === 24) || (this.props.charPosition.x === 13 && this.props.charPosition.y === 24) || (this.props.charPosition.x === 14 && this.props.charPosition.y === 24) || (this.props.charPosition.x === 15 && this.props.charPosition.y === 24) || (this.props.charPosition.x === 16 && this.props.charPosition.y === 24) || (this.props.charPosition.x === 17 && this.props.charPosition.y === 24)){
            this.props.setCharacterPosition(13, 3);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('ToFarm');
            
        }

        
            
        if(this.props.mechanics.cave === 'started'){

            if((this.props.charPosition.x === 13 && this.props.charPosition.y === 17) || (this.props.charPosition.x === 12 && this.props.charPosition.y === 16) || (this.props.charPosition.x === 14 && this.props.charPosition.y === 16) || (this.props.charPosition.x === 13 && this.props.charPosition.y === 15)){
                const Wolf1 = {
                    name: 'Wolf',
                    portrait: 'https://i.imgur.com/lvGPlRJ.png',
                    combatGif: 'https://i.imgur.com/R5xhCzA.png',
                    stats: {
                        hp: 2,
                        mp: 0,
                        defence: 5,
                        agility: 7,
                        speed: 12,
                        strength: 5
                    }
                }
                this.props.addEnemy(Wolf1);
                this.props.addEnemy(Wolf1);
                
                this.props.startCombat();
                document.removeEventListener("keydown", this.handleKeyDown);
                this.props.pickUpItem('Pendant');
                
                this.props.setQuest('Talk with spirit')
                this.props.questStatus('cave', 'completed');


                
            }
        }


        
        return(
            <div id="cave1"> 
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>
                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default Cave1;