import { put, call } from 'redux-saga/effects';
import httpHelper from '../../functions/httpHelper';

const getMovies = async () => {
    return httpHelper(
        'http://localhost:5000/api/movie/',
        'GET'
    );
}

function* fetchAllMovies() {
    const {data} = yield call(getMovies);
    yield put({ type: 'SET_HOME_MOVIES', payload: data?.movies});
}

export default fetchAllMovies;

