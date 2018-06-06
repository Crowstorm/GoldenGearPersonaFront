import React from 'react';
import _ from 'lodash';


import { GRID_ThroneRoom } from '../overworld/grids'

class GridGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          blockedGrid: []
        };
    }

    blocker(x, y){
        this.setState({
            blockedGrid: [...this.state.blockedGrid, {x, y}]
        })
        console.log(this.state.blockedGrid);
    }

    renderGrid() {
        return _.map(GRID_ThroneRoom, row => {
            return <div key={`row${row[0].y}`} className="row" style={{ margin: 0 }}> {_.map(row, cell => {
                return <div
                    key={cell.x + '.' + cell.y} id={'d' + cell.x + '_' + cell.y}
                    style={{ height: 31.91, width: 31.91, boxSizing: 'border-box', border: '1px solid red' }}
                    onClick={()=> this.blocker(cell.x, cell.y)}
                    >
                    {/* x: {cell.x}, y: {cell.y} */}
                </div>
            })
            } </div>
        })
    }

    blockedGridRender(){
        return this.state.blockedGrid.map(tile =>{
            return <p> &#123;x: {tile.x}, y: {tile.y} &#125;, </p>
        })
    }

    render() {

        return (
            <div style={{ position: 'absolute' }}>
                {this.renderGrid()}
               <div className="d-flex flex-row"> {this.blockedGridRender()} </div>
            </div>
           
        )
    }
}

export default GridGenerator;