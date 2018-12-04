import types from '../actions';
import { bindActionCreators } from 'redux';

const DEFAULT_STATE = {

};

export default (state = DEFAULT_STATE, action) => {
    switch(action.types){
        default:
            return state;
    }
}   