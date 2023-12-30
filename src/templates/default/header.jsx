import logo from '../../images/logo.png';
import NotificationBar from "./header/notification-bar";
import Navigation from "./header/navigation";
import HeaderActions from "./header/actions";
import {NavLink} from "react-router-dom";

function BaseHeader() {
    return (
        <>
            <NotificationBar/>
            <header className="header container mx-auto py-4 items-center justify-between">
                <NavLink to="/">
                    <img src={logo} className="logo" alt="logo" />
                </NavLink>
                <Navigation/>
                <HeaderActions/>
            </header>
        </>
    )
}

export default BaseHeader;