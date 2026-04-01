
const Transformers = ({data}) => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                mt-[2rem] sm:mt-[3rem] lg:mt-[6rem] xl:mt-[6.5rem] 2xl:mt-[7rem]
            ">
                <h2 className="
                    text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                    text-[#e9202a] font-[600]
                ">
                    EXPLORE OUR RANGE
                </h2>
                <p className="
                    text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                    mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    font-[500] text-[#000]
                ">
                    {data?.desc}
                </p>

                {/* Row */}
                <div className="
                    mt-[2rem] sm:mt-[2rem] lg:mt-[2.5rem] xl:mt-[2.7rem] 2xl:mt-[3rem]
                    flex flex-wrap justify-center
                    gap-[0] sm:gap-[4%] lg:gap-[2.7%]
                ">
                    {
                        data?.transformerImages?.map((item, index) => {
                            return (
                                <div className="
                                    w-full sm:w-[48%] lg:w-[31.5%] relative group overflow-hidden
                                    mb-[1.2rem] sm:mb-[1.7rem] lg:mb-[1.8rem] xl:mb-[2.1rem] 2xl:mb-[2.3rem]
                                " key={index}>
                                    <img
                                        src={item.image}
                                        alt="Transformers"
                                        loading="lazy"
                                        className="
                                            w-full grayscale-[100%] group-hover:grayscale-[0%] transition-all duration-300
                                            contrast-[150%]
                                        "
                                    />
                                    <div className="
                                        absolute top-0 w-full h-full group-hover:translate-y-full transition-all duration-500
                                        flex flex-col justify-end
                                        p-[1rem] sm:p-[1.2rem] lg:p-[1.3rem] xl:p-[1.4rem] 2xl:p-[1.5rem]
                                        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,rgba(0,0,0,1)_100%)] text-[#fff]
                                    ">
                                        {/* <span className="
                                            text-[1.6rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]
                                            font-[550]
                                        ">
                                            {item.title}
                                        </span> */}
                                        <p className="
                                            text-[0.9rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                            mt-[0.5rem]
                                        ">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Transformers