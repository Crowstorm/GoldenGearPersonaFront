import React from 'react'

import _ from 'lodash';

class EnemyInterface extends React.Component {
    handleTakeDamage = (index) => {
        let charIndex = this.props.mechanics.attackingAllyIndex;
        if (this.props.mechanics.attackReady) {
            this.props.loseHP(5, index);
            this.props.attackReady(false);
            this.props.setAttackingAllyIndex(charIndex + 1)
            if (charIndex < 3) {
                this.props.setAttackingAllyIndex(charIndex + 1)
            } else if (charIndex === 3) {
                this.props.setAttackingAllyIndex(0)
                this.props.switchTurn('enemy')

            } else {
                this.props.setAttackingAllyIndex(0)
                this.props.switchTurn('enemy')
            }

        }
    }

    renderEnemies = () => {
        const { enemies } = this.props;
        return _.map(enemies, (enemy, index) => {
            //console.log('index', index)
            return (
                <div key={index} onClick={() => this.handleTakeDamage(index)}>
                    <div style={{ marginTop: 15 }}> {enemy.name} </div>
                    <img src="https://pre00.deviantart.net/8ae3/th/pre/i/2016/347/d/3/avatar_orc_guerrier___warrior_homme___man_jdr_by_sarnia7-darhfx8.jpg" style={{ height: 100, marginTop: 15 }} />
                    <div style={{ marginTop: 15 }}> Hp: {enemy.stats.hp}, Mp: {enemy.stats.mp} </div>
                </div>
            )

        })
    }

    render() {
        let enemiesRenderer = this.renderEnemies();
        return (
            <div style={{ float: 'right', border: '1px solid red', width: 200, height: 800 }}>
                <div id="gowno" className="container d-flex flex-column justify-content-center">
                    {enemiesRenderer}
                </div>
            </div>
        )
    }
}

export default EnemyInterface;