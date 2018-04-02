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
                        setTimeout(function () {
                            dispatch({
                                type: 'ALLY_LOSE_HP',
                                amount, allyIndex
                            })
                            resolve(success);
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


export const combatStart = () => {
    return function (dispatch, getState) {
        function enemyTurn() {
            //posortowanie wzgledem szybkosci
            let fighters = [];
            let index = getState().mechanics.noOfEnemiesAttacked;
            const enemies = getState().enemy;
            _.forEach(enemies, (enemy, index) => {
                fighters.push(enemy);
            })
            fighters.sort(function (a, b) {
                return b.stats.speed - a.stats.speed
            })
            //wykonanie ataku
            let enemyDealDamagePromise = new Promise(resolve => {
                let success = true;
                let amount = fighters[index].stats.attack;
                setTimeout(function () {
                    dispatch({
                        type: 'ALLY_LOSE_HP',
                        amount
                    })
                    resolve(success);
                }, 2000);
            })

            enemyDealDamagePromise.then((resp) => {
                dispatch({
                    type: 'INCREMENT_ENEMIES_ATTACKED'
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
                }
            })
        }

        enemyTurn();
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