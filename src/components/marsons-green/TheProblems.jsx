"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Reveal from "../Reveal";

const theProblemsData = [
    {
        id: 1,
        title: "Thermal Cycling Fatigue",
        desc: "Each turbine start/stop cycle creates rapid heating and cooling. Standard transformers are rated for continuous duty only. Marsons WTG units use enhanced insulation materials and oil formulations engineered for cyclic thermal stress.",
        image: "/images/marsons-green/wtg/slider/1.png",
    },
    {
        id: 2,
        title: "VCB Switching Surges",
        desc: "Vacuum Circuit Breakers generate high di/dt transients when disconnecting turbines. Marsons WTG designs include reinforced BIL and RC surge suppression capability.",
        image: "/images/marsons-green/wtg/slider/2.png",
    },
    {
        id: 3,
        title: "Harmonic Currents from VSDs",
        desc: "Variable Speed Drives generate 5th, 7th, 11th, 13th order harmonic currents. Marsons WTG windings are K-factor derated to handle harmonic heating without insulation degradation.",
        image: "/images/marsons-green/wtg/slider/3.png",
    },
    {
        id: 4,
        title: "Loop-Feed Ring Main Faults",
        desc: "Wind farm collector networks use daisy-chain ring-main topology. Marsons WTG units are rated and configured for loop-feed ring-bus operation with HV loop-feed bushings.",
        image: "/images/marsons-green/wtg/slider/4.png",
    },
]

const TheProblems = () => {
    return (
        <>
            <section className="
                pt-[2.3rem] sm:pt-[3.5rem] lg:pt-[3.4rem] xl:pt-[3.7rem] 2xl:pt-[4rem]
                mb-[1.3rem] sm:mb-[1.5rem] lg:mb-[1.4rem] xl:mb-[1.7rem] 2xl:mb-[2rem]
            ">
                <Reveal>
                    <h2 className="
                        pl-[1rem] sm:pl-[5%] lg:pl-[7%]
                        text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                        text-[#228f49] font-[600]
                    ">
                        WHY STANDARD <br /> TRANSFORMERS FAIL IN WIND
                    </h2>
                </Reveal>

                {/* Slider */}
                <div className="
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    bg-[#f0f0f0] relative
                    mt-[2rem] sm:mt-[2rem] lg:mt-[2.5rem] xl:mt-[2.7rem] 2xl:mt-[3rem]
                ">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={1}
                        centeredSlides={false}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={0}
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
                            theProblemsData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="
                                        overflow-hidden
                                        py-[1rem] sm:py-[1rem] lg:py-[1.5rem] xl:py-[1.7rem] 2xl:py-[2rem]
                                    ">
                                        <div className="
                                            flex justify-between items-center flex-wrap
                                        ">
                                            {/* Image */}
                                            <div className="w-[40%]">
                                                <img src={item.image} alt={item.title} loading="lazy" className="
                                                    w-full
                                                    shadow-[4px_4px_7px_rgba(0,0,0,0.25)] 
                                                    lg:shadow-[3px_3px_6px_rgba(0,0,0,0.25)] 
                                                    xl:shadow-[4px_4px_7px_rgba(0,0,0,0.25)] 
                                                    2xl:shadow-[5px_5px_8px_rgba(0,0,0,0.25)]
                                                " />
                                            </div>

                                            {/* Content */}
                                            <div className="w-[55%]">
                                                <span className="
                                                    text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                                                    text-[#0a2946] font-[600]
                                                ">
                                                    {item.title}
                                                </span>
                                                <p className="
                                                    text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                                    mt-[1.2rem] sm:mt-[1.5rem] lg:mt-[1.6rem] xl:mt-[1.7rem] 2xl:mt-[1.8rem]
                                                    font-[500] text-[#000] leading-[1.7]
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
                        text-[2.5rem]
                    ">
                        <MdKeyboardArrowLeft />
                    </button>

                    {/* Next Btn */}
                    <button className="
                        custom-next absolute right-[2%] top-1/2 -translate-y-1/2 z-10 text-[#707070] hover:text-[#0a2946]
                        text-[2.5rem]
                    ">
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </section>
        </>
    )
}

export default TheProblems
