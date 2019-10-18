import { UPCOMING_MOVIES_FAILED, UPCOMING_MOVIES_REQUESTED, UPCOMING_MOVIES_SUCCEEDED, GET_CONFIG_REQUESTED, GET_CONFIG_SUCCEEDED, GET_CONFIG_FAILED } from '../actions/Types';

export const DEFAULT_STATE = {
    configuration: {
        isLoading: false,
    },
    upcomingMovies: {
        isLoading: false,
    },
};

export default (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case GET_CONFIG_REQUESTED:
            return {
                ...state,
                isLoading: true
            };
        case GET_CONFIG_SUCCEEDED:
            return {
                ...state,
                configuration: action.payload,
                isLoading: false
            };
        case GET_CONFIG_FAILED:
            return {
                ...state,
                configuration: action.payload,
                isLoading: false
            };
        case UPCOMING_MOVIES_REQUESTED:
            return {
                ...state,
                isLoading: true
            };
        case UPCOMING_MOVIES_SUCCEEDED:
            return {
                ...state,
                upcomingMovies: action.payload,
                isLoading: false
            };
        case UPCOMING_MOVIES_FAILED:
            return {
                ...state,
                upcomingMovies: action.payload,
                isLoading: false
            };
        default:
            return state
    }
}
