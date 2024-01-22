import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
    const user = JSON.parse(window.localStorage.getItem("currentUser"))
    const navigate = useNavigate();
    const logout = ()=> {
        localStorage.removeItem("currentUser");
        navigate(`/`);
    }
    return (
        <div>
            <button onClick={logout}>LOGOUT</button>
            <img src={user.image} alt=""/>
            {user.firstName}
            {user.lastName}
        </div>
    );
};

export default AccountPage;
