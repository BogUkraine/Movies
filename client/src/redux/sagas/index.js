import { takeLatest, all } from 'redux-saga/effects';

import fetchAllMovies from '../actions/fetchAllMovies';
import addMovieWithForm from '../actions/addMovieWithForm';
import deleteMovieWithId from '../actions/deleteMovieWithId';
import addMovieWithFile from '../actions/addMovieWithFile';
import fetchSearchedMovies from '../actions/fetchSearchedMovies';

function* fetchAllMoviesWatcher() {
    yield takeLatest('FETCH_ALL_MOVIES', fetchAllMovies);
}

function* fetchSearchedMoviesWatcher() {
    yield takeLatest('FETCH_SEARCHED_MOVIES', fetchSearchedMovies);
}

function* addMovieWithFormWatcher() {
    yield takeLatest('ADD_MOVIE_WITH_FORM', addMovieWithForm);
}

function* addMovieWithFileWatcher() {
    yield takeLatest('ADD_MOVIE_WITH_FILE', addMovieWithFile);
}

function* deleteMovieWithIdWatcher() {
    yield takeLatest('DELETE_MOVIE', deleteMovieWithId);
}

export default function* rootSaga() {
    yield all([
        fetchAllMoviesWatcher(),
        addMovieWithFormWatcher(),
        deleteMovieWithIdWatcher(),
        addMovieWithFileWatcher(),
        fetchSearchedMoviesWatcher(),
    ]);
}