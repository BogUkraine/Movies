import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

const FileUpload = ({isDisabled, setIsDisabled}) => {
    const dispatch = useDispatch();
    const fileInput = useRef();
    let formData = new FormData();

    const uploadFile = () => {
        formData.append('filedata', fileInput.current.files[0]);
        dispatch({type: 'ADD_MOVIE_WITH_FILE', payload: formData});
        setIsDisabled(true)
    };

    return (
        <div className="upload__file file">
            <div className="file__wrapper">
                <div className="file__group">
                    <label className="file__label">
                        <i className="fas fa-file-upload"></i>
                        <span className="file__title">Your file</span>
                        <input 
                            type="file" 
                            className="file__input" 
                            ref={fileInput}
                            accept=".txt"/>
                    </label>
                </div>
                <p className="file__description">
                    Add movies with txt file
                </p>
                <button
                    className="file__submit button"
                    disabled={isDisabled}
                    onClick={uploadFile}>
                        Add
                </button>
            </div>
        </div>
    )
}

export default FileUpload;