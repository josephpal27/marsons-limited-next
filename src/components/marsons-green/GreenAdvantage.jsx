import Reveal from "../Reveal"

const GreenAdvantage = () => {
    return (
        <>
            <section className="
                pt-[3rem] sm:pt-[4.5rem] lg:pt-[4.4rem] xl:pt-[4.7rem] 2xl:pt-[5rem]
                relative
            ">

                {/* Image */}
                <img src="/images/marsons-green/wtg/advantage-bg.png" alt="Advantage" loading="lazy" className="
                    w-full
                " />

                {/* Content */}
                <div className="
                    px-[1rem] sm:px-[5%] lg:px-[7%] 
                    py-[1.3rem] sm:py-[2.5rem] lg:py-[2.4rem] xl:py-[2.7rem] 2xl:py-[3rem]
                    relative sm:absolute top-0 left-0 w-full h-full flex flex-col justify-end
                ">
                    <Reveal>
                        <h4 className="
                            text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                            text-[#228f49] sm:text-[#fff] font-[600]
                        ">
                            Marsons Green Advantage
                        </h4>
                    </Reveal>
        
                    <p className="
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        mt-[0.8rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        font-[500] text-[#000] sm:text-[#fff] leading-[1.6] sm:leading-[1.7]
                    ">
                        Harnessing wind power requires more than a standard distribution transformer. Marsons WTG Transformers bridge the critical gap between your turbine's generation and grid injection. Covering India's full onshore wind fleet from 1 MVA to 6.3 MVA, our engineered solutions provide the steadfast backbone your renewable energy projects demand.
                    </p>
                </div>
            </section>
        </>
    )
}

export default GreenAdvantage
