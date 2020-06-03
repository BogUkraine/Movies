import React, {useEffect, useState} from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import Form from './Form';
import FileUpload from './FileUpload';
import Separator from './Separator';
import Notificaion from './Notification';

const Upload = () => {
    const [isFirst, setIsFirst] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const { warning: alertMessage } = useSelector(state => state, shallowEqual);

    useEffect(() => {
        let timeout;
        if(!isFirst) {
            setIsNotification(true);
            if (alertMessage.error !== '') 
                timeout = setTimeout(() => {
                    setIsNotification(false);
                }, 5000)
            else
                timeout = setTimeout(() => {
                    setIsNotification(false);
                }, 5000)
            setIsDisabled(false);
        }
        else {
            setIsFirst(false);
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [alertMessage]);

    return (
        <>
            <div className="upload">
                <Form isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
                <Separator />
                <FileUpload isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
            </div>
            {isNotification ? <Notificaion alertMessage={alertMessage}/> : null}
        </>
    )
}

export default Upload;