import React from 'react';
import './overworldInterface.css';

class OverworldInterface extends React.Component {
    render() {
        return (
            <div className="overworldInterface d-flex flex-column align-items-center">
                {/* Current level */}
                <div className="d-flex flex-row"> <b>{this.props.mechanics.currentLevel} </b></div>
                {/* Character info */}
                <div className="d-flex flex-row">
                    <div>
                        {this.props.mainChar[1].name}
                    </div>
                </div>
            </div>
        )
    }
}

export default OverworldInterface;