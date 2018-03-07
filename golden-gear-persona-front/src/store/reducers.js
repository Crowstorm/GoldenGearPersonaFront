import {reducer as reduxForm} from 'redux-form';
import { combineReducers } from 'redux';


import characterReducer from '../reducers/characterReducer';
import authReducer from '../reducers/authReducer';
import charPositionReducer from '../reducers/charPositionReducer';

export default combineReducers({
    form: reduxForm,
    mainCharacter: characterReducer,
    auth: authReducer,
    charPosition: charPositionReducer
})