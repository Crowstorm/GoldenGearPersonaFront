import React from 'react';
import _ from 'lodash';


import { GRID_ThroneRoom, BLOCKED_CastleRoad } from '../grids'

class CastleRoad extends React.Component{

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

                _.forEach(BLOCKED_CastleRoad, cell => {
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

                _.forEach(BLOCKED_CastleRoad, cell => {
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

                _.forEach(BLOCKED_CastleRoad, cell => {
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

                _.forEach(BLOCKED_CastleRoad, cell => {
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
               
                if(this.props.charPosition.x == 12 && this.props.charPosition.y == 23 || this.props.charPosition.x == 13 && this.props.charPosition.y == 23 || this.props.charPosition.x == 14 && this.props.charPosition.y == 23){
                    this.props.setCharacterPosition(14, 2);
                    document.removeEventListener("keydown", this.handleKeyDown);
                    this.props.changeLevel('OutsideCastle');
                    break;
                }
                if(this.props.charPosition.x == 2 && this.props.charPosition.y == 13 || this.props.charPosition.x == 2 && this.props.charPosition.y == 12 || this.props.charPosition.x == 2 && this.props.charPosition.y == 11){
                    this.props.setCharacterPosition(24, 12);
                    document.removeEventListener("keydown", this.handleKeyDown);
                    this.props.changeLevel('ToFarm');
                    break;
                }
                if(this.props.charPosition.x == 24 && this.props.charPosition.y == 13 || this.props.charPosition.x == 24 && this.props.charPosition.y == 12 || this.props.charPosition.x == 24 && this.props.charPosition.y == 11){
                    this.props.setCharacterPosition(2, 12);
                    document.removeEventListener("keydown", this.handleKeyDown);
                    this.props.changeLevel('Forest Near Beach');
                    break;
                }
                if(this.props.charPosition.x == 12 && this.props.charPosition.y == 2 || this.props.charPosition.x == 13 && this.props.charPosition.y == 2 || this.props.charPosition.x == 14 && this.props.charPosition.y == 2){
                    this.props.setCharacterPosition(13, 24);
                    document.removeEventListener("keydown", this.handleKeyDown);
                    this.props.changeLevel('Town North Enter');
                    break;
                }
                break;
                
            }
            default: { return }
        }
    }


    componentDidMount() {

        document.addEventListener("keydown", this.handleKeyDown);
    }

    render(){
       
        if(this.props.charPosition.x == 12 && this.props.charPosition.y == 23 || this.props.charPosition.x == 13 && this.props.charPosition.y == 23 || this.props.charPosition.x == 14 && this.props.charPosition.y == 23){
            this.props.setCharacterPosition(14, 3);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('OutsideCastle');
            
        }
        if(this.props.charPosition.x == 2 && this.props.charPosition.y == 13 || this.props.charPosition.x == 2 && this.props.charPosition.y == 12 || this.props.charPosition.x == 2 && this.props.charPosition.y == 11){
            this.props.setCharacterPosition(23, 12);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('ToFarm');
            
        }
        if(this.props.charPosition.x == 24 && this.props.charPosition.y == 13 || this.props.charPosition.x == 24 && this.props.charPosition.y == 12 || this.props.charPosition.x == 24 && this.props.charPosition.y == 11){
            this.props.setCharacterPosition(3, 12);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Forest Near Beach');
            
        }
        if(this.props.charPosition.x == 12 && this.props.charPosition.y == 2 || this.props.charPosition.x == 13 && this.props.charPosition.y == 2 || this.props.charPosition.x == 14 && this.props.charPosition.y == 2){
            this.props.setCharacterPosition(13, 23);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Town North Enter');
            
        }
        
        return(
            <div id="castleroad"> 
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>
                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default CastleRoad;