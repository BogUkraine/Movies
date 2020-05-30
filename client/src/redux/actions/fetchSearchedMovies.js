import { put, call } from 'redux-saga/effects';
import httpHelper from '../../functions/httpHelper';

const getMovies = async (keyword) => {
    return httpHelper(
        `http://localhost:5000/api/movie/search/${keyword}`,
        'GET'
    );
}

function* fetchSearchedMovies({payload}) {
    const {data} = yield call(getMovies, payload);
    yield put({ 
        type: 'SET_SEARCHED_MOVIES',
        payload: data.movies ? data.movies : []
    });
}

export default fetchSearchedMovies;

