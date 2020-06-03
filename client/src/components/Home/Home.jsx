import React, {useEffect, useState} from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import MovieItem from './MovieItem';
import MovieCard from './MovieCard';
import DeleteMovieBox from './DeleteMovieBox';
import PagesList from './PagesList';

const Home = () => {
    const { movies, page, moviesCount, limit } = useSelector(
        state => state.movieHome, shallowEqual
    );
    const dispatch = useDispatch();
    const [display, setDisplay] = useState('none');
    const [visibleDeleteBox, setVisibleDeleteBox] = useState(false);
    const [deleteMovieInfo, setDeleteMovieInfo] = useState(null);
    const [description, setDescription] = useState({});

    const seeDetails = (info) => {
        setDescription(info);
        setDisplay('flex');
    }

    const showDeleteBox = (info) => {
        setDeleteMovieInfo(info);
        setVisibleDeleteBox(true);
    }

    const deleteMovie = () => {
        dispatch({
            type: 'DELETE_MOVIE',
            id: deleteMovieInfo._id,
            page 
        });
        setVisibleDeleteBox(false);
    }

    const getMoviesOfPage = (page) => {
        dispatch({
            type: 'FETCH_ALL_MOVIES', 
            payload: page,
        })
    }

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_ALL_MOVIES', 
            payload: 0,
        });
    }, []);

    return (
        <div className="home">
            <div className="home__list list">
                {movies?.length !== 0 ? 
                    movies.map((item, index) => {
                        return <MovieItem
                            info={item}
                            key={index}
                            seeDetails={seeDetails}
                            showDeleteBox={showDeleteBox}/>
                    }) :
                    <h2 className="home__title">
                        There are no movies yet
                    </h2>
                }
            </div>
            {moviesCount > limit ?
                <PagesList 
                    page={page} 
                    moviesCount={moviesCount}
                    limit={limit}
                    getMoviesOfPage={getMoviesOfPage}/>
                : null
            }
            <MovieCard 
                display={display}
                info={description}
                setDisplay={setDisplay}
            />
            {visibleDeleteBox ? 
            <DeleteMovieBox 
            deleteMovieInfo={deleteMovieInfo}
            setVisibleDeleteBox={setVisibleDeleteBox}
            deleteMovie={deleteMovie}/> : 
            null}
        </div>
    )
}

export default Home;