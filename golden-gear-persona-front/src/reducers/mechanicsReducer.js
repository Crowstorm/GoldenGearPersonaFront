let initial_state = {
    attackReady: false,
    turn: 'enemy',
    noOfEnemiesAttacked: 0,
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case 'ATTACK_READY':{
            return{
                ...state,
                attackReady: action.isReady
            }
        }
        case 'SWITCH_TURN':{
            return{
                ...state,
                turn: action.whoseTurn
            }
        }
        case 'INCREMENT_ENEMIES_ATTACKED':{
            return{
                ...state,
                noOfEnemiesAttacked: state.noOfEnemiesAttacked + 1
            }
        }
        case 'RESET_ENEMIES_ATTACKED':{
            return{
                ...state,
                noOfEnemiesAttacked: 0
            }
        }
        default: {
            return state;
        }
    }
}