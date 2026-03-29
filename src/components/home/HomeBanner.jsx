
const HomeBanner = () => {
    return (
        <>
            <div className="
                w-full
                h-screen
                relative
            ">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/banners/home-banner.avif"
                    className="
                        w-full h-full object-cover
                    "
                >
                    <source src="/videos/home-banner.webm" type="video/webm" />
                </video>

                <div className="
                    py-[2.5rem] sm:py-[3rem] lg:py-[2.9rem] xl:py-[3.2rem] 2xl:py-[3.5rem]
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    absolute
                    top-0
                    w-full h-full
                    flex items-end
                ">
                    <h1 className="
                        text-[2rem] sm:text-[3rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                        text-[#fff] font-[700]
                    " data-aos="fade-up">
                        <span className="font-[200]">SETTING POWER</span> <br /> IN MOTION
                    </h1>
                </div>

            </div>
        </>
    )
}

export default HomeBanner
