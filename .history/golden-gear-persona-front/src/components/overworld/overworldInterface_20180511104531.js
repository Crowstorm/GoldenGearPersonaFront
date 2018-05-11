import React from 'react';
import './overworldInterface.css';

class OverworldInterface extends React.Component{
    render(){
        return(
            <div className="overworldInterface d-flex flex-row justify-content-center">
            <div class="d-flex flex-row"> <b>{this.props.mechanics.currentLevel} </b></div>
            </div>
        )
    }
}

export default OverworldInterface;