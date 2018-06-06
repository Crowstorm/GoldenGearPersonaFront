import React from 'react';
import './overworldInterface.css';

import _ from 'lodash'

class OverworldInterface extends React.Component {

    renderConsumables = () => {
        return _.map(this.props.mainChar[0].consumables, (el)=>{
            return (
                <div style={{margin: 10}}>
                    <img style={{ height: 25 }} src={el.icon} onClick={()=> this.props.healEveryone()} />
                    {el.name}
                </div>
            )
        })
    }

    renderQuestItems = () => {
        return _.map(this.props.mainChar[0].questItems, (el)=>{
            return (
                <div style={{margin: 10}}>
                    {/* <img style={{ height: 25 }} src={el.icon} /> */}
                    {el.name}
                </div>
            )
        })
    }


    render() {
        let renderConsumables = this.renderConsumables();
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
                    <div className="d-flex flex-column align-items-center" style={{margin: 20}}>
                        <div> Consumables: </div>
                        <div>
                            {/* <img style={{ height: 25 }} src={this.props.mainChar[0].consumables[0].icon} />
                            {this.props.mainChar[0].consumables[0].name} */}
                            {renderConsumables}
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center" style={{margin: 20}}>
                        <div> Quest Items: </div>
                        <div>
                            {/* <img style={{ height: 25 }} src={this.props.mainChar[0].consumables[0].icon} />
                            {this.props.mainChar[0].consumables[0].name} */}
                            {this.renderQuestItems()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OverworldInterface;