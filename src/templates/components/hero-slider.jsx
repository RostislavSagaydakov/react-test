import { useState, useEffect } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function HeroSlider() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const fetchData = async (imagesURL) => {
            const response = await fetch(imagesURL)
            const data = await response.json()
            setImages(data.photos)
        }
        const imagesURL = 'https://api.slingacademy.com/v1/sample-data/photos?offset=1&limit=10'
        fetchData(imagesURL)
    }, []);
    return(
        <section className="hero-banner">
            <Swiper
                // lazy={true}
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {images && images.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img
                                src={image.url}
                                loading="lazy"
                                alt=""
                            />
                            <div className="text">
                                {image.description}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="heading">
                <h1>Simply Unique<span>/</span><br/>Simply Better<span>.</span></h1>
                <p>Elegant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
            </div>
        </section>
    )
}
export default HeroSlider;