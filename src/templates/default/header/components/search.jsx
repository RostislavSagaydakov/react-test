import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faStar} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import useTopSearch from "../../../../hook/useTopSearch";
import {NavLink} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import AddToCart from "../../../components/add-to-cart";
import Loader from "../../../components/loader";

function TopSearch(props) {
    const topSearchRef = useRef(null)
    const [query, setQuery] = useState('')
    const [limit, setLimit] = useState(5)
    const { data, isLoading, total } =  useTopSearch(query, limit);
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                (topSearchRef.current && !topSearchRef.current.contains(event.target)) &&
                (props.searchToggleRef.current && props.searchToggleRef.current !== event.target)
            ) {
                props.openSearch(event);
            }
        }

        function handleKeyDown(event) {
            if (event.keyCode === 27) {
                props.openSearch(event);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [topSearchRef]);
    useEffect(() => {
        const debouncedSearch = setTimeout(() => {
            setQuery(query);
        }, 500);

        return () => {
            clearTimeout(debouncedSearch);
        };
    }, [query]);
    const getSearchValue = (event) => {
        setQuery(event.target.value);
    }
    const showResult = ()=> {
        if (query && data.length === 0 && !isLoading) return 'no result'
        return(
            <>
                {(data.length > 0 && !isLoading) && <ul className="search-list absolute top-full left-0 w-full bg-slate-200 p-4 flex flex-col gap-6">
                    {
                        data.map((product) => {
                            return (
                                <li key={product.title} className="grid grid-cols-4 grid-rows-2 gap-4">
                                    <div className="name col-span-3">{product.title}</div>
                                    <div className="price col-span-3 row-start-2">{product.price}</div>
                                    <div className="row-span-2 col-start-4">
                                        <LazyLoadImage effect="blur" src={product.thumbnail} alt={product.title}/>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>}
            </>
        )
    }
    return (
        <div className="search-bar" ref={topSearchRef}>
            <input type="text"
                   placeholder="Search..."
                   className="rounded-md border p-2 border-slate-800"
                   autoFocus={true}
                   value={query}
                   onChange={getSearchValue}
            />
            <button className="search-button p-1 m-0 border-0 absolute right-0 top-0 h-full w-10">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            {showResult()}
        </div>
    )
};
export default TopSearch;
