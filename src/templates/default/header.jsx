import logo from '../../images/logo.png';
import NotificationBar from "./header/notification-bar";
import Navigation from "./header/navigation";
import HeaderActions from "./header/actions";

function BaseHeader() {
    return (
        <>
            <NotificationBar/>
            <header className="header">
                <img src={logo} className="logo" alt="logo" />
                <Navigation/>
                <HeaderActions/>
            </header>
        </>
    )
}

export default BaseHeader;