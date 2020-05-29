import { put, call } from 'redux-saga/effects';

const postMovies = async (file) => {
    console.log('in');
    const response = await fetch(
        'http://localhost:5000/api/movie/file', {
        method: 'POST',
        body: file,
    });
    const data = await response.json();
    return {data, isOk: response.ok};
}

function* addMovieWithFile({payload}) {
    const {data, isOk} = yield call(postMovies, payload);
    yield put({ 
        type: 'SET_WARNING', 
        payload: data ? data.message : 'Something went wrong', 
        isOk
    });
}

export default addMovieWithFile;