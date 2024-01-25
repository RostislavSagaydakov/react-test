import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function withUserAccess(Component) {
    function WrappedComponent() {
        const navigate = useNavigate();
        const userSelector = useSelector(state=> state.user)
        console.log(userSelector.data)
        if (userSelector.data.id === undefined) {
            navigate("/access-denied");
            return null;
        }
        return (
            <Component/>
        )
    }
    return WrappedComponent;
}