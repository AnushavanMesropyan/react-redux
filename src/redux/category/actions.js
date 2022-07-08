import {
    CHANGE_CATEGORY
} from "./types";

/**
 *
 * @returns {Promise<Function>}
 */
export  function  changeCategoryAction() {
    return async dispatch => {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/categories`,{method: 'GET'});
            const json = await response.json();

            dispatch({
                type: CHANGE_CATEGORY,
                payload: json
            })
        } catch (e) {
        }
    }
}








