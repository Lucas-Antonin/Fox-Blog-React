import {
    GET_USER_AUTH,
} from "./types";

import { getUserAuth } from "../../services/userDataService";

/**
 * Try to authorize user on API and save return to redux storage
 */
export const getApiUserAuthorization = (email, password) => async (dispatch) => {
    try {
        const res = await getUserAuth(email, password);

        dispatch({
            type: GET_USER_AUTH,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};