let initial_state = {
    attackReady: false,
    turn: 'ally',
    noOfEnemiesAttacked: 0,
    infoArray: [],
};

export default (state = initial_state, action) => {
    switch (action.type) {
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
                infoArray: [...state.infoArray, action.info]
            }
        }
        default: {
            return state;
        }
    }
}