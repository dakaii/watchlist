import * as types from '../actions/Types';

export const DEFAULT_STATE = {
    configuration: {
        images: {
            secure_base_url: '',
        },
        isLoading: false,
    },
    genres: {
        genres: [],
        isLoading: false,
    },
    upcomingMovies: {
        results: [],
        isLoading: false,
    },
    watchList: {
        currentList: [],
        isLoading: false,
    },
};

export default (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case types.GET_CONFIG_REQUESTED:
            return {
                ...state,
                isLoading: true
            };
        case types.GET_CONFIG_SUCCEEDED:
            return {
                ...state,
                configuration: action.payload,
                isLoading: false
            };
        case types.GET_CONFIG_FAILED:
            return {
                ...state,
                configuration: action.payload,
                isLoading: false
            };
        case types.GET_GENRES_REQUESTED:
            return {
                ...state,
                isLoading: true
            };
        case types.GET_GENRES_SUCCEEDED:
            return {
                ...state,
                genres: action.payload,
                isLoading: false
            };
        case types.GET_GENRES_FAILED:
            return {
                ...state,
                genres: action.payload,
                isLoading: false
            };
        case types.UPCOMING_MOVIES_REQUESTED:
            return {
                ...state,
                isLoading: true
            };
        case types.UPCOMING_MOVIES_SUCCEEDED:
            return {
                ...state,
                upcomingMovies: action.payload,
                isLoading: false
            };
        case types.UPCOMING_MOVIES_FAILED:
            return {
                ...state,
                upcomingMovies: action.payload,
                isLoading: false
            };
        case types.ADD_TO_WATCHLIST_REQUESTED:
            return {
                ...state,
                isLoading: true
            };
        case types.ADD_TO_WATCHLIST_SUCCEEDED:
            return {
                ...state,
                watchList: action.payload,
                isLoading: false
            };
        case types.ADD_TO_WATCHLIST_FAILED:
            return {
                ...state,
                watchList: action.payload,
                isLoading: false
            };
        case types.REMOVE_FROM_WATCHLIST_REQUESTED:
            return {
                ...state,
                isLoading: true
            };
        case types.REMOVE_FROM_WATCHLIST_SUCCEEDED:
            return {
                ...state,
                watchList: action.payload,
                isLoading: false
            };
        case types.REMOVE_FROM_WATCHLIST_FAILED:
            return {
                ...state,
                watchList: action.payload,
                isLoading: false
            };
        default:
            return state
    }
}
