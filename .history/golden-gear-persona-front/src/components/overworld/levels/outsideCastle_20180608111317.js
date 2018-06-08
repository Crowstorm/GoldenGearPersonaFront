import React from 'react';
import _ from 'lodash';

import './styles.css'
import Sadman from '../../assets/NPC/sadman-right.png';
import Kid from '../../assets/NPC/kid1-front.png';

import Ghost from '../../assets/NPC/ghost-npc.png';
import Dialogue from '../../extraInterfaces/dialogue';
import { GRID_ThroneRoom, BLOCKED_OutsideCastle } from '../grids'

class OutsideCastle extends React.Component{

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

                _.forEach(BLOCKED_OutsideCastle, cell => {
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

                _.forEach(BLOCKED_OutsideCastle, cell => {
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

                _.forEach(BLOCKED_OutsideCastle, cell => {
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

                _.forEach(BLOCKED_OutsideCastle, cell => {
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
               
                if((this.props.charPosition.x === 14 && this.props.charPosition.y === 24) || (this.props.charPosition.x === 13 && this.props.charPosition.y === 24)){
                    this.props.setCharacterPosition(12,2);
                    document.removeEventListener("keydown", this.handleKeyDown);
                    this.props.changeLevel('Corridor');
                }
                if((this.props.charPosition.x === 7 && this.props.charPosition.y === 22)){
                    const GuardGhost = {
                        name: 'Rude Ghost',
                        portrait: 'https://i.imgur.com/4GdmF4E.png',
                        combatGif: 'https://i.imgur.com/vQefxGI.png',
                        stats: {
                            hp: 120,
                            mp: 0,
                            defence: 5,
                            agility: 8,
                            speed: 12,
                            strength: 16
                        }
                    }
                    this.props.addEnemy(GuardGhost);
                    this.props.startCombat();
                    document.removeEventListener("keydown", this.handleKeyDown);
                    
                }

                if((this.props.charPosition.x === 5 && this.props.charPosition.y === 21) || (this.props.charPosition.x === 7 && this.props.charPosition.y === 21)){
                    
                    if(this.props.mechanics.cave === 'completed')
                    { 
                        this.props.setDialogueState(true);
                        
                        this.props.setQuest('Give guard his pendant');
                        this.props.questStatus('spirit', 'completed');
                    }
                    else
                    {
                        this.props.setDialogueState(true);
                        this.props.setQuest('Find the cave');
                        this.props.questStatus('cave', 'started');
                    }
                }

                if((this.props.charPosition.x === 22 && this.props.charPosition.y === 17) || (this.props.charPosition.x === 21 && this.props.charPosition.y === 16) || (this.props.charPosition.x === 22 && this.props.charPosition.y === 15)){
                    
                    this.props.setDialogueState(true);

                }

            }
            default: { return }
        }
    }


    componentDidMount() {

        document.addEventListener("keydown", this.handleKeyDown);
        document.getElementById('d22_16').innerHTML = `<img src=${Sadman} />`
        document.getElementById('d22_9').innerHTML = `<img src=${Kid} />`
        document.getElementById('d6_21').innerHTML = `<img src=${Ghost} />`

    }

    render(){
       
        let dialogue;
        // = [
        //     { text: 'I see. I will give you what you want, if you do something for me.', name: 'Rude Ghost'},
        //     { text: 'Avenge me. Kill those stupid dogs that had eaten me alive.', name: 'Rude Ghost'},
        //     { text: 'You can find them in a cave on the road to village. Kill them then we can talk.', name: 'Rude Ghost'},
        // ]

        if(this.props.mechanics.cave === 'completed'){
            dialogue = [
                { text: 'Thank you. Now I can rest in peace. Take this and tell Robert Im sorry', name: 'Rude Ghost'},
               
            ]
        } else {
            dialogue = [
                { text: 'I see. I will give you what you want, if you do something for me.', name: 'Rude Ghost'},
                { text: 'Avenge me. Kill those stupid dogs that had eaten me alive.', name: 'Rude Ghost'},
                { text: 'You can find them in a cave on the road to village. Kill them then we can talk.', name: 'Rude Ghost'},
            ]
        }
        if((this.props.charPosition.x === 22 && this.props.charPosition.y === 17) || (this.props.charPosition.x === 21 && this.props.charPosition.y === 16) || (this.props.charPosition.x === 22 && this.props.charPosition.y === 15)){
                    
            dialogue = [
                { text: 'I really miss my wife...', name: 'Sad man'},
               
            ]

        }

        console.log(this.props);
        let dialogueRenderer = (this.props.modals.dialogueVisibility) ? <Dialogue dialogue={dialogue} /> : '';

        if((this.props.charPosition.x === 13 && this.props.charPosition.y === 2) || (this.props.charPosition.x === 14 && this.props.charPosition.y === 2) || (this.props.charPosition.x === 15 && this.props.charPosition.y === 2))
        {
            this.props.setCharacterPosition(13, 22);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('CastleRoad');
        }
        
        return(
            <div id="outsidecastle"> 
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>
                {dialogueRenderer}
                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default OutsideCastle;