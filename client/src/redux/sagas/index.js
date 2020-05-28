import { takeLatest, all } from 'redux-saga/effects';

import fetchAllMovies from '../actions/fetchAllMovies';
import addMovieWithForm from '../actions/addMovieWithForm';
import deleteMovieWithId from '../actions/deleteMovieWithId';

function* fetchAllMoviesWatcher() {
    yield takeLatest('FETCH_ALL_MOVIES', fetchAllMovies);
}

function* addMovieWithFormWatcher() {
    yield takeLatest('ADD_MOVIE_WITH_FORM', addMovieWithForm);
}

function* deleteMovieWithIdWatcher() {
    yield takeLatest('DELETE_MOVIE', deleteMovieWithId);
}

export default function* rootSaga() {
    yield all([
        fetchAllMoviesWatcher(),
        addMovieWithFormWatcher(),
        deleteMovieWithIdWatcher(),
    ]);
}