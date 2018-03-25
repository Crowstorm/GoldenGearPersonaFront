import React from 'react';

class CombatScreen extends React.Component {

    componentWillUpdate(nextProps, nextState){
        console.log('willupdate', nextProps, nextState)
        if(nextProps.mechanics.turn === 'enemy'){
            setTimeout(this.handleEnemyAttack.bind(this), 1000)
            //this.handleEnemyAttack();
        }
    }
    handleAllyAttack =() => {
        //deal dmg
        let dmg = 5
        //this.props.loseHP(dmg);

        this.props.attackReady(true);
    }
    handleEnemyAttack() {
        //deal dmg
        console.log('nakurwiam')
        let dmg = 3; 
        this.props.allyLoseHP(dmg);
        this.props.switchTurn('ally')
    }
    render() {
        
        console.log('propsy kombatu', this.props)

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