import React from 'react';
import './overworldInterface.css';

class OverworldInterface extends React.Component {
    render() {
        return (
            <div id="overworldInterface" className="overworldInterface d-flex flex-column align-items-center">
                {/* Current level */}
                <div className="d-flex flex-row"> <b>{this.props.mechanics.currentLevel} </b></div>
                {/* Character info */}
                <div className="d-flex flex-column align-items-center">
                    <div>
                        {this.props.mainChar[1].name}
                    </div>
                    <div> <img src={this.props.mainChar[1].portrait} style={{ height: 100 }} /> </div>
                    <div className="d-flex flex-column align-items-center"> Current quest:
                         <div> {this.props.mainChar[0].quest} </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div> Inventory: </div>
                        <div>
                            <img style={{ height: 25 }} src={this.props.mainChar[0].consumables[0].icon} />
                            {this.props.mainChar[0].consumables[0].name}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OverworldInterface;