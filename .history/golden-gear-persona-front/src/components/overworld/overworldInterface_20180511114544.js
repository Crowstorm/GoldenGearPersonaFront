import React from 'react';
import './overworldInterface.css';

class OverworldInterface extends React.Component {
    render() {
        return (
            <div className="overworldInterface d-flex flex-column align-items-center">
                {/* Current level */}
                <div className="d-flex flex-row"> <b>{this.props.mechanics.currentLevel} </b></div>
                {/* Character info */}
                <div className="d-flex flex-column align-items-center">
                    <div>
                        {this.props.mainChar[1].name}
                    </div>
                    <div> <img src={this.props.mainChar[1].portrait} style={{height: 100}} /> </div>
                </div>
            </div>
        )
    }
}

export default OverworldInterface;