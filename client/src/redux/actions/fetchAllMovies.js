import { put, call } from 'redux-saga/effects';
import httpHelper from '../../functions/httpHelper';

const getMovies = async (page, limit) => {
    return httpHelper(
        `http://localhost:5000/api/movie/${page}${limit}`,
        'GET'
    );
}

function* fetchAllMovies({payload}) {
    const {data} = yield call(getMovies, payload, 10);
    yield put({ type: 'SET_HOME_MOVIES', payload: data});
}

export default fetchAllMovies;

