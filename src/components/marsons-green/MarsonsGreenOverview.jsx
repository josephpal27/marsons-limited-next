
const MarsonsGreenOverview = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                mt-[2rem] sm:mt-[3rem] lg:mt-[6rem] xl:mt-[6.5rem] 2xl:mt-[7rem]
                flex justify-between flex-wrap
            ">
                {/* Image */}
                <div className="
                    w-[42%]
                ">
                    <img src="/images/marsons-green/wtg/wtg.png" alt="WTG Transformer" loading="lazy" className="
                        w-full
                    " />
                </div>

                {/* Content */}
                <div className="
                    w-[53%]
                ">
                    <p className="
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        font-[500] text-[#000] leading-[2]
                    ">
                        Every wind turbine generates power at low voltage — typically 690 V to 1,200 V — which must be stepped up to medium voltage for collection and grid injection. The transformer that does this job is not a standard distribution transformer. IEC 60076-16 exists precisely because conventional transformers fail prematurely in wind applications. Marsons WTG Transformers are designed, tested, and delivered to this standard — covering every onshore wind turbine class currently operating or planned in India.
                    </p>
                </div>
            </section>
        </>
    )
}

export default MarsonsGreenOverview
