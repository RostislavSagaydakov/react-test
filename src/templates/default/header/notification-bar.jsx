import React from 'react';

function NotificationBar() {
    const [notificationClose, setNotificationClose] = React.useState(false);
    const handleNotificationClose = (event) => {
        const parent = event.target.parentNode;
        setNotificationClose( (notificationClose) => !notificationClose)
        if ( notificationClose ) {
            parent.style.display = "block";
        } else {
            parent.style.display = "none";
        }
    }
    return (
        <>
            <div className="notification-bar">
                <p>
                    <span className="icon"></span>
                    30% off storewide — Limited time!
                    <a href="#">Shop Now</a>
                </p>
                <button className='notofication-close' onClick={handleNotificationClose}>X</button>
            </div>
        </>
    )
}

export default NotificationBar;