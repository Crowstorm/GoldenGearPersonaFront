import axios from 'axios';

import {FETCH_USER, MOVE_CHAR, MOVE_CHAR_UP} from './types'

export const fetchUser = () => {
    return function(dispatch){
        axios.get('/api/current_user').then(res =>{
            dispatch({type: FETCH_USER, payload: res.data})
        })
    }
}

export const moveChar = (x, y) =>{
    return function(dispatch){
        const _x = x;
        const _y = y;
        dispatch({
            type: MOVE_CHAR,
            x: _x,
            y: _y
        })
    }
}

export const moveCharUp = () =>{
    return function(dispatch){
        dispatch({
            type: MOVE_CHAR_UP
        })
    }
}