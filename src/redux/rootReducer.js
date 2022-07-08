import {combineReducers} from 'redux';
import {appReducer} from "./appReducer";
import {categoryReducer} from "./category/categoryReducer";
import {catReducer} from "./cats/catReducer";
export const rootReducer = combineReducers({
    app:appReducer,
    category:categoryReducer,
    cat:catReducer,
})