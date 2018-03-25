let initial_state = {
    attackReady: false,
    turn: 'ally',
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
        default: {
            return state;
        }
    }
}