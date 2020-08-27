import { FETCH_DATA, ERROR, TOGGLE_FAVORITE, SET_BASE_CURRENCY } from "./types"

export const fetchData = (data) => ({
    type: FETCH_DATA,
    payload: data,
});

export const error = () => ({
    type: ERROR,
});

export const setFavorite = (currency) => ({
    type: TOGGLE_FAVORITE,
    payload: currency,
});

export const setBaseCurrency = (currency) => ({
    type: SET_BASE_CURRENCY,
    payload: currency,
})