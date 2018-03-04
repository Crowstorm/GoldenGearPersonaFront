import {FETCH_USER } from '../actions/types';

let initial_state = {
    name: null
}

export default (state = initial_state, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_USER:{
            return action.payload || false;
        }

        default: {
            return state;
        }
    }
}