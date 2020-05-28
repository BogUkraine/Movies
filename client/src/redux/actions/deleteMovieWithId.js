import { put, call } from 'redux-saga/effects';
import httpHelper from '../../functions/httpHelper';

const deleteMovie = async (id) => {
    console.log(id)
    return httpHelper(
        `http://localhost:5000/api/movie/${id}`,
        'DELETE'        
    );
}

function* deleteMovieWithId({id}) {
    const {data} = yield call(deleteMovie, id);
    console.log('data',data);

    yield put({ type: 'FETCH_ALL_MOVIES' });
}

export default deleteMovieWithId;