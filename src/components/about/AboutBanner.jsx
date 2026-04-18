"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const AboutBanner = () => {
    return (
        <>
            <section className="
                w-full
                sm:h-screen
                relative
            ">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    slidesPerView={1}
                    centeredSlides={false}
                    loop={true}
                    speed={1000}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="!pb-[0.7rem] !sm:pb-[1rem]"
                >
                    <SwiperSlide>
                        <img src="/images/banners/about-banner-1.avif" alt="About Banner 1" loading="eager" className="
                            w-full
                            sm:h-[106vh]
                            drop-shadow-[0_7px_0px_#e9202a] sm:drop-shadow-[0_10px_0px_#e9202a]
                        "/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/banners/about-banner-2.avif" alt="About Banner 2" loading="eager" className="
                            w-full
                            sm:h-[106vh]
                            drop-shadow-[0_7px_0px_#e9202a] sm:drop-shadow-[0_10px_0px_#e9202a]
                        "/>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default AboutBanner
