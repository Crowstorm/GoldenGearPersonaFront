import React from 'react';
import _ from 'lodash';


import { GRID_ThroneRoom, BLOCKED_Church } from '../grids'

import Beliver from '../../assets/NPC/church.gif'
import Dialogue from '../../extraInterfaces/dialogue';

class ChurchInside extends React.Component{

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

                _.forEach(BLOCKED_Church, cell => {
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

                _.forEach(BLOCKED_Church, cell => {
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

                _.forEach(BLOCKED_Church, cell => {
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

                _.forEach(BLOCKED_Church, cell => {
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
                if ((this.props.charPosition.x === 16 && this.props.charPosition.y === 15) | (this.props.charPosition.x === 16 && this.props.charPosition.y === 13) || (this.props.charPosition.x === 17 && this.props.charPosition.y === 14)  ) {
                    this.props.setDialogueState(true);
                }
                
                break;
                
            }
            default: { return }
        }
    }


    componentDidMount() {

        document.addEventListener("keydown", this.handleKeyDown);
        document.getElementById('d16_14').innerHTML = `<img src=${Beliver} />`

    }

    render(){
        
        let dialogue = [

            { text: 'Do not disturb my prayers!', name: 'Beliver'},
           
        ]
        console.log(this.props);
        let dialogueRenderer = (this.props.modals.dialogueVisibility) ? <Dialogue dialogue={dialogue} /> : '';


        if((this.props.charPosition.x === 6 && this.props.charPosition.y === 17) || (this.props.charPosition.x === 7 && this.props.charPosition.y === 17) || (this.props.charPosition.x === 8 && this.props.charPosition.y === 17)){
            this.props.setCharacterPosition(7, 16);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Church Outside');
            
        }

        
        
        return(
            <div id="churchinside"> 
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>
                    {dialogueRenderer}
                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default ChurchInside;