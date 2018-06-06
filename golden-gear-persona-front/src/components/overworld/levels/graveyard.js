import React from 'react';
import _ from 'lodash';

import Ghost from '../../assets/NPC/ghost-npc.png';
import Dialogue from '../../extraInterfaces/dialogue';
import { GRID_ThroneRoom, BLOCKED_Graveyard } from '../grids'

class Graveyard extends React.Component{

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

                _.forEach(BLOCKED_Graveyard, cell => {
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

                _.forEach(BLOCKED_Graveyard, cell => {
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

                _.forEach(BLOCKED_Graveyard, cell => {
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

                _.forEach(BLOCKED_Graveyard, cell => {
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
               
                if((this.props.charPosition.x === 3 && this.props.charPosition.y === 23)){
                    const GuardGhost = {
                        name: 'Rude Ghost',
                        portrait: '../../assets/Enemies/ghost-portrait.png',
                        stats: {
                            hp: 2,
                            mp: 0,
                            defence: 5,
                            agility: 7,
                            speed: 12,
                            strength: 5
                        }
                    }
                    this.props.addEnemy(GuardGhost);
                    this.props.startCombat();
                    document.removeEventListener("keydown", this.handleKeyDown);
                    
                }

                if((this.props.charPosition.x === 5 && this.props.charPosition.y === 23)){

                    this.props.setDialogueState(true);
                }
                break;
                
            }
            default: { return }
        }
    }


    componentDidMount() {

        document.addEventListener("keydown", this.handleKeyDown);
        document.getElementById('d4_23').innerHTML = `<img src=${Ghost} />`
    }

    render(){
       
        const dialogue = [
                { text: 'Dont you dare touching my gravestone!', name: 'Rude Ghost'},
                { text: 'Or else i will get rid of you.', name: 'Rude Ghost'},
        ]

        if((this.props.charPosition.x === 2 && this.props.charPosition.y === 12) || (this.props.charPosition.x === 2 && this.props.charPosition.y === 13) || (this.props.charPosition.x === 2 && this.props.charPosition.y === 14)){
            this.props.setCharacterPosition(23, 13);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Memorial Park');
            
        }
        console.log(this.props);
        let dialogueRenderer = (this.props.modals.dialogueVisibility) ? <Dialogue dialogue={dialogue} /> : '';
        return(
            <div id="graveyard"> 
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>

                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default Graveyard;