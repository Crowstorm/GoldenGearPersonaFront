import React from 'react';
import _ from 'lodash';
import AttackInterface from './subPanels/attackInterface';


class CombatScreen extends React.Component {


    getAllyTurnInterface = () => {
        return (
            <AttackInterface {...this.props}/>
        )
    }

    render() {
        //    let renderAllyAttackOptions = (this.props.mechanics.turn === "ally") ? 'ally' : "enemy";
        let i = this.props.mechanics.attackingAllyIndex
        let renderAllyTurnInterface = (this.props.mechanics.turn === 'ally') ? this.getAllyTurnInterface() : null
        return (
            <div className="d-flex flex-wrap align-content-center justify-content-center" style={{ border: '1px solid blue', height: 600, width: 600}}>
                <div className="d-flex ">
                    {/* <button onClick={() => this.handleEnemyAttack()}> Enemy Attack </button> */}
                </div>
                {renderAllyTurnInterface}
            </div>
        )
    }
}

export default CombatScreen;