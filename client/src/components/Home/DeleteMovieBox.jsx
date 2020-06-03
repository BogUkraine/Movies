import React from 'react';

const DeleteMovieBox = ({setVisibleDeleteBox, deleteMovie, deleteMovieInfo}) => {
    return(
        <div className="delete-box">
            <p className="delete-box__title">Delete movie {deleteMovieInfo?.title}?</p>
            <button className="delete-box__button button"
                onClick={deleteMovie}>
                Delete
            </button>
            <button className="delete-box__button button"
                onClick={() => setVisibleDeleteBox(false)}>
                Cancel
            </button>
        </div>
    )
}

export default DeleteMovieBox;