import _ from 'lodash'

import { allyLoseHP } from './allyActions'

const ATTACK_READY = "ATTACK_READY";
const SWITCH_TURN = 'SWITCH_TURN'

export const combatStart2 = () => {
    return function (dispatch, getState) {
        function combatLoop() {
            //check whose turn
            if (getState().mechanics.turn === "ally") {
                //ally turn
                const allyTurn = () => {
                    let allyPickTargetPromise = new Promise(resolve => {
                        let handleKeyDown = (e) => {
                            if (getState().mechanics.turn === "enemy") {
                                let i = 'dziala'
                                resolve(i)
                            }
                            if (getState().enemies.length === 0) {
                                alert('wygrales');
                                return 0;
                            }
                        }
                        document.addEventListener("mousedown", handleKeyDown);
                    })
                    allyPickTargetPromise.then((resp) => {
                        let whoseTurn = 'enemy'
                        dispatch({
                            type: SWITCH_TURN,
                            whoseTurn
                        })
                        combatLoop();
                    })
                }
                allyTurn();
            } else if (getState().mechanics.turn === 'enemy') {
                //enemy turn
                function enemyTurn() {
                    //sort enemies
                    let fighters = [];
                    const enemies = getState().enemies;
                    _.forEach(enemies, (enemy, index) => {
                        fighters.push(enemy);
                    })
                    fighters.sort(function (a, b) {
                        return b.stats.speed - a.stats.speed
                    })
                    let index = getState().mechanics.noOfEnemiesAttacked;
                    //dispatch attacks per enemy
                    let enemyDealDamagePromise = new Promise(resolve => {
                        let success = true;
                        let amount = fighters[index].stats.attack;
                        let allyIndex = Math.floor((Math.random() * 3));
                        let data = { name: fighters[index].name, dmg: amount, allyIndex: allyIndex }
                        setTimeout(function () {
                            dispatch({
                                type: 'ALLY_LOSE_HP',
                                amount, allyIndex
                            })
                            resolve(data);
                        }, 1000);
                    })
                    //check if player alive

                    enemyDealDamagePromise.then((resp) => {
                        if (getState().mainChar[0].stats.hp <= 0) {
                            console.log('umarles');
                            alert('Przegrales')
                            return 0
                        }

                        dispatch({
                            type: 'INCREMENT_ENEMIES_ATTACKED'
                        })

                        let info = `${resp.name} dealt ${resp.dmg} damage to ${getState().mainChar[resp.allyIndex].name}`;
                        console.log(info, 'info')
                        dispatch({
                            type: 'ADD_INFO_TO_ARRAY',
                            info
                        })

                        //czy koniec walki?
                        if (getState().mechanics.noOfEnemiesAttacked < fighters.length) {
                            enemyTurn();
                        } else {
                            let whoseTurn = 'ally'
                            dispatch({
                                type: SWITCH_TURN,
                                whoseTurn
                            })
                            dispatch({
                                type: 'RESET_ENEMIES_ATTACKED'
                            })
                            combatLoop();
                        }
                    })
                }
                enemyTurn();
            }
        }
        combatLoop();
    }
}

export const setCharacterIndex = (index) => {
    return function (dispatch) {
        dispatch({
            type: 'SET_CHARACTER_INDEX',
            index
        })
    }
}

export const setAttackingAllyIndex = (index) => {
    return function (dispatch) {
        dispatch({
            type: 'SET_ATTACKING_ALLY_INDEX',
            index
        })
    }
}

export const attackReady = (isReady) => {
    return function (dispatch) {
        dispatch({
            type: ATTACK_READY,
            isReady
        })
    }
}

export const switchTurn = (whoseTurn) => {
    return function (dispatch) {
        dispatch({
            type: SWITCH_TURN,
            whoseTurn
        })
    }
}

export const incrementEnemiesAttacked = () => {
    return function (dispatch) {
        dispatch({
            type: 'INCREMENT_ENEMIES_ATTACKED'
        })
    }
}

export const calculateDmg = (dmg) =>{
    return function(dispatch){
        dispatch({
            type: 'CALCULATE_DAMAGE',
            dmg
        })
    }
}