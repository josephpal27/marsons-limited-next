"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Reveal from "../Reveal";
import Fade from '../Fade';

const ehvHighlightData = [
    {
        id: 1,
        unit: "~200",
        desc: "EHV Units Commissioned",
    },
    {
        id: 2,
        unit: "1,600 kV",
        desc: "Haefely Trench Lab",
    },
    {
        id: 3,
        unit: "220 kV",
        desc: "Current EHV Capability",
    },
    {
        id: 4,
        unit: "400 kV",
        desc: "315 MVA — In Pipeline",
    },
]

const ehvData = [
    {
        id: 1,
        title: "ISO 9001:2008",
        desc: "Quality Management System — DNV Certified",
    },
    {
        id: 2,
        title: "NABL Accreditation",
        desc: "Electrical Testing — Power Transformers up to 200 MVA 220 kV",
    },
    {
        id: 3,
        title: "BIS Approval",
        desc: "Type tested energy efficient transformers — Level 1, 2, 3",
    },
    {
        id: 4,
        title: "CPRI Type Tested",
        desc: "Up to 160 MVA 220 kV Class & 17.6 MVA IDT Dynamic SC",
    },
    {
        id: 5,
        title: "CE Certified",
        desc: "Conformité Européenne — Export to Europe",
    },
    {
        id: 6,
        title: "IEEE C57 Series",
        desc: "US Standards — IEEE / ANSI / DOE / NERC / FERC",
    },
    {
        id: 7,
        title: "ISO 14001 & 45001",
        desc: "Environmental & Occupational Safety — DNV Certified",
    },
    {
        id: 8,
        title: "DSIR Certified R&D",
        desc: "Dept. of Scientific & Industrial Research, Govt. of India",
    },
]

const Manufacturer = () => {
    return (
        <>
            <div className="
                mt-[1.5rem] sm:mt-[3rem] lg:mt-[2.5rem] xl:mt-[3rem] 2xl:mt-[3.5rem]
                py-[1.5rem] sm:py-[1.5rem] lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[4rem]
                px-[1rem] sm:px-[5%] lg:px-[7%]
                flex justify-between items-center flex-wrap h-full
                bg-[url('/images/manufacturer-bg.avif')] bg-no-repeat bg-cover bg-bottom
            ">
                {/* Left */}
                <div className="w-full lg:w-[52%]">
                    <Reveal>
                        <h3 className="
                            text-[1.8rem] sm:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                            text-[#fff] font-[600] uppercase
                            mb-[0.8rem] sm:mb-[1rem] lg:mb-[0.6rem] xl:mb-[0.8rem] 2xl:mb-[1rem]
                        ">
                            Only EHV Manufacturer in Eastern India
                        </h3>
                    </Reveal>

                    <Fade>
                        <p className="
                            text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                            text-[#fff] font-[500]
                        ">
                            No other transformer manufacturer in Eastern India — including the North Eastern Region — produces Extra-High Voltage transformers. Nearly 200 EHV units commissioned across India's most demanding grid projects. 150 MVA 220 kV class impulse-tested at our own NABL accredited laboratory.
                        </p>
                    </Fade>

                    {/* Cards */}
                    <div className="
                        mt-[1.5rem] sm:mt-[3rem] lg:mt-[2.4rem] xl:mt-[2.7rem] 2xl:mt-[3rem]
                    ">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            centeredSlides={false}
                            loop={true}
                            grabCursor={true}
                            spaceBetween={10}
                            speed={1000}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                }
                            }}
                        >
                            {ehvData.map((item) => {
                                return (
                                    <SwiperSlide key={item.id} className="p-[5px]">
                                        <div className="
                                            bg-[#fff] shadow-[4px_4px_2.6px_#000] rounded-md w-full h-full
                                            p-[0.8rem] sm:p-[1.1rem] lg:p-[0.9rem] xl:p-[1rem] 2xl:p-[1.2rem]
                                        ">
                                            <span className="
                                                text-[#0a2946] font-[700] font-gilroy
                                                text-[1.3rem] sm:text-[1.8rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                                            ">
                                                {item.title}
                                            </span>
                                            <p className="
                                                text-[#000] font-[550]
                                                text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                                mt-[0.3rem]
                                            ">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>

                {/* Right */}
                <div className="
                    w-full lg:w-[42%]
                    flex justify-between flex-wrap mt-[1.2rem] sm:mt-0
                    gap-[0.7rem] sm:gap-[1.3rem] lg:gap-[1.1rem] xl:gap-[1.2rem] 2xl:gap-[1.3rem]
                    pb-[0.5rem] sm:pb-0
                ">
                    {ehvHighlightData.map((item) => {
                        return (
                            <div className="
                                    w-[48.1%] sm:w-full bg-[#fff] shadow-[5px_5px_2.6px_#e9202a] sm:shadow-[6px_6px_2.6px_#e9202a]  rounded-xl sm:rounded-md
                                    p-[0.5rem] sm:p-[1.1rem] lg:p-[1.4rem] xl:p-[1.5rem] 2xl:p-[1.6rem]
                                    flex justify-between items-center flex-wrap
                                " key={item.id}>
                                <div className="w-full sm:w-[40%]">
                                    <span className="
                                        text-[#0a2946] font-[700] font-gilroy
                                        text-[1.2rem] sm:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] 2xl:text-[2.3rem]
                                    ">
                                        {item.unit}
                                    </span>
                                </div>
                                <div className="w-full sm:w-[55%]">
                                    <p className="
                                        text-[#000] font-[550]
                                        text-[0.75rem] sm:text-[1rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                        mt-[0.3rem]
                                    ">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Manufacturer
