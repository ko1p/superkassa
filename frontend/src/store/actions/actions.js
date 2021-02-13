import {IS_ERROR, SET_BUTTON_OFF, SET_BUTTON_ON, SET_BUTTON_STATE} from "./actionTypes";

export function setButtonOn() {
    return {
        type: SET_BUTTON_ON,
    }
}

export function setButtonOff() {
    return {
        type: SET_BUTTON_OFF,
    }
}

export function setButtonState(state) {
    return {
        type: SET_BUTTON_STATE,
        payload: state
    }
}

export function isError(state) {
    return {
        type: IS_ERROR,
        payload: state
    }
}