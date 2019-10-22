import * as types from './Types';


export const addToWatchList = (params) => ({
    type: types.ADD_TO_WATCHLIST_REQUESTED,
    params,
});

export const removeFromWatchList = (params) => ({
    type: types.REMOVE_FROM_WATCHLIST_REQUESTED,
    params,
});