import React from 'react';
import _ from 'lodash';

import Ghoul from '../../assets/Enemies/ghoul.png'

import { GRID_ThroneRoom, BLOCKED_Graveyard } from '../grids'

class GraveyardGhoul extends React.Component{

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
               
                
                break;
                
            }
            default: { return }
        }
    }


    componentDidMount() {

        document.addEventListener("keydown", this.handleKeyDown);
        document.getElementById('d16_20').innerHTML = `<img src=${Ghoul} />`
        document.getElementById('d10_7').innerHTML = `<img src=${Ghoul} />`
    }

    render(){
       
        if(this.props.mechanics.ghoultwo != 'destroyed')
        {
            if((this.props.charPosition.x === 16 && this.props.charPosition.y === 19))
            {
                const Ghoul1 = {
                    name: 'Ghoul',
                    portrait: 'https://i.imgur.com/9iHG1ZY.png',
                    combatGif: 'https://i.imgur.com/S38P3SM.png',
                    stats: {
                        hp: 2,
                        mp: 0,
                        defence: 5,
                        agility: 7,
                        speed: 12,
                        strength: 5
                    }
                }
                this.props.addEnemy(Ghoul1);
                this.props.addEnemy(Ghoul1);   
                this.props.addEnemy(Ghoul1);     
                this.props.startCombat();
                document.removeEventListener("keydown", this.handleKeyDown);
                if(this.props.mechanics.ghouls ==='started')
                {
                    this.props.setQuest('Kill one more ghoul')
                    this.props.questStatus('ghouls', 'semi');
                    this.props.questStatus('ghoultwo', 'destroyed');
                }
                else
                {
                    this.props.setQuest('Go back to Oldman')
                    this.props.questStatus('ghouls', 'completed');
                    this.props.questStatus('ghoultwo', 'destroyed');
                }
                
            }
        }
            if(this.props.mechanics.ghoulone != 'destroyed')
        {

            if((this.props.charPosition.x === 11 && this.props.charPosition.y === 7))
            {
                const Ghoul1 = {
                    name: 'Ghoul',
                    portrait: 'https://i.imgur.com/9iHG1ZY.png',
                    combatGif: 'https://i.imgur.com/S38P3SM.png',
                    stats: {
                        hp: 2,
                        mp: 0,
                        defence: 5,
                        agility: 7,
                        speed: 12,
                        strength: 5
                    }
                }
                
                
                this.props.addEnemy(Ghoul1);
                this.props.addEnemy(Ghoul1);       
                this.props.startCombat();
                document.removeEventListener("keydown", this.handleKeyDown);
                
                if(this.props.mechanics.ghouls ==='started')
                {
                    this.props.setQuest('Kill one more ghoul')
                    this.props.questStatus('ghouls', 'semi');
                    this.props.questStatus('ghoulone', 'destroyed');
                }
                else
                {
                    this.props.setQuest('Go back to Oldman')
                    this.props.questStatus('ghouls', 'completed');
                    this.props.questStatus('ghoulone', 'destroyed');
                }
                
                
                
            }
        }
            
            if((this.props.charPosition.x === 2 && this.props.charPosition.y === 12) || (this.props.charPosition.x === 2 && this.props.charPosition.y === 13) || (this.props.charPosition.x === 2 && this.props.charPosition.y === 14)){
            this.props.setCharacterPosition(23, 13);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Memorial Park');
            
        }
        
        return(
            <div id="graveyardghoul"> 
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>

                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default GraveyardGhoul;