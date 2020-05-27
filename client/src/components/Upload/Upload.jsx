import React from 'react';

import Form from './Form';
import FileUpload from './FileUpload';
import Separator from './Separator';

const Upload = () => {
    return (
        <div className="upload">
            <Form />
            <Separator />
            <FileUpload />
        </div>
    )
}

export default Upload;