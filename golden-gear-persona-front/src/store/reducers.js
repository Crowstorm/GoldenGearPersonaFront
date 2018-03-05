import {reducer as reduxForm} from 'redux-form';
import { combineReducers } from 'redux';


import characterReducer from '../reducers/characterReducer';
import authReducer from '../reducers/authReducer';

export default combineReducers({
    form: reduxForm,
    mainCharacter: characterReducer,
    auth: authReducer
})