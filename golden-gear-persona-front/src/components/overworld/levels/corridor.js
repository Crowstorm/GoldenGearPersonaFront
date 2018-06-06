import React from 'react';
import _ from 'lodash';
import './styles.css'
import Guard1 from '../../assets/NPC/guard-left.png';
import Guard from '../../assets/NPC/guard-back.png';
import Nobility from '../../assets/NPC/nobility1-front.png';
import Dialogue from '../../extraInterfaces/dialogue';

import { GRID_ThroneRoom, BLOCKED_Corridor } from '../grids'

class Corridor extends React.Component{

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

                _.forEach(BLOCKED_Corridor, cell => {
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

                _.forEach(BLOCKED_Corridor, cell => {
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

                _.forEach(BLOCKED_Corridor, cell => {
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

                _.forEach(BLOCKED_Corridor, cell => {
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
               
                if((this.props.charPosition.x === 16 && this.props.charPosition.y === 14)){
                    this.props.setDialogueState(true);

                    break;
                }

                if((this.props.charPosition.x === 12 && this.props.charPosition.y === 24) ||( this.props.charPosition.x === 13 && this.props.charPosition.y === 24)){
                    this.props.setCharacterPosition(12, 2);
                    document.removeEventListener("keydown", this.handleKeyDown);
                    this.props.changeLevel('ThroneRoom');
                    break;
                }

                if((this.props.charPosition.x === 12 && this.props.charPosition.y === 2) || (this.props.charPosition.x === 13 && this.props.charPosition.y === 2)){
                    this.props.setCharacterPosition(14, 24);
                    document.removeEventListener("keydown", this.handleKeyDown);
                    this.props.changeLevel('OutsideCastle');
                    break;
                }
                break;
                
            }
            default: { return }
        }
    }


    componentDidMount() {

        document.addEventListener("keydown", this.handleKeyDown);
        document.getElementById('d17_14').innerHTML = `<img src=${Guard1} />`
        document.getElementById('d6_12').innerHTML = `<img src=${Guard} />`
        document.getElementById('d3_12').innerHTML = `<img src=${Guard} />`
        document.getElementById('d21_18').innerHTML = `<img src=${Nobility} />`
    }

    render(){
        
        const dialogue = [

            {text: "You shall not pass, peasant.", portrait: "Guard1"},
        ]

        console.log(this.props);
        let dialogueRenderer = (this.props.modals.dialogueVisibility) ? <Dialogue dialogue={dialogue} /> : '';

        if((this.props.charPosition.x === 21 && this.props.charPosition.y === 24) ||( this.props.charPosition.x === 20 && this.props.charPosition.y === 24)){
            this.props.setCharacterPosition(22, 22);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Castle Second Floor');
        }

        if((this.props.charPosition.x === 5 && this.props.charPosition.y === 24) ||( this.props.charPosition.x === 4 && this.props.charPosition.y === 24) || ( this.props.charPosition.x === 3 && this.props.charPosition.y === 24)){
            this.props.setCharacterPosition(5, 22);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Castle Second Floor');
        }

        return(
            <div id="corridor"> 
            {dialogueRenderer}
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>
                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default Corridor;