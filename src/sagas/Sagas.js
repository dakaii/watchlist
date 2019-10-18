import { put, takeLatest } from 'redux-saga/effects';
import { API_KEY, MOVIE_DB_API_URL } from "../actions/Constants";
import * as types from '../actions/Types';


function* getUpcomingMovies(action) {
    const pageNum = action.params.pageNum
    const url = `${MOVIE_DB_API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageNum}`

    const json = yield fetch(url)
        .then(response => response.json())

    yield put({ type: types.UPCOMING_MOVIES_SUCCEEDED, payload: json });
}

function* getConfiguration() {
    const url = `${MOVIE_DB_API_URL}configuration?api_key=${API_KEY}`

    const json = yield fetch(url)
        .then(response => response.json())

    yield put({ type: types.GET_CONFIG_SUCCEEDED, payload: json });
}


export default function* () {
    yield takeLatest(types.UPCOMING_MOVIES_REQUESTED, getUpcomingMovies)
    yield takeLatest(types.GET_CONFIG_REQUESTED, getConfiguration)
}