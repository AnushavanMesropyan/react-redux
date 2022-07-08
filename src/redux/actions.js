import {
    CHANGE_LOADER
} from "./types";
/**
 *
 * @param loader
 * @returns {{payload: *, type: string}}
 */
export function changeLoaderAction(loader) {
    return {
        type:CHANGE_LOADER,
        payload:loader
    }
}








