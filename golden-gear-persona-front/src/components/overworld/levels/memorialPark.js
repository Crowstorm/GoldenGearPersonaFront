import React from 'react';
import _ from 'lodash';

import Guard from '../../assets/NPC/guard-right.png';
import Dialogue from '../../extraInterfaces/dialogue';

import { GRID_ThroneRoom, BLOCKED_MemorialPark } from '../grids'

class MemorialPark extends React.Component{

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

                _.forEach(BLOCKED_MemorialPark, cell => {
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

                _.forEach(BLOCKED_MemorialPark, cell => {
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

                _.forEach(BLOCKED_MemorialPark, cell => {
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

                _.forEach(BLOCKED_MemorialPark, cell => {
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
                if((this.props.charPosition.x === 3 && this.props.charPosition.y === 13) || (this.props.charPosition.x === 2 && this.props.charPosition.y === 12) || (this.props.charPosition.x === 2 && this.props.charPosition.y === 14)){
                    
                        this.props.setDialogueState(true);
                    }
            
                
                break;
                
            }
            default: { return }
        }
    }


    componentDidMount() {

        document.addEventListener("keydown", this.handleKeyDown);
        document.getElementById('d2_13').innerHTML = `<img src=${Guard} />`
    }

    render(){
       
        let dialogue = [

            {text: 'This place is off limits for now. Get out of my sight.', name: 'Guard'},

        ];
        console.log(this.props);
        let dialogueRenderer = (this.props.modals.dialogueVisibility) ? <Dialogue dialogue={dialogue} /> : '';

        if(this.props.mechanics.ghouls === 'started' || this.props.mechanics.ghouls === 'semi')
        {

            if((this.props.charPosition.x === 24 && this.props.charPosition.y === 12) || (this.props.charPosition.x === 24 && this.props.charPosition.y === 13 ) || (this.props.charPosition.x === 24 && this.props.charPosition.y === 14)){
                this.props.setCharacterPosition(3, 13);
                document.removeEventListener("keydown", this.handleKeyDown);
                this.props.changeLevel('Ghoul Graveyard');
                
            }
        }
        else
        {

            if((this.props.charPosition.x === 24 && this.props.charPosition.y === 12) || (this.props.charPosition.x === 24 && this.props.charPosition.y === 13 ) || (this.props.charPosition.x === 24 && this.props.charPosition.y === 14)){
                this.props.setCharacterPosition(3, 13);
                document.removeEventListener("keydown", this.handleKeyDown);
                this.props.changeLevel('Graveyard');
                
            }
        }
            
        if((this.props.charPosition.x === 12 && this.props.charPosition.y === 24) || (this.props.charPosition.x === 13 && this.props.charPosition.y === 24) || (this.props.charPosition.x === 14 && this.props.charPosition.y === 24)){
            this.props.setCharacterPosition(13, 3);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Park');
            
        }
        
        return(
            <div id="memorialpark"> 
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>
                    {dialogueRenderer}
                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default MemorialPark;