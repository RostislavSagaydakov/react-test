import {NavLink, useParams} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import useBlogList from "../../hook/useBlogList";
import React, {useState} from "react";
import Loader from "../components/loader";
import Pagination from "../components/pagination";

function BlogArticles() {
    const [itemLimit, setItemLimit] = useState(12)
    const [skip, setSkip] = useState(0)
    const {data, total, isLoading} = useBlogList(itemLimit, skip, setSkip); // total, data comes from reducer
    const blogItemsList = data.map((item) => {
        return(
            <li key={item.id} className="product">
                <div className="product-image">
                    <LazyLoadImage
                        effect="blur"
                        alt={item.title}
                        src={item.photo_url}
                    />
                </div>
                <div className="product-info">
                    <NavLink to={"/blog/" + item.id}>{item.title}</NavLink>
                    <p>{item.description}</p>
                </div>
            </li>
        )
    })
    const handleItemsPerPage = (event)=> {
        setItemLimit(event.target.value)
        setSkip(skip)
    }
    return(
        <>
            <select name="sort"
                    id="per-page"
                    defaultValue={setItemLimit}
                    onChange={handleItemsPerPage}>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="33">33</option>
            </select>
            {isLoading && <Loader/>}
            {!isLoading && <>
                <ul className="grid grid-cols-4 gap-4 product-items">
                    {blogItemsList}
                </ul>
                <Pagination skip={skip} itemsPerPage={itemLimit} total={total} setSkip={setSkip}/>
            </>}
        </>
    )
}
export default BlogArticles