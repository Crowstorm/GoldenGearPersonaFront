import _ from 'lodash'

import { allyLoseHP } from './allyActions'

const ATTACK_READY = "ATTACK_READY";
const SWITCH_TURN = 'SWITCH_TURN'



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
                let amount = fighters[index].stats.speed;
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