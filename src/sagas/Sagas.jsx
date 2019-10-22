import { put, select, takeLatest } from 'redux-saga/effects';
import { API_KEY, MOVIE_DB_API_URL } from "../constants/APIConstants";
import * as types from '../actions/Types';


function* getUpcomingMovies(action) {
    const pageNum = action.params.pageNum
    const url = `${MOVIE_DB_API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageNum}`

    const json = yield fetch(url)
        .then(response => response.json())

    yield put({ type: types.UPCOMING_MOVIES_SUCCEEDED, payload: json });
}

function* getConfiguration() {
    const url = `${MOVIE_DB_API_URL}/configuration?api_key=${API_KEY}`

    const json = yield fetch(url)
        .then(response => response.json())

    yield put({ type: types.GET_CONFIG_SUCCEEDED, payload: json });
}

function* getGenres() {
    const url = `${MOVIE_DB_API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`

    const json = yield fetch(url)
        .then(response => response.json())

    yield put({ type: types.GET_GENRES_SUCCEEDED, payload: json });
}

function* addToWatchList(action) {
    const state = yield select();
    const currentList = state.watchList.currentList.filter(val => 
        val.original_title !== action.params.movie.original_title
    );
    currentList.push(action.params.movie);
    
    yield put({ type: types.ADD_TO_WATCHLIST_SUCCEEDED, payload: { currentList } });
}

function* removeFromWatchList(action) {
    const state = yield select();
    const currentList = state.watchList.currentList.filter(val =>
        val.original_title !== action.params.movie.original_title
    );

    yield put({ type: types.REMOVE_FROM_WATCHLIST_SUCCEEDED, payload: { currentList } });
}


export default function* () {
    yield takeLatest(types.UPCOMING_MOVIES_REQUESTED, getUpcomingMovies)
    yield takeLatest(types.GET_CONFIG_REQUESTED, getConfiguration)
    yield takeLatest(types.GET_GENRES_REQUESTED, getGenres)
    yield takeLatest(types.ADD_TO_WATCHLIST_REQUESTED, addToWatchList)
    yield takeLatest(types.REMOVE_FROM_WATCHLIST_REQUESTED, removeFromWatchList)
}