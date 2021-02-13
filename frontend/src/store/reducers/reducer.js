import initialState from '../initialState';
import {IS_ERROR, SET_BUTTON_OFF, SET_BUTTON_ON, SET_BUTTON_STATE} from "../actions/actionTypes";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_BUTTON_ON: {
            return {
                ...state,
                isButtonOn: true
            }
        }
        case SET_BUTTON_OFF: {
            return {
                ...state,
                isButtonOn: false
            }
        }
        case SET_BUTTON_STATE: {
            return {
                ...state,
                isButtonOn: action.payload
            }
        }
        case IS_ERROR: {
            return {
                ...state,
                isError: action.payload
            }
        }
        default: return state;
    }
}