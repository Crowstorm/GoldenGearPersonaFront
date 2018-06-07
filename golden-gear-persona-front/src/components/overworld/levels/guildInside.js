import React from 'react';
import _ from 'lodash';

import GuildMember from '../../assets/NPC/guild1-front.png';
import Dialogue from '../../extraInterfaces/dialogue';

import { GRID_ThroneRoom, BLOCKED_GuildI } from '../grids'

class GuildInside extends React.Component{

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

                _.forEach(BLOCKED_GuildI, cell => {
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

                _.forEach(BLOCKED_GuildI, cell => {
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

                _.forEach(BLOCKED_GuildI, cell => {
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

                _.forEach(BLOCKED_GuildI, cell => {
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
               
                
                if ((this.props.charPosition.x === 21 && this.props.charPosition.y === 13) || (this.props.charPosition.x === 22 && this.props.charPosition.y === 12) || (this.props.charPosition.x === 23 && this.props.charPosition.y === 13)) {
                    this.props.setDialogueState(true);
                }

                if((this.props.charPosition.x === 12 && this.props.charPosition.y === 2) || (this.props.charPosition.x === 13 && this.props.charPosition.y === 2)){
                    this.props.setCharacterPosition(19, 10);
                    document.removeEventListener("keydown", this.handleKeyDown);
                    this.props.changeLevel('Guild Outside');
                    
                }
                
                break;
                
            }
            default: { return }
        }
    }


    componentDidMount() {

        document.addEventListener("keydown", this.handleKeyDown);
        document.getElementById('d22_13').innerHTML = `<img src=${GuildMember} />`

    }

    render(){
       
        let dialogue = [

            { text: 'How... HOW DID YOU FIND US?!', name: 'Guild Member'},
           
        ]
        console.log(this.props);
        let dialogueRenderer = (this.props.modals.dialogueVisibility) ? <Dialogue dialogue={dialogue} /> : '';
        return(
            <div id="guildinside"> 
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>
                    {dialogueRenderer}
                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default GuildInside;