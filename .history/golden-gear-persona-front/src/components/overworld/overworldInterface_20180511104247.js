import React from 'react';
import './overworldInterface.css';

class OverworldInterface extends React.Component{
    render(){
        return(
            <div className="overworldInterface">
            <div> {this.props.mechanics.currentLevel}</div>
            </div>
        )
    }
}

export default OverworldInterface;