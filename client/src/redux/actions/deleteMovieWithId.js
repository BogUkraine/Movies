import { put, call } from 'redux-saga/effects';
import httpHelper from '../../functions/httpHelper';

const deleteMovie = async (id) => {
    return httpHelper(
        `http://localhost:5000/api/movie/${id}`,
        'DELETE'        
    );
}

function* deleteMovieWithId({id, page}) {
    yield call(deleteMovie, id);
    yield put({ type: 'FETCH_ALL_MOVIES', payload: page});
}

export default deleteMovieWithId;