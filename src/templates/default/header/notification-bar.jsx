import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPercentage, faTimes, faArrowRightLong} from '@fortawesome/free-solid-svg-icons'

function NotificationBar() {
    const [notificationClose, setNotificationClose] = React.useState(true);
    const handleNotificationClose = (event) => {
        setNotificationClose( (notificationClose) => !notificationClose)
    }
    return (
        <>
            {   notificationClose &&
                <div className="notification-bar bg-gray-200 flex items-center justify-center py-2 px-10 gap-x-2 relative">
                    <p>
                        <FontAwesomeIcon icon={faPercentage} className="mr-2"/>
                        30% off storewide — Limited time!
                        <a href="#" className="hover:no-underline underline text-blue-600 ml-2">
                            Shop&nbsp;Now
                            <FontAwesomeIcon icon={faArrowRightLong} className="ml-2"/>
                        </a>
                    </p>
                    <span className="p-1 block cursor-pointer absolute right-3 top-1 hover:text-blue-600 hover:scale-125 ease-out duration-300">
                        <FontAwesomeIcon icon={faTimes} onClick={handleNotificationClose}/>
                    </span>
                </div>
            }

        </>
    )
}

export default NotificationBar;