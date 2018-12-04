import chatReducer from './chat_reducer';
import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers ({
    chat: chatReducer,
    form: formReducer
});

export default rootReducer;