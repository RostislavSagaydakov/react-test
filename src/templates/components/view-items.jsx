import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faGrip } from '@fortawesome/free-solid-svg-icons'
import React from "react";

export default function ViewItems(props){
    const handleSwitchView = (view)=> {
        props.setViewMode(view);
        localStorage.setItem("viewMode", view)
    }
    return(
        <>
            <div className="view-mode">
                <button className={localStorage.getItem('viewMode') === 'list' ? 'active' : ''} onClick={()=>{handleSwitchView('list')}}><FontAwesomeIcon icon={faList} /></button>
                <button className={localStorage.getItem('viewMode') === 'grid' ? 'active' : ''} onClick={()=>{handleSwitchView('grid')}}><FontAwesomeIcon icon={faGrip} /></button>
            </div>
        </>
    )
}