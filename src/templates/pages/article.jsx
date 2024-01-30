import {useParams} from "react-router-dom";
import blogPostItem from "../../hook/useBlogPost";
import Breadcrumbs from "../components/beadcrumbs";
import Loader from "../components/loader";
import React, {useEffect, useRef} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function BlogArticle() {
    let {blogId} = useParams();
    const textRef = useRef();
    const {data, isLoading} = blogPostItem(blogId)
    useEffect(()=> {
        if(data.content_html) {
            textRef.current.innerHTML = data.content_html
        }
    },[data])
    const blogPostInit = (
        <div className="product-container flex gap-4 flex-col">
            <LazyLoadImage
                effect="blur"
                src={data.photo_url}/>
            <h1>{data.title}</h1>
            <p className="sub-title">{data.description}</p>
            <div className="text" ref={textRef}/>
        </div>
    )
    console.log(isLoading)
    return (
        <>
            {/*<Breadcrumbs product={data.blog.title} categoryName={'blog'}/>*/}
            {isLoading ? <Loader/> : blogPostInit}
        </>
    )
}