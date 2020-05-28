import React from 'react';

const MovieCard = ({display, info, setDisplay}) => {
    const closeCard = () => {
        setDisplay('none');
    }

    return (
        <div className="card" style={{display}}>
            <i className="fas fa-times card__close" onClick={closeCard}/>
            <h2 className="card__title">Movie description</h2>
            <p className="card__item">Title: {info.title}</p>
            <p className="card__item">Year: {info.releaseYear}</p>
            <p className="card__item">Format: {info.format}</p>
            <p className="card__item">
                Stars: {info.stars ? info.stars.join(', ') : ''}
            </p>
        </div>
    )
}

export default MovieCard;