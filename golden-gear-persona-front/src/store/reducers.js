import characterReducer from '../reducers/characterReducer';
import authReducer from '../reducers/authReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    mainCharacter: characterReducer,
    auth: authReducer
})