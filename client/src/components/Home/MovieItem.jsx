import React from 'react';

const MovieItem = ({info, showDeleteBox, seeDetails}) => {
    return (
        <div className="home__movie movie">
            <div className="movie__title">{info.title}</div>
            <div className="movie__icons">
                {showDeleteBox ? 
                <i className="fas fa-trash-alt fa--red"
                onClick={() => showDeleteBox(info)}/> :
                null
                }
                <i className="fas fa-eye fa--light" 
                onClick={() => seeDetails(info)}/>
            </div>
        </div>
    )
}

export default MovieItem;