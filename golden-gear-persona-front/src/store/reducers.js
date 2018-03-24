import {reducer as reduxForm} from 'redux-form';
import { combineReducers } from 'redux';


import characterReducer from '../reducers/characterReducer';
import authReducer from '../reducers/authReducer';
import charPositionReducer from '../reducers/charPositionReducer';
import modalsReducer from '../reducers/modalsReducer';
import enemyReducer from '../reducers/enemyReducer'
import mechanicsReducer from '../reducers/mechanicsReducer';

export default combineReducers({
    form: reduxForm,
    mainCharacter: characterReducer,
    auth: authReducer,
    charPosition: charPositionReducer,
    modals: modalsReducer,
    enemy: enemyReducer,
    mechanics: mechanicsReducer
})