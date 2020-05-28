import React, {useEffect, useState} from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import Form from './Form';
import FileUpload from './FileUpload';
import Separator from './Separator';

const Upload = () => {
    const [isFirst, setIsFirst] = useState(true);
    const { warning: alertMessage } = useSelector(state => state, shallowEqual);
    useEffect(() => {
        console.log('alert message',alertMessage);
        if(!isFirst) {
            if (alertMessage.error !== '') 
                NotificationManager.error(
                    alertMessage.error,
                    'Error',
                    3000
                );
            else
                NotificationManager.success(
                    alertMessage.success || 'Everything is ok',
                    'Success',
                    3000
                );
        }
        else {
            setIsFirst(false);
        }
    }, [alertMessage]);

    return (
        <>
            <div className="upload">
                <Form />
                <Separator />
                <FileUpload />
            </div>
            <NotificationContainer/>
        </>
    )
}

export default Upload;