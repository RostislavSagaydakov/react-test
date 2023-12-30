import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function TopSearch() {
    return (
        <div className="search-bar">
            <input type="text"
                   placeholder="Search..."
                   className="rounded-md border p-2 border-slate-800"
                   autoFocus={true}
            />
            <button className="search-button p-3">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    )
}
export default TopSearch;