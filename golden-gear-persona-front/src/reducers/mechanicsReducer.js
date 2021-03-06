let initial_state = {
    attackReady: false,
    turn: 'ally',
    noOfEnemiesAttacked: 0,
    infoArray: [],
    characterIndex: null,
    attackingAllyIndex: 0,
    dmgPayload: null,
    combat: false,
    currentLevel: 'ThroneRoom',

    //quests
    spirit: ''
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case 'START_COMBAT':{
            return {
                ...state,
                combat: true
            }
        }
        case 'STOP_COMBAT':{
            console.log('2');
            return {
                ...state,
                combat: false
            }
        }
        case 'CALCULATE_DAMAGE':{
            return {
                ...state,
                dmgPayload: action.dmg
            }
        }
        case 'CALCULATE_HEAL':{
            return{
                ...state,
                healPayload: action.amount
            }
        }
        case 'ATTACK_READY': {
            return {
                ...state,
                attackReady: action.isReady
            }
        }
        case 'SWITCH_TURN': {
            return {
                ...state,
                turn: action.whoseTurn
            }
        }
        case 'INCREMENT_ENEMIES_ATTACKED': {
            return {
                ...state,
                noOfEnemiesAttacked: state.noOfEnemiesAttacked + 1
            }
        }
        case 'RESET_ENEMIES_ATTACKED': {
            return {
                ...state,
                noOfEnemiesAttacked: 0
            }
        }
        case 'ADD_INFO_TO_ARRAY': {
            return {
                ...state,
                infoArray: [action.info, ...state.infoArray ]
               
            }
        }
        case 'SET_CHARACTER_INDEX':{
            return {
                ...state,
                characterIndex: action.index
            }
        }
        case 'SET_ATTACKING_ALLY_INDEX':{
            return {
                ...state,
                attackingAllyIndex: action.index
            }
        }
        case 'SET_LEVEL':{
            return{
                ...state,
                currentLevel: action.newLevel
            }
        }

        case 'QUEST_STATUS':{
            return{
                ...state,
                [action.name]: action.status 
            }
        }
        default: {
            return state;
        }
    }
}