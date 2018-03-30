import React from 'react';
import _ from 'lodash';


class CombatScreen extends React.Component {

    handleAllyAttack = () => {
        let dmg = 5
        this.props.attackReady(true);
    }

    handleEnemyAttack = (enemy, index) => {
        //deal dmg
        console.log('nakurwiam')
        let dmg = 3;
        //this.props.switchTurn('ally')
        console.log('test', this.props.mechanics.noOfEnemiesAttacked )
        let whoseTurn = this.props.enemies[index+1].name
        console.log('tura', whoseTurn)
        this.props.allyLoseHP(dmg);
        this.props.incrementEnemiesAttacked();
        this.props.switchTurn()
        if(this.props.mechanics.noOfEnemiesAttacked ===3){
            // this.props.switchTurn('ally')
        }
    }
    render() {
       
        return (
            <div className="d-flex flex-wrap align-content-center justify-content-center" style={{ border: '1px solid blue', height: 600, width: 600 }}>
                <div className="d-flex ">
                    <button onClick={() => this.handleAllyAttack()}> Ally Attack </button>
                    <button onClick={() => this.handleEnemyAttack()}> Enemy Attack </button>
                </div>
            </div>
        )
    }
}

export default CombatScreen;