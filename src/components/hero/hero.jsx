"use client";
import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HomeData from "@/data/home.json";

function Hero() {    
    const swiperOption = {
        modules: [Pagination],
        loop: true,
        speed: 750,
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: { clickable: true },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    };
    return (
        <Swiper {...swiperOption} className="hero-slider"
        >
            {HomeData.slider.map((data, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="position-relative">
                            <div className="position-absolute start-0 top-0 end-0 bottom-0 z-n1">
                                <img
                                    className="w-100 h-100 object-fit-cover"
                                    src={data.image}
                                    alt="hero-bg"
                                />
                            </div>
                            <div className="container">
                                <div className="row justify-content-center pt-80 pb-120 py-lg-200 text-center text-uppercase">
                                    <div className="col-md-8 col-lg-6">
                                        <div className="hero-thumb bg-white py-32 px-20 border border-10 border-white-50">
                                            <h6 className="fs-20 fs-lg-28 fw-bold mt-20 mb-10 ls-4.8">
                                                {data.title}
                                            </h6>
                                            <p className="fs-13 fs-lg-14 ls-4 text-black-200">
                                                {data.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
           
        </Swiper>
    );
}

export default Hero;
