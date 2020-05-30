import React, {useState} from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import MovieItem from '../Home/MovieItem';
import MovieCard from '../Home/MovieCard';

const Search = () => {
    const { movieSearch: movie } = useSelector(state => state, shallowEqual);
    const [display, setDisplay] = useState('none');
    const [description, setDescription] = useState({});

    const seeDetails = (info) => {
        setDescription(info);
        setDisplay('flex');
    }

    return (
        <div className="search">
            <div className="search__list list">
                {movie && movie.length !== 0 ? 
                        movie.map((item, index) => {
                            return <MovieItem
                                info={item}
                                key={index}
                                seeDetails={seeDetails}/>
                        }) :
                        <h2 className="home__title">
                            We have found nothing
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

export default Search;