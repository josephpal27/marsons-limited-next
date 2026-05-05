"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Reveal from "../Reveal";

const TheProblems = ({problems}) => {
    return (
        <>
            <section className="
                pt-[2.3rem] sm:pt-[3.5rem] lg:pt-[3.4rem] xl:pt-[3.7rem] 2xl:pt-[4rem]
                mb-[1rem] sm:mb-[1.5rem] lg:mb-[1.4rem] xl:mb-[1.7rem] 2xl:mb-[2rem]
            ">
                <Reveal>
                    <h2 className="
                        pl-[1rem] sm:pl-[5%] lg:pl-[7%]
                        text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                        text-[#228f49] font-[600]
                    " dangerouslySetInnerHTML={{ __html: problems.heading }} />
                </Reveal>

                {/* Slider */}
                <div className="
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    bg-[#f0f0f0] relative
                    mt-[1.5rem] sm:mt-[2rem] lg:mt-[2.5rem] xl:mt-[2.7rem] 2xl:mt-[3rem]
                ">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={1}
                        centeredSlides={false}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={10}
                        speed={2000}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                    >

                        {
                            problems.items.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="
                                        overflow-hidden
                                        py-[1rem] sm:py-[1rem] lg:py-[1.5rem] xl:py-[1.7rem] 2xl:py-[2rem]
                                    ">
                                        <div className="
                                            flex justify-between items-center flex-wrap
                                        ">
                                            {/* Image */}
                                            <div className="w-full sm:w-[40%]">
                                                <img src={item.image} alt={item.title} loading="lazy" className="
                                                    w-full
                                                    shadow-[4px_4px_7px_rgba(0,0,0,0.25)] 
                                                    lg:shadow-[3px_3px_6px_rgba(0,0,0,0.25)] 
                                                    xl:shadow-[4px_4px_7px_rgba(0,0,0,0.25)] 
                                                    2xl:shadow-[5px_5px_8px_rgba(0,0,0,0.25)]
                                                " />
                                            </div>

                                            {/* Content */}
                                            <div className="w-full sm:w-[55%] mt-[1.5rem] sm:mt-0">
                                                <span className="
                                                    text-[1.2rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                                                    text-[#0a2946] font-[600] leading-[1.1] font-gilroy
                                                " dangerouslySetInnerHTML={{ __html: item.title }} />
            
                                                <p className="
                                                    text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                                    mt-[0.5rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                                                    font-[500] text-[#000] leading-[1.5] sm:leading-[1.7]
                                                ">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                    {/* Prev Btn */}
                    <button className="
                        custom-prev absolute left-[2%] top-1/2 -translate-y-1/2 z-10 text-[#707070] hover:text-[#0a2946]
                        text-[2.5rem] hidden sm:block
                    ">
                        <MdKeyboardArrowLeft />
                    </button>

                    {/* Next Btn */}
                    <button className="
                        custom-next absolute right-[2%] top-1/2 -translate-y-1/2 z-10 text-[#707070] hover:text-[#0a2946]
                        text-[2.5rem] hidden sm:block
                    ">
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </section>
        </>
    )
}

export default TheProblems
