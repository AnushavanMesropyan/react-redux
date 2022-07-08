import {
    CHANGE_CAT, LOAD_CAT
} from "./types";

/**
 *
 * @returns {Promise<Function>}
 */
export function changeCatAction({category_ids, page = 1, load = false}) {
    return async dispatch => {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${category_ids}`, {method: 'GET'});
            const json = await response.json();
            if (load) {
                dispatch({
                    type: LOAD_CAT,
                    payload: json
                })
                return
            }
            dispatch({
                type: CHANGE_CAT,
                payload: json
            })
        } catch (e) {
        }
    }
}








