import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

const Form = ({isDisabled, setIsDisabled}) => {
    const dispatch = useDispatch();
    const titleField = useRef();
    const yearField = useRef();
    const starsField = useRef();
    
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
        titleField.current.value = '';
        yearField.current.value = '';
        starsField.current.value = '';
        setForm(prevForm => ({ 
            title: '',
            releaseYear: '',
            format: prevForm.format,
            stars: '',
        }));
        console.log(form)
    }

    const addMovie = event => {
        event.preventDefault();
        setIsDisabled(true);
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
                        ref={titleField}
                        onChange={handleForm}/>
                </label>
                <label className="form__block form__block--text">
                    <span className="form__description">Year:</span>
                    <input type="text" className="form__field field"
                        placeholder="Enter movie release year"
                        name="releaseYear"
                        ref={yearField}
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
                        ref={starsField}
                        onChange={handleForm}/>
                </label>
                <div className="form__buttons">
                    <button
                        className="form__button button"
                        disabled={isDisabled}
                        onClick={addMovie}>
                        Add
                    </button>
                    <button
                        className="form__button button"
                        disabled={isDisabled}
                        onClick={clearForm}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;