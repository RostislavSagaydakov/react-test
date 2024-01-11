import {useParams} from "react-router-dom";
import useProduct from "../../hook/useProduct";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PageProduct() {
    let {productId} = useParams();
    const {data: product, isLoading} = useProduct(productId)
    console.log(product)
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
    )
    return (
        <>
            {isLoading ? 'loading' :  productInit}
        </>
    )
}
export default PageProduct;