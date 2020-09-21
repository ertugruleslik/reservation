import { SET_DATE, PREV_STEP, NEXT_STEP, SET_PAYMENT, SET_ROOM } from './actions.type';

export const setDate = (payload) => {
    return {
        type: SET_DATE,
        payload
    };
};

export const setRoom = (payload) => {
    return {
        type: SET_ROOM,
        payload
    };
};

export const setPayment = (payload) => {
    return {
        type: SET_PAYMENT,
        payload
    };
};

export const nextStep = () => {
    return {
        type: NEXT_STEP,
    }
};

export const prevStep = () => {
    return {
        type: PREV_STEP,
    }
};
