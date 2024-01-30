import { Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import useAllProducts from "../../hook/useAllProducts";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import AddToCart from "./add-to-cart";
import Loader from "./loader";

function ProductSlider() {

    const [itemsPerPage, setItemsPerPage] = useState(12)
    const [skip, setSkip] = useState(0)
    const {categoryName} = useParams();
    const {data, isLoading} = useAllProducts(categoryName, itemsPerPage, skip);
    useEffect(() => {
        const itemCount = Math.floor(Math.random() * (20 - 5 + 1) + 5); // set random items count
        setItemsPerPage(itemCount);
        const itemSkip = Math.floor(Math.random() * (data.total - itemCount + 1) + itemCount); // set random start position
        setSkip(itemSkip);
    }, []);
    return(
        <section>
            {isLoading ? <Loader/> : <>
                <div className="heading">
                    <h1>New <br/>Arrivals</h1>
                    <NavLink to="/shop/" className="link-more">More Products</NavLink>
                </div>
                <Swiper
                    modules={[Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={4}
                    scrollbar={{ draggable: true }}
                    className="product-items"
                >
                    {data && data.products.map((product) => {
                        return (
                            <SwiperSlide key={product.title.replace(/\s+/g, '-').toLowerCase()} className="product" id={`product-${product.id}`}>
                                <div className="product-image">
                                    <NavLink to={"/shop/" + product.category + "/" + product.id}>
                                        <LazyLoadImage
                                            effect="blur"
                                            alt={product.brand}
                                            src={product.thumbnail}
                                        />
                                        <span className="product-brand">{product.brand}</span>
                                        {product.discountPercentage && <span className='product-discount'>-{product.discountPercentage}%</span>}
                                    </NavLink>
                                </div>
                                <div className="product-info">
                                    <div className="product-info_holder">
                                        <div className="product-rating">
                                            {product.rating}
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="product-name">
                                            <NavLink to={"/shop/" + product.category + "/" + product.title.replace(/\s+/g, '-').toLowerCase()}>
                                                {product.title}
                                            </NavLink>
                                        </div>
                                        <div className="product-price">
                                            <span className="product-price">${product.price}</span>
                                        </div>
                                    </div>
                                    <AddToCart element={product}/>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </>}

        </section>
    )
}
export default ProductSlider;