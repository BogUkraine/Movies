import React from 'react';

const Notification = ({alertMessage}) => {
    return (
        <div className="notification" 
            style={{backgroundColor: alertMessage.success ? '#025709': '#dc0000'}}>
            <p className="notification__title">
                {alertMessage.success ?
                'Success' :
                'Error'}
            </p>
            <p className="notification__description">
                {alertMessage.success ?
                alertMessage.success || 'everything is ok' :
                alertMessage.error || 'something went wrong'}
            </p>
        </div>
    )
}

export default Notification;