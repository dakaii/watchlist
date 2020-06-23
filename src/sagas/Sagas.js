import { put, takeLatest } from 'redux-saga/effects';
import { config } from '../constants/Constants';
import * as types from '../actions/Types';

function* requestLogIn(action) {
    const url = `${config.API_URL}/api/jwt/create/`;
    let response = null;
    try {
        response = yield fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.params),
        });
    } catch (error) {
        console.log(error);
    }
    if (response && response.status === 200) {
        const payload = yield response.json();
        localStorage.setItem('access', payload['access']);
        yield put({ type: types.LOGIN_SUCCESS, payload: payload });
    } else {
        yield put({ type: types.LOGIN_FAILURE });
    }
}

function* requestSignup(action) {
    const url = `${config.API_URL}/api/signup/`;
    let response = null;
    try {
        response = yield fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.params),
        });
    } catch (error) {
        console.log(error);
    }
    if (response && response.status === 201) {
        const payload = yield response.json();
        localStorage.setItem('access', payload['access']);
        yield put({ type: types.SIGNUP_SUCCESS, payload: payload });
    } else if (response && response.status === 400) {
        const payload = yield response.json();
        yield put({
            type: types.SIGNUP_SUCCESS,
            payload: payload,
        });
    } else {
        yield put({ type: types.SIGNUP_FAILURE });
    }
}
// function* getConfiguration() {
//     const url = `${MOVIE_DB_API_URL}/configuration?api_key=${API_KEY}`;

//     const json = yield fetch(url).then((response) => response.json());

//     yield put({ type: types.GET_CONFIG_SUCCEEDED, payload: json });
// }

// function* getGenres() {
//     const url = `${MOVIE_DB_API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

//     const json = yield fetch(url).then((response) => response.json());

//     yield put({ type: types.GET_GENRES_SUCCEEDED, payload: json });
// }

// function* addToWatchList(action) {
//     const state = yield select();
//     const currentList = state.watchList.currentList.filter(
//         (val) => val.original_title !== action.params.movie.original_title
//     );
//     currentList.push(action.params.movie);

//     yield put({
//         type: types.ADD_TO_WATCHLIST_SUCCEEDED,
//         payload: { currentList },
//     });
// }

// function* removeFromWatchList(action) {
//     const state = yield select();
//     const currentList = state.watchList.currentList.filter(
//         (val) => val.original_title !== action.params.movie.original_title
//     );

//     yield put({
//         type: types.REMOVE_FROM_WATCHLIST_SUCCEEDED,
//         payload: { currentList },
//     });
// }

export default function* () {
    yield takeLatest(types.LOGIN_REQUEST, requestLogIn);
    yield takeLatest(types.SIGNUP_REQUEST, requestSignup);
    // yield takeLatest(types.GET_CONFIG_REQUESTED, getConfiguration);
    // yield takeLatest(types.GET_GENRES_REQUESTED, getGenres);
    // yield takeLatest(types.ADD_TO_WATCHLIST_REQUESTED, addToWatchList);
}
