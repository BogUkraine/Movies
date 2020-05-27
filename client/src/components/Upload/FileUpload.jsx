import React from 'react';

const FileUpload = () => {
    
    return (
        <div className="upload__file file">
            <div className="file__wrapper">
                <div className="file__group">
                    <label className="file__label">
                        <i className="fas fa-file-upload"></i>
                        <span className="file__title">Your file</span>
                        <input type="file" className="file__input"/>
                    </label>
                </div>
                <p className="file__description">
                    Add movies with txt file
                </p>
                <button
                    className="file__submit button">
                        Add
                </button>
            </div>
        </div>
    )
}

export default FileUpload;