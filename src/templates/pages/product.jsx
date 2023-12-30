import {useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PageProduct() {
    let {productName} = useParams();
    const [productList, setProductList] = useState([]);
    const [images, setImages] = useState([]);
    useEffect(() => {
        const fetchData = async (productListUrl) => {
            const response = await fetch(productListUrl)
            const data = await response.json()
            setProductList(data.products)
        }
        const productListUrl = 'https://dummyjson.com/products'
        fetchData(productListUrl)
    }, []);
    const productInit = productList.filter(product => product.title.replace(/\s+/g, '-').toLowerCase() === productName);
    return(
        <>
            {productInit.map(product => {
                return (
                    <>
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
                                    {product.images.map((product, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <img src={product}/>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                            <div className="product-info w-7/12">
                                <h1>{product.title}</h1>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}
export default PageProduct