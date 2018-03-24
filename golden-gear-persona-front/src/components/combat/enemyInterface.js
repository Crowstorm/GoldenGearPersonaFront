import React from 'react'

import _ from 'lodash';

class EnemyInterface extends React.Component {
    handleTakeDamage = () =>{
        if(this.props.mechanics.attackReady){
            this.props.loseHP(5);
            this.props.attackReady(false);
        }
    }

    renderEnemies = () => {
        const { enemies } = this.props;
        return _.map(enemies, enemy => {
            return (
                <div onClick={() => this.handleTakeDamage()}>
                    <div style={{ marginTop: 15 }}> {enemy.name} </div>
                    <img src="https://pre00.deviantart.net/8ae3/th/pre/i/2016/347/d/3/avatar_orc_guerrier___warrior_homme___man_jdr_by_sarnia7-darhfx8.jpg" style={{ height: 100, marginTop: 15 }} />
                    <div style={{ marginTop: 15 }}> Hp: {enemy.hp}, Mp: {enemy.mp} </div>
                </div>
            )

        })
    }

    render() {
        console.log('enemy', this.props);
        let enemiesRenderer = this.renderEnemies();
        return (
            <div style={{ float: 'right', border: '1px solid red', width: 200, height: 800 }}>
                <div className="container d-flex flex-column justify-content-center">
                    {enemiesRenderer}
                </div>
            </div>
        )
    }
}

export default EnemyInterface;