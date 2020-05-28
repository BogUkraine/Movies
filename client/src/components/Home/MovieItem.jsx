import React from 'react';

const MovieItem = ({info, deleteMovie, seeDetails}) => {
    return (
        <div className="home__movie movie">
            <div className="movie__title">{info.title}</div>
            <div className="movie__icons">
                <i className="fas fa-trash-alt fa--red"
                onClick={() => deleteMovie(info._id)}/>
                <i className="fas fa-eye fa--light" 
                onClick={() => seeDetails(info)}/>
            </div>
        </div>
    )
}

export default MovieItem;