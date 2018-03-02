import characterReducer from '../reducers/characterReducer'
import { combineReducers } from 'redux';

export default combineReducers({
    mainCharacter: characterReducer
})