import {NavLink, useParams} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import useBlogList from "../../hook/useBlogList";
import {useState} from "react";
import Loader from "../components/loader";

function BlogArticles() {
    const {data, total} = useBlogList(); // total, data comes from reducer
    console.log(data)
    const blogItemsList = data.map((item) => {
        return(
            <li key={item.id} className="flex gap-4">
                <img
                    className="w-20"
                    src={item.photo_url}
                    alt={item.title}
                />
                <div className="description">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </li>
        )
    })
    return(
        <>
            {blogItemsList}
        </>
    )
}
export default BlogArticles