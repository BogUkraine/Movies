import React, {useEffect} from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import MovieItem from './MovieItem';

const Home = () => {
    const { movie } = useSelector(state => state, shallowEqual);
    const dispatch = useDispatch();

    const seeDetails = (info) => {
        console.log(info);
    }

    const deleteMovie = (id) => {
        dispatch({ type: 'DELETE_MOVIE', id });
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_MOVIES' });
    }, []);

    return (
        <div className="home">
            <div className="home__list">
                {movie.map((item, index) => {
                    return <MovieItem
                        info={item}
                        key={index}
                        seeDetails={seeDetails}
                        deleteMovie={deleteMovie}/>
                })}
            </div>
        </div>
    )
}

export default Home;