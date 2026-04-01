"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link"

const relatedProductsData = [
    {
        id: 1,
        image: "/images/product-slider/distribution.avif",
        title: "Distribution Transformers",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit adipisci nemo perspiciatis soluta.",
        url: "/products/distribution-transformers",
    },
    {
        id: 2,
        image: "/images/product-slider/power.avif",
        title: "Power Transformers",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit adipisci nemo perspiciatis soluta.",
        url: "/products/power-transformers",
    },
    {
        id: 3,
        image: "/images/product-slider/furnace-duty.avif",
        title: "Furnace Duty Transformers",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit adipisci nemo perspiciatis soluta.",
        url: "/products/furnace-duty-transformers",
    },
    {
        id: 4,
        image: "/images/product-slider/pad-mounted.avif",
        title: "Pad Mounted Transformers",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit adipisci nemo perspiciatis soluta.",
        url: "/products/pad-mounted-transformers",
    },
    {
        id: 5,
        image: "/images/product-slider/dry-type.avif",
        title: "Dry Type Transformers",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit adipisci nemo perspiciatis soluta.",
        url: "/products/dry-type-transformers",
    },
]

const RelatedProducts = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[0.5rem] sm:py-[2rem] lg:py-[2.4rem] xl:py-[2.7rem] 2xl:py-[3rem]
            ">
                <h4 className="
                        text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                        text-[#e9202a] font-[600]
                    ">
                    ADVANCED POWER SOLUTIONS
                </h4>
                <p className="
                    text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                    mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    font-[500] text-[#000]
                    w-full lg:w-[70%]
                ">
                    From standard distribution to specialized power transformers, explore our robust, precision-engineered solutions designed to meet your exact energy infrastructure requirements.
                </p>

                {/* Slider */}
                <div className="
                    mt-[2rem] sm:mt-[2rem] lg:mt-[2.5rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                ">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
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
                            0: {
                                slidesPerView: 1, // for mobile
                                spaceBetween: 12,
                            },
                            640: {
                                slidesPerView: 2, // tablet
                                spaceBetween: 20,
                            },
                            991: {
                                slidesPerView: 4, // tablet and up
                                spaceBetween: 10,
                            },
                        }}
                    >

                        {
                            relatedProductsData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="
                                        flex flex-col overflow-hidden group
                                        px-[0.7rem] sm:px-[1rem] lg:px-[0.7rem] xl:px-[0.8rem] 2xl:px-[1rem]
                                    ">
                                        <div className="
                                            shadow-[-4px_4px_7px_rgba(0,0,0,0.25)] 
                                            lg:shadow-[-3px_3px_6px_rgba(0,0,0,0.25)] 
                                            xl:shadow-[-4px_4px_7px_rgba(0,0,0,0.25)] 
                                            2xl:shadow-[-5px_5px_8px_rgba(0,0,0,0.25)] 
                                            overflow-hidden
                                        ">
                                            <img src={item.image} alt={item.title} loading="lazy" className="w-full group-hover:scale-[1.04] transition duration-300" />
                                        </div>
                                        <div className="
                                            mt-[1rem] sm:mt-[1.2rem] lg:mt-[1.1rem] xl:mt-[1.3rem] 2xl:mt-[1.5rem]
                                        ">
                                            <span className="
                                                text-[1.3rem] sm:text-[1.4rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                                text-[#e9202a] font-[600] leading-[1.3]
                                            ">
                                                {item.title}
                                            </span>
                                            {/* <p className="
                                                text-[0.9rem] sm:text-[1rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem]
                                                mt-[0.4rem] sm:mt-[0.5rem] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                                            ">
                                                {item.desc}
                                            </p> */}
                                            <Link href={item.url} className="
                                                text-[1rem] sm:text-[1.1rem] lg:text-[0.7rem] xl:text-[0.75rem] 2xl:text-[0.8rem]
                                                block bg-[#e9202a] hover:bg-[#d6151f] text-[#fff] w-max rounded-[3px] transition
                                                py-[0.25rem] 
                                                px-[0.8rem] sm:px-[1rem] lg:px-[0.8rem] xl:px-[0.9rem] 2xl:px-[1rem]
                                                mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                            ">
                                                Explore
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default RelatedProducts
