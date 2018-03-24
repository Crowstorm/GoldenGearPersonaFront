let initial_state = {
    attackReady: false
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case 'ATTACK_READY':{
            return{
                ...state,
                attackReady: action.isReady
            }
        }
        default: {
            return state;
        }
    }
}