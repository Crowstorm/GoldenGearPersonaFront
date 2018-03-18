import axios from 'axios';
import Api from '../services/api';


import { FETCH_USER, MOVE_CHAR, MOVE_CHAR_UP, MOVE_CHAR_DOWN, MOVE_CHAR_RIGHT, MOVE_CHAR_LEFT, CREATE_CHARACTER, FETCH_CHARACTER } from './types'

export const createCharacter = (payload) => {
    return function (dispatch) {
        console.log('payload', payload)
        //const params = {id, name, title, portrait, classGame}
        const params = payload;
        console.log('params', params)
        axios.post('/api/createCharacter', params).then(result => {
            console.log(result);
        })
    }
}

export const fetchCharacter = () =>{
    return function (dispatch) {
        axios.get('/api/current_user').then(res => {
            dispatch({ type: FETCH_CHARACTER, payload: res.data.character })
        })
    }
}

export const fetchUser = () => {
    return function (dispatch) {
        axios.get('/api/current_user').then(res => {
            dispatch({ type: FETCH_USER, payload: res.data })
        })
    }
}

export const moveChar = (x, y) => {
    return function (dispatch) {
        const _x = x;
        const _y = y;
        dispatch({
            type: MOVE_CHAR,
            x: _x,
            y: _y
        })
    }
}

export const moveCharUp = () => {
    return function (dispatch) {
        dispatch({
            type: MOVE_CHAR_UP
        })
    }
}

export const moveCharDown = () => {
    return function (dispatch) {
        dispatch({
            type: MOVE_CHAR_DOWN
        })
    }
}

export const moveCharRight = () => {
    return function (dispatch) {
        dispatch({
            type: MOVE_CHAR_RIGHT
        })
    }
}

export const moveCharLeft = () => {
    return function (dispatch) {
        dispatch({
            type: MOVE_CHAR_LEFT
        })
    }
}
