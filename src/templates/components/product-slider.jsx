import { Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import {useEffect, useState} from "react";

function ProductSlider() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const fetchData = async (imagesURL) => {
            const response = await fetch(imagesURL)
            const data = await response.json()
            setImages(data.photos)
        }
        const imagesURL = 'https://api.slingacademy.com/v1/sample-data/photos?offset=2&limit=8'
        fetchData(imagesURL)
    }, []);
    return(
        <section>
            <div className="heading">
                <h1>New <br/>Arrivals</h1>
                <a href="/shop">More Products</a>
            </div>
            <Swiper
                modules={[Scrollbar, A11y]}
                spaceBetween={1}
                slidesPerView={4}
                scrollbar={{ draggable: true }}
            >
                {images && images.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={image.url} alt=""/>
                            <div className="text">
                                {image.description}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    )
}
export default ProductSlider;