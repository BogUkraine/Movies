import React, {useEffect, useState} from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import Form from './Form';
import FileUpload from './FileUpload';
import Separator from './Separator';

const Upload = () => {
    const [isFirst, setIsFirst] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const { warning: alertMessage } = useSelector(state => state, shallowEqual);

    useEffect(() => {
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
            setIsDisabled(false);
        }
        else {
            setIsFirst(false);
        }
    }, [alertMessage]);

    return (
        <>
            <div className="upload">
                <Form isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
                <Separator />
                <FileUpload isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
            </div>
            <NotificationContainer/>
        </>
    )
}

export default Upload;