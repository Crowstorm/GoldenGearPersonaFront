import React from 'react'
import {useBackstab} from './skillMechanics' 

import _ from 'lodash';

class EnemyInterface extends React.Component {
    handleTakeDamage = (index) => {
        let charIndex = this.props.mechanics.attackingAllyIndex;
        let i = this.props.mechanics.attackingAllyIndex;
        if (this.props.mechanics.attackReady) {
            //calculate dmg received
            let allyDmg = this.props.mechanics.dmgPayload;
            let totalDmg = allyDmg - Math.floor(this.props.enemies[index].stats.defence/2);
            //hit chance
            let randomHitChance = Math.floor((Math.random() * 100) + 1);
            let playerHitChance = 70 + this.props.mainChar[i].stats.agility * 1.5
            let enemyEvasion = this.props.enemies[index].stats.agility;
            let totalHitChance = playerHitChance - enemyEvasion;
            //critical chance
            let wasCritical = false;
            let randomCritChance = Math.floor((Math.random() * 100) + 1);
            let playerCritChance = this.props.mainChar[i].stats.agility;
            if(playerCritChance >= randomCritChance){wasCritical = true};
            //assign dmg
            if(totalHitChance > randomHitChance){
                if(wasCritical){
                    this.props.loseHP(totalDmg *2, index);
                    let info = `CRITICAL HIT! ${this.props.mainChar[i].name} dealt ${totalDmg} to ${this.props.enemies[index].name}`
                    this.props.addInfoToArray(info);
                } else {
                    this.props.loseHP(totalDmg, index);
                    let info = `${this.props.mainChar[i].name} dealt ${totalDmg} to ${this.props.enemies[index].name}`
                    this.props.addInfoToArray(info);
                }
            } else {
                let info = `${this.props.mainChar[i].name} missed!`
                this.props.addInfoToArray(info);
            }
            //next attacker
            this.props.attackReady(false);
            this.props.setAttackingAllyIndex(charIndex + 1)
            //do zmiany w glownym buildzie
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
                    <img src={enemy.portrait} style={{ height: 100, marginTop: 15 }} />
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