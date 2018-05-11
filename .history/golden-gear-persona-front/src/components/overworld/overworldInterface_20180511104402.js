import React from 'react';
import './overworldInterface.css';

class OverworldInterface extends React.Component{
    render(){
        return(
            <div className="overworldInterface">
            <div> <strong>{this.props.mechanics.currentLevel} </strong></div>
            </div>
        )
    }
}

export default OverworldInterface;