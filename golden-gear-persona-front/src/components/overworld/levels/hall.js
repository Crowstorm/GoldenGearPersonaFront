import React from 'react';
import _ from 'lodash';

import Oldman from '../../assets/NPC/old-noble-left.png'
import Dialogue from '../../extraInterfaces/dialogue';

import { GRID_ThroneRoom, BLOCKED_Hall } from '../grids'

class Hall extends React.Component{

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

                _.forEach(BLOCKED_Hall, cell => {
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

                _.forEach(BLOCKED_Hall, cell => {
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

                _.forEach(BLOCKED_Hall, cell => {
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

                _.forEach(BLOCKED_Hall, cell => {
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
               
                
                if((this.props.charPosition.x === 2 && this.props.charPosition.y === 12) || (this.props.charPosition.x === 2 && this.props.charPosition.y === 13)){
                    this.props.setCharacterPosition(14, 13);
                    document.removeEventListener("keydown", this.handleKeyDown);
                    this.props.changeLevel('Town Hall');
                    
                }

                if((this.props.charPosition.x === 17 && this.props.charPosition.y === 13) || (this.props.charPosition.x === 18 && this.props.charPosition.y === 12) || (this.props.charPosition.x === 18 && this.props.charPosition.y === 14)){
                    if(this.props.mechanics.ghouls === 'completed'){
                        this.props.setDialogueState(true);
                        this.props.setQuest('Save the Princess')
                    }
                    else{
                        this.props.setDialogueState(true);
                        this.props.setQuest('Find ghouls on cemetery')
                        this.props.questStatus('ghouls', 'started');
                        break;
                    } 
                }
                
                break;
                
            }
            default: { return }
        }
    }


    componentDidMount() {

        document.addEventListener("keydown", this.handleKeyDown);
        document.getElementById('d18_13').innerHTML = `<img src=${Oldman} />`

    }

    render(){
        let dialogue;

        if(this.props.mechanics.ghouls === 'completed'){
            dialogue = [
                { text: 'Much appreciated. Now, get out my eye!', name: 'Noble Man'},
            ]
        } else {
            dialogue = [
                {text: "This town needs you help, stranger.", name: "Noble Man"},
                {text: "Ghouls occupy our cemetry, find them and deal with them.", name: "Noble Man"},
            ]
        }

        console.log(this.props);
        let dialogueRenderer = (this.props.modals.dialogueVisibility) ? <Dialogue dialogue={dialogue} /> : '';
        
        return(
            <div id="hall"> 
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>

                    {dialogueRenderer}
                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default Hall;