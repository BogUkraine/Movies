import { put, call } from 'redux-saga/effects';
import httpHelper from '../../functions/httpHelper';

const postMovies = async (file) => {
    return httpHelper(
        'http://localhost:5000/api/movie/file',
        'POST',
        file,
        {'Content-Type': 'multipart/form-data'},
    );
}

function* addMovieWithFile({payload}) {
    console.log('payload', payload);
    const {data, isOk} = yield call(postMovies, payload);
    console.log('data',data);

    //yield put({ type: 'SET_WARNING', payload: data.message, isOk});
}

export default addMovieWithFile;