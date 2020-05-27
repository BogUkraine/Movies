import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import httpHelper from '../../functions/httpHelper';

const postMovie = async (form) => {
    return httpHelper(
        'http://localhost:5000/api/movie/',
        'POST',
        form
    );
}

function* addMovieWithForm({payload}) {
    console.log(payload);
    const data = yield call(postMovie, payload);
    console.log(data);
}

export default addMovieWithForm;