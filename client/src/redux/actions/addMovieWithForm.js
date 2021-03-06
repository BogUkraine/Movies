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
    const stars = payload.stars.split(',').map(item => item.trim());
    const formData = {...payload, stars};
    const {data, isOk} = yield call(postMovie, formData);
    
    yield put({ type: 'SET_WARNING', payload: data?.message, isOk});
}

export default addMovieWithForm;