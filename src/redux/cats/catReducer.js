import {
    CHANGE_CAT,
    LOAD_CAT
} from "./types";

const initialState = {
    cats: [],
};
export const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CAT:
            return {...state, cats: action.payload};
        case LOAD_CAT:
            return {...state, cats:[...state.cats,...action.payload] };
        default:
            return state;
    }
};