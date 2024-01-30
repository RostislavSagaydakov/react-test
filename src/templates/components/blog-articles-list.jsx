import {NavLink} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import React, {useEffect, useState} from "react";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useBlogList from "../../hook/useBlogList";
import Loader from "./loader";

function BlogArticlesList(){
    const [itemLimit, setItemLimit] = useState()
    const [skip, setSkip] = useState()
    const {data, total,isLoading } = useBlogList(itemLimit, skip); // total, data comes from reducer
    useEffect(() => {
        const itemCount = Math.floor(Math.random() * (20 - 5 + 1) + 5); // set random items count
        setItemLimit(itemCount);
        const itemSkip = Math.floor(Math.random() * (total - itemCount + 1) + itemCount); // set random start position
        setSkip(itemSkip);
    }, []);
    return(
        <>
            {isLoading ? <Loader/> : <>
                <div className="heading">
                    <h1>Articles</h1>
                    <NavLink to="/blog/" className="link-more">More Articles</NavLink>
                </div>
                <Swiper
                    // lazy={true}
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    className="mb-10"
                >
                    {data && data.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
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
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </> }
        </>
    )
}
export default BlogArticlesList