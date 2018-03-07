import {MOVE_CHAR, MOVE_CHAR_UP}  from '../actions/types';


let initial_state = {
    x: 1,
    y: 1
}

export default (state = initial_state, action) => {
    console.log(action);
    switch (action.type) {
        case MOVE_CHAR:{
            return {
                x: action.x,
                y: action.y
            }
        }
        case MOVE_CHAR_UP:{
            return  Object.assign({}, state, {
                y: state.y+1
            })
        }
        default: {
            return state;
        }
    }
}