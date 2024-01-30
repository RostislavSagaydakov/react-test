import {NavLink, useParams} from "react-router-dom";
import useProduct from "../../hook/useProduct";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AddToCart from "../components/add-to-cart";
import Breadcrumbs from "../components/beadcrumbs";
import Loader from "../components/loader";
import {LazyLoadImage} from "react-lazy-load-image-component";
import React, {useState} from "react";
import useAllProducts from "../../hook/useAllProducts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function PageProduct() {
    let {productId} = useParams();
    const [skip, setSkip] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(12)
    const {data: product, isLoading} = useProduct(productId)
    const {data, isLoading : relatedLoaded, error} = useAllProducts(product.category, itemsPerPage, skip, setSkip);
    const productInit = (
        <div className="product-container flex gap-4">
            <div className="product-image w-5/12">
                <Swiper
                    // lazy={true}
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {product.images && product.images.map((product, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <LazyLoadImage
                                    effect="blur"
                                    alt=""
                                    src={product}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className="product-info w-7/12">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <AddToCart element={product}/>
            </div>
        </div>
    )
    const products = data.products.map((product) => {
        if (product.id && (Number(productId) !== Number(product.id))) {
            return (
                <li key={product.title.replace(/\s+/g, '-').toLowerCase()} className="product" id={`product-${product.id}`}>
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
                </li>
            )
        }
    })
    return (
        <>
            <Breadcrumbs product={product} categoryName={product.category}/>
            {isLoading ? <Loader/> :  productInit}
            {relatedLoaded ? <Loader/> : <>
                <div className="heading">
                    <h2>Related products</h2>
                    <NavLink to={"/shop/" + product.category} className="link-more">More Products</NavLink>
                </div>
                <ul className="grid grid-cols-5 gap-4 product-items product-items__related">
                    {products}
                </ul>
            </>}
        </>
    )
}
export default PageProduct;