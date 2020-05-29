import React, {useEffect, useState} from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import MovieItem from './MovieItem';
import MovieCard from './MovieCard';

const Home = () => {
    const { movie } = useSelector(state => state, shallowEqual);
    const dispatch = useDispatch();
    const [display, setDisplay] = useState('none');
    const [description, setDescription] = useState({});

    const seeDetails = (info) => {
        setDescription(info);
        setDisplay('flex');
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
                {movie.length !== 0 ? 
                    movie.map((item, index) => {
                        return <MovieItem
                            info={item}
                            key={index}
                            seeDetails={seeDetails}
                            deleteMovie={deleteMovie}/>
                    }) :
                    <h2 className="home__title">
                        There are no movies yet
                    </h2>
                }
            </div>
            <MovieCard 
                display={display}
                info={description}
                setDisplay={setDisplay}
            />
        </div>
    )
}

export default Home;