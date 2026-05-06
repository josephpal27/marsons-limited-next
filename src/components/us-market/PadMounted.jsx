
const PadMounted = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                pt-[2.3rem] sm:pt-[3.5rem] lg:pt-[3.9rem] xl:pt-[4.2rem] 2xl:pt-[4.5rem]
                pb-[1rem] sm:pb-[1.5rem] lg:pb-[1.4rem] xl:pb-[1.7rem] 2xl:pb-[2rem]
                flex justify-between flex-wrap flex-col-reverse sm:flex-row
                bg-[url('/images/us-market/pad-mounted-bg.png')] bg-cover bg-no-repeat bg-center
            ">
                {/* Content */}
                <div className="
                    w-full sm:w-[50%]
                    mt-[1.5rem] sm:mt-0
                ">
                    <h2 className="
                        text-[1.5rem] sm:text-[2.2rem] lg:text-[2.2rem] xl:text-[2.5rem] 2xl:text-[2.8rem]
                        text-[#0a2946] font-[600]
                    ">
                        PAD-MOUNTED DISTRIBUTION TRANSFORMERS (standard US distribution method)
                    </h2>
                    <p className="
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        mt-[0.8rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        font-[500] text-[#000] leading-[1.6] sm:leading-[1.7]
                    ">
                        India's electrified railway network runs at 25 kV AC, 50 Hz from the overhead catenary. The locomotive transformer steps this down to 1,269 V to supply the three-phase regenerative drive system, which controls the traction motors. When the locomotive brakes, the drive returns electrical energy back through the transformer to the overhead line recovering energy that would otherwise be wasted as heat.
                    </p>
                </div>

                {/* Image */}
                <div className="
                    w-full sm:w-[44%]
                ">
                    <img src="/images/us-market/pad-mounted.png" alt="PAD Mounted" loading="lazy" className="w-full" />
                </div>

            </section>
        </>
    )
}

export default PadMounted
