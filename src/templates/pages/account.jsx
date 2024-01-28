import React from 'react';
import { useNavigate } from 'react-router-dom';
import withUserAccess from "../../hocs/withUserAccess";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/user/user";

const AccountPage = () => {
    const navigate = useNavigate();
    const {data} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleLogout = ()=> {
        dispatch(logout())
        navigate(`/`);
    }
    // console.log(data)
    return (
        <div>
            <button onClick={handleLogout}>LOGOUT</button>
            <img src={data.image} alt=""/>
            {data.firstName}
            {data.lastName}
        </div>
    );
};

export default withUserAccess(AccountPage);
