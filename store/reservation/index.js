import {SET_DATE, NEXT_STEP, PREV_STEP, SET_PAYMENT, SET_ROOM} from './actions.type';

const initialState = {
    date: {
        checkin: '',
        checkout: ''
    },
    room: {
        type: '',
        view: ''
    },
    payment: {
        cardNumber: '',
        cardName: '',
        expiry: '',
        cvc: ''
    },
    step: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                date: {
                    checkin: action.payload.checkin,
                    checkout: action.payload.checkout
                }
            };
        case SET_PAYMENT:
            return {
                ...state,
                payment: action.payload
            };
        case SET_ROOM:
            return {
                ...state,
                room: action.payload
            };
        case NEXT_STEP:
            return {
                ...state,
                step: state.step + 1
            };
        case PREV_STEP:
            return {
                ...state,
                step: state.step - 1
            };
        default:
            return state
    }
}

