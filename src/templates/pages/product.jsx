import {useParams} from "react-router-dom";
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
import React from "react";

function PageProduct() {
    let {productId} = useParams();
    const {data: product, isLoading} = useProduct(productId)
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
    return (
        <>
            <Breadcrumbs product={product} categoryName={product.category}/>
            {isLoading ? <Loader/> :  productInit}
        </>
    )
}
export default PageProduct;