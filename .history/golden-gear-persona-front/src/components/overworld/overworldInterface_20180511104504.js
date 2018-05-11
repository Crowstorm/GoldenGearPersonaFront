import React from 'react';
import './overworldInterface.css';

class OverworldInterface extends React.Component{
    render(){
        return(
            <div className="overworldInterface d-flex flex-row justify-content-center">
            <div class="d-flex flex-row"> <strong>{this.props.mechanics.currentLevel} </strong></div>
            </div>
        )
    }
}

export default OverworldInterface;