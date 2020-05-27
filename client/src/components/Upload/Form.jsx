import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Form = () => {
    const dispatch = useDispatch();
    const [ form, setForm ] = useState({
        title: '',
        releaseYear: '',
        format: 'VHS',
        stars: '',
    });

    const handleForm = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value 
        });
    }

    const clearForm = event => {
        event.preventDefault();
    }

    const addMovie = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_MOVIE_WITH_FORM',
            payload: form,
        });
    }

    return (
        <div className="upload__wrapper">
            <form className="upload__form form">
                <label className="form__block form__block--text">
                    <span className="form__description">Title:</span>
                    <input type="text" className="form__field field"
                        placeholder="Enter movie title"
                        name="title"
                        onChange={handleForm}/>
                </label>
                <label className="form__block form__block--text">
                    <span className="form__description">Year:</span>
                    <input type="text" className="form__field field"
                        placeholder="Enter movie release year"
                        name="releaseYear"
                        onChange={handleForm}/>
                </label>
                <section className="form__block">
                    <span className="form__description">Format:</span>
                    <label className="form__block--radio">
                        VHS
                        <input
                            type="radio"
                            name="format"
                            className="form__radio radio"
                            value="VHS"
                            onChange={handleForm}
                            defaultChecked
                        /> 
                        <span className="radiomark"></span>
                    </label>
                    <label className="form__block--radio">
                        DVD
                        <input
                            type="radio"
                            name="format"
                            className="form__radio radio"
                            value="DVD"
                            onChange={handleForm}
                        /> 
                        <span className="radiomark"></span>
                    </label>
                    <label className="form__block--radio">
                        Blu-Ray
                        <input
                            type="radio"
                            name="format"
                            className="form__radio radio"
                            value="Blu-Ray"
                            onChange={handleForm}
                        /> 
                        <span className="radiomark"></span>
                    </label>
                </section>
                <label className="form__block form__block--text">
                    <span className="form__description">Stars:</span>
                    <textarea type="text" className="form__field field field--area"
                        placeholder="Enter actors, separated by comma"
                        name="stars"
                        onChange={handleForm}/>
                </label>
                <div className="form__buttons">
                    <button className="form__button button" onClick={addMovie}>
                        Add
                    </button>
                    <button className="form__button button" onClick={clearForm}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;