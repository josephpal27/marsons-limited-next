
const ProductsBanner = ({title, range}) => {
    return (
        <>
            <section className="
                w-full
                lg:h-screen
                relative
            ">
                <img src="/images/banners/about-banner.avif" alt="About Banner" loading="eager" className="
                    w-full
                    lg:h-[106vh]
                    drop-shadow-[0_7px_0px_#e9202a] sm:drop-shadow-[0_10px_0px_#e9202a]
                " />
                <div className="
                    pb-[1rem] sm:pb-[3rem] lg:pb-[2.9rem] xl:pb-[3.2rem] 2xl:pb-[3.5rem]
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    absolute
                    top-0 w-full
                    h-full
                    flex flex-col justify-end
                ">
                    <h1 className="
                        text-[1.5rem] sm:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                        text-[#fff] font-[700] uppercase
                    ">
                        {title}
                    </h1>
                    <p className="
                        text-[0.75rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        text-[#fff] font-[600] [text-shadow:0_2px_6px_rgba(0,0,0,0.5)] 
                        mt-[0.3rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    ">
                        {range}
                    </p>
                </div>
            </section>
        </>
    )
}

export default ProductsBanner
