import React from 'react';
import _ from 'lodash';


import { GRID_ThroneRoom, BLOCKED_LBeach } from '../grids'

class LowerBeach extends React.Component{

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

                _.forEach(BLOCKED_LBeach, cell => {
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

                _.forEach(BLOCKED_LBeach, cell => {
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

                _.forEach(BLOCKED_LBeach, cell => {
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

                _.forEach(BLOCKED_LBeach, cell => {
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
               
                if(this.props.charPosition.x == 2 && this.props.charPosition.y == 21 ||this.props.charPosition.x == 2 && this.props.charPosition.y == 22 || this.props.charPosition.x == 2 && this.props.charPosition.y == 23 || this.props.charPosition.x == 2 && this.props.charPosition.y == 24){
                    this.props.setCharacterPosition(24, 23);
                    document.removeEventListener("keydown", this.handleKeyDown);
                    this.props.changeLevel('Road To Beach');
                
                }
                if(this.props.charPosition.x == 3 && this.props.charPosition.y == 24 || this.props.charPosition.x == 4 && this.props.charPosition.y == 24 || this.props.charPosition.x == 5 && this.props.charPosition.y == 24 || this.props.charPosition.x == 6 && this.props.charPosition.y == 24 ){
                    this.props.setCharacterPosition(5, 24);
                    document.removeEventListener("keydown", this.handleKeyDown);
                    this.props.changeLevel('Upper Beach');
                    
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
       
        if((this.props.charPosition.x === 2 && this.props.charPosition.y === 21) ||(this.props.charPosition.x === 2 && this.props.charPosition.y === 22) || (this.props.charPosition.x === 2 && this.props.charPosition.y === 23) || (this.props.charPosition.x === 2 && this.props.charPosition.y === 24)){
            this.props.setCharacterPosition(23, 23);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Road To Beach');
        
        }
        if((this.props.charPosition.x === 3 && this.props.charPosition.y === 24) || (this.props.charPosition.x === 4 && this.props.charPosition.y === 24) || (this.props.charPosition.x === 5 && this.props.charPosition.y === 24) || (this.props.charPosition.x === 6 && this.props.charPosition.y === 24 )){
            this.props.setCharacterPosition(5, 3);
            document.removeEventListener("keydown", this.handleKeyDown);
            this.props.changeLevel('Upper Beach');
            
        }
        return(
            <div id="lowerbeach"> 
            <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>
                    {this.renderGrid()}
                </div>
             </div>
        )
    }
}

export default LowerBeach;