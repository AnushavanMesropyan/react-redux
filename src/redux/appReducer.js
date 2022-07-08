import {
    CHANGE_LOADER
} from "./types";

const initialState = {
    loader: false,
};
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOADER:
            return {...state, loader: action.payload};
        default:
            return state;
    }
};