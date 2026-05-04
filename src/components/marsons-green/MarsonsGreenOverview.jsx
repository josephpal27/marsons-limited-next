
const MarsonsGreenOverview = ({overview, title}) => {
    return (
        <>
            <section className="
                px-[0] sm:px-[5%] lg:px-[7%]
                mt-[2rem] sm:mt-[3rem] lg:mt-[6rem] xl:mt-[6.5rem] 2xl:mt-[7rem]
                flex justify-between flex-wrap
            ">
                {/* Image */}
                <div className="
                    w-full sm:w-[42%]
                ">
                    <img src={overview.image} alt={title} loading="lazy" className="
                        w-full
                    " />
                </div>

                {/* Content */}
                <div className="
                    w-full sm:w-[53%]
                    px-[1rem] sm:px-0
                    mt-[0.5rem] sm:mt-0
                ">
                    <p className="
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        font-[500] text-[#000] leading-[1.5] sm:leading-[2]
                    ">
                        {overview.desc}
                    </p>
                </div>
            </section>
        </>
    )
}

export default MarsonsGreenOverview
