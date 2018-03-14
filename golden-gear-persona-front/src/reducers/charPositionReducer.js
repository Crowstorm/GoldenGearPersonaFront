import {MOVE_CHAR, MOVE_CHAR_UP, MOVE_CHAR_DOWN, MOVE_CHAR_RIGHT, MOVE_CHAR_LEFT}  from '../actions/types';
import front from '../assets/front.gif'
import back from '../assets/back.gif'
import left from '../assets/left.gif'
import right from '../assets/right.gif'


let initial_state = {
    x: 1,
    y: 1,
    model: front
}



export default (state = initial_state, action) => {
    console.log(action);
    let _x = state.x;
    let _y = state.y;
    const checkForBlocked = () =>{
        if (_x === 4 && _y === 4){
           return
        }
    }
    switch (action.type) {
        case MOVE_CHAR:{
            return {
                x: action.x,
                y: action.y
            }
        }
        case MOVE_CHAR_UP:{
            checkForBlocked();
            return  Object.assign({}, state, {
                y: state.y+1,
                model: back
            })
        }
        case MOVE_CHAR_DOWN:{
            checkForBlocked();

            return  Object.assign({}, state, {
                y: state.y-1,
                model: front
            })
        }
        case MOVE_CHAR_RIGHT:{
            checkForBlocked();

            return  Object.assign({}, state, {
                x: state.x+1,
                model: right
            })
        }
        case MOVE_CHAR_LEFT:{
            checkForBlocked();

            return  Object.assign({}, state, {
                x: state.x-1,
                model: left
            })
        }
        default: {
            return state;
        }
    }
}