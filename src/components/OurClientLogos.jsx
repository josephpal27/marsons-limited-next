import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clientData = [
    { id: 1, image: "/images/clients/1.png", },
    { id: 2, image: "/images/clients/2.png", },
    { id: 3, image: "/images/clients/3.png", },
    { id: 4, image: "/images/clients/4.png", },
    { id: 5, image: "/images/clients/5.webp", },
    { id: 6, image: "/images/clients/6.webp", },
    { id: 7, image: "/images/clients/7.png", },
    { id: 8, image: "/images/clients/8.png", },
    { id: 9, image: "/images/clients/9.png", },
    { id: 10, image: "/images/clients/10.png", },
    { id: 11, image: "/images/clients/11.png", },
    { id: 12, image: "/images/clients/12.jpeg", },
    { id: 13, image: "/images/clients/13.avif", },
    { id: 14, image: "/images/clients/14.jpeg", },
    { id: 15, image: "/images/clients/15.webp", },
    { id: 16, image: "/images/clients/16.png", },
    { id: 17, image: "/images/clients/17.png", },
    { id: 18, image: "/images/clients/18.png", },
    { id: 19, image: "/images/clients/19.png", },
    { id: 20, image: "/images/clients/10.png", },
]

const OurClientLogos = () => {
    return (
        <>
            <div className="
                our-client-logos
                bg-[#fff] flex justify-between items-center flex-wrap
                py-[1.2rem] sm:py-0
            ">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={6}
                    spaceBetween={5}
                    loop={true}
                    speed={6000}
                    allowTouchMove={false}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1200: { slidesPerView: 6 },
                    }}
                >

                    {
                        clientData.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className="flex items-center justify-center">
                                    <img 
                                        src={item.image} 
                                        alt={`Client ${item.id}`}
                                        className="
                                            w-full object-contain
                                            h-[80px] sm:h-[70px] lg:h-[80px] xl:h-[90px] 2xl:h-[100px]
                                        "
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}

export default OurClientLogos
