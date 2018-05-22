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
                            //Logika prawdopodobnie przeniesiona
                            if (getState().enemies.length === 0) {
                                // this.stopCombat();
                                // alert('wygrales');
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
                        //hit chance
                        let allyIndex = Math.floor((Math.random() * getState().mainChar.length));
                        let randomHitChance = Math.floor((Math.random() * 100) + 1);
                        let enemyHitChance = 70 + fighters[index].stats.agility * 1.5;
                        let playerEvasion = getState().mainChar[allyIndex].stats.agility;
                        let totalHitChance = enemyHitChance - playerEvasion;
                        //dmg
                        let dmg = fighters[index].stats.strength;
                        let totalDmg = dmg - Math.floor(getState().mainChar[allyIndex].stats.defence/2);
                        //critical chance
                        let amount = fighters[index].stats.strength;
                        let data = { name: fighters[index].name, dmg: totalDmg, allyIndex: allyIndex }
                        //resolving dmg
                        if(totalHitChance > randomHitChance){
                            setTimeout(function () {
                                dispatch({
                                    type: 'ALLY_LOSE_HP',
                                    amount, allyIndex
                                });
                                resolve(data);
                                
                            }, 1000);
                        } else {
                            setTimeout(function () {
                                // let info = `${fighters[index].name} missed!`;
                                // dispatch({
                                //     type: 'ADD_INFO_TO_ARRAY',
                                //     info
                                // })
                                data = {name: fighters[index].name, missed: true, allyIndex: allyIndex};
                                resolve(data);
                            }, 1000);
                            
                        }
                        
                    })
                    //check if player alive

                    enemyDealDamagePromise.then((resp) => {
                        console.log('indeksik', resp);
                        

                        dispatch({
                            type: 'INCREMENT_ENEMIES_ATTACKED'
                        })
                        let info;
                        if(resp.missed === true){
                            info = `${resp.name} missed!`;
                        } else {
                            info = `${resp.name} dealt ${resp.dmg} damage to ${getState().mainChar[resp.allyIndex].name}`;
                        }

                        dispatch({
                            type: 'ADD_INFO_TO_ARRAY',
                            info
                        })
                        
                        let i = resp.allyIndex;
                        if(getState().mainChar[i].stats.hp <= 0){
                            dispatch({
                                type: 'ALLY_DIED',
                                i
                            })
                        }
                        if (getState().mainChar.length <= 0) {
                            console.log('umarles');
                            alert('Przegrales')
                            return 0
                        }
                        
                      

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

export const healReady = (isReady) =>{
    return function(dispatch){
        dispatch({
            type: 'HEAL_READY',
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

export const calculateDmg = (dmg) => {
    return function (dispatch) {
        dispatch({
            type: 'CALCULATE_DAMAGE',
            dmg
        })
    }
}

export const calculateHeal = (amount) =>{
    return function(dispatch){
        dispatch({
            type: 'CALCULATE_HEAL',
            amount
        })
    }
}

export const addInfoToArray = (info) => {
    return function (dispatch) {
        dispatch({
            type: 'ADD_INFO_TO_ARRAY',
            info
        })
    }
}

export const changeLevel = (newLevel) =>{
    return function(dispatch){
        dispatch({
            type:'SET_LEVEL',
            newLevel
        })
    }
}

export const setCharacterPosition = (x, y) =>{
    return function(dispatch){
        dispatch({
            type:'SET_CHARACTER_POSITION',
            x, y
        })
    }
}

export const pickUpItem = (item) =>{
    console.log(item)
    return function(dispatch){
        dispatch({
            type: 'ITEM_PICK_UP',
            item
        })
    }
}

export const setQuest = (quest) =>{
    return function(dispatch){
        dispatch({
            type: 'SET_QUEST',
            quest
        })
    }
}

export const startCombat = ()=>{
    return function(dispatch){
        dispatch({
            type: 'START_COMBAT',
        })
    }
}

export const stopCombat = ()=>{
    console.log('1');
    return function(dispatch){
        dispatch({
            type: 'STOP_COMBAT',
        })
    }
}