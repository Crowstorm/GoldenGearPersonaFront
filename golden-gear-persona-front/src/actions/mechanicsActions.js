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
                console.log('tura ally')
                const allyTurn = () => {
                    console.log('dzialam');
                    let allyPickTargetPromise = new Promise(resolve => {
                        let handleKeyDown = (e) => {
                            console.log(e);
                            if(getState().mechanics.turn === "enemy"){
                                let i = 'O KURWA DZIALA'
                                resolve(i)
                            }
                        }
                        document.addEventListener("mousedown", handleKeyDown);
                    })
                    allyPickTargetPromise.then((resp) => {
                        let whoseTurn = 'enemy'
                        console.log('resp', resp)
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
                    console.log('tura enemy')
                    //sort enemies
                    let fighters = [];
                    const enemies = getState().enemy;
                    _.forEach(enemies, (enemy, index) => {
                        fighters.push(enemy);
                    })
                    fighters.sort(function (a, b) {
                        return b.stats.speed - a.stats.speed
                    })
                    let index = getState().mechanics.noOfEnemiesAttacked;
                    console.log('index2', index)
                    //dispatch attacks per enemy
                    let enemyDealDamagePromise = new Promise(resolve => {
                        let success = true;
                        console.log('index', index)
                        console.log(fighters[index].stats.attack, 'lll')
                        let amount = fighters[index].stats.attack;
                        let allyIndex = 0;
                        let data = {name: fighters[index].name, dmg: amount, allyIndex: allyIndex}
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
                        if (getState().mainCharacter[0].stats.hp <= 0) {
                            console.log('umarles');
                            alert('u ded nigga lol')
                            return 0
                        }

                        dispatch({
                            type: 'INCREMENT_ENEMIES_ATTACKED'
                        })
                        
                        let info = `${resp.name} dealt ${resp.dmg} damage to ${getState().mainCharacter[resp.allyIndex].name}`;
                        console.log(info, 'info')
                        dispatch({
                            type: 'ADD_INFO_TO_ARRAY',
                            info
                        })

                        //czy koniec walki?
                        if (getState().mechanics.noOfEnemiesAttacked < fighters.length) {
                            console.log(getState().mechanics.noOfEnemiesAttacked)

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

export const setCharacterIndex = (index) =>{
    return function(dispatch){
        dispatch({
            type: 'SET_CHARACTER_INDEX',
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