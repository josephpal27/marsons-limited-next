
let ourGoalsData = [
    {
        id: 1,
        Image: "/images/icons/vision.avif",
        title: "VISION",
        desc: "To establish Marsons as a global brand and one of the most trusted names in transformers.",
    },
    {
        id: 2,
        Image: "/images/icons/mission.avif",
        title: "MISSION",
        desc: "Through quality assurance and stringent evaluations, provide customers with quality products at affordable prices and consistency in service. Develop and maintain supplier–customer relationships based on open communication, mutual trust, and respect.",
    },
]


const OurGoals = () => {
    return (
        <>
            <div className="
                py-[1.5rem] sm:py-[5rem] lg:py-[5rem] xl:py-[5.5rem] 2xl:py-[6rem]
                px-[1rem] sm:px-[5%] lg:px-[7%]
                flex justify-between items-center flex-wrap bg-[url('/images/mission-vision-bg.avif')] bg-no-repeat bg-cover bg-center relative
                h-full
            ">
                {/* White Overlay */}
                <div className="absolute inset-0 bg-[#ffffffe4]"></div>

                {/* Left */}
                <div className="
                    sm:w-[35%]
                    z-10
                ">
                    <h3 className="
                        text-[1.8rem] sm:text-[3rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                        text-[#000] font-[600]
                        mb-[1rem] sm:mb-[2rem] lg:mb-[1.6rem] xl:mb-[1.8rem] 2xl:mb-[2rem]
                    ">
                        OUR <span className="text-[#e9202a]">GOALS</span>
                    </h3>
                    <p className="
                        text-[1rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        text-[#000] font-[500]
                    ">
                        To manufacture and supply trouble-free products in conformance to specification for the satisfaction of our customers. We commit to increase productivity and continuously improve systems — ensuring timely delivery at competitive prices, in compliance with health, safety, and environmental requirements.
                    </p>
                </div>
                {/* Right */}
                <div className="
                    sm:w-[63%]
                    flex justify-between flex-wrap z-10
                    mt-[2.5rem] sm:mt-0
                ">
                    {
                        ourGoalsData.map((item, index) => {
                            return (
                                <div className="
                                    sm:w-[47%] group
                                    p-[1rem] sm:p-[2rem] lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-[2rem]
                                    bg-[#0a2946] text-[#fff] aspect-square relative 
                                    mb-[3rem] sm:mb-0 last:mb-[1.4rem] sm:last:mb-0
                                " key={index}>
                                    <span className="
                                        text-[1.6rem] sm:text-[2rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]
                                        font-[550]
                                    ">
                                        {item.title}
                                    </span>
                                    <p className="
                                        text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                        mt-[0.5rem] sm:mt-[1.4rem] lg:mt-[1.2rem] xl:mt-[1.3rem] 2xl:mt-[1.4rem]
                                    ">
                                        {item.desc}
                                    </p>
                                    <div className="
                                        w-[70px] sm:w-[80px] lg:w-[65px] xl:w-[73px] 2xl:w-[80px]
                                        h-[70px] sm:h-[80px] lg:h-[65px] xl:h-[73px] 2xl:h-[80px]
                                        position-absolute bg-[#e9202a] rounded-[5px]
                                        bottom-[-11px] sm:bottom-[-15px] lg:bottom-[-11px] xl:bottom-[-13px] 2xl:bottom-[-15px]
                                        right-[-11px] sm:right-[-15px] lg:right-[-11px] xl:right-[-13px] 2xl:right-[-15px]
                                        p-[0.8rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                                    ">
                                        <img src={item.Image} alt={item.title} loading="lazy" className="
                                            w-full group-hover:scale-[1.2] transition-all duration-300
                                        "/>
                                    </div>
                                    <div className="
                                        w-[70%]
                                        h-[80%]
                                        position-absolute bg-[#e9202a] -z-10
                                        top-[-10px] sm:top-[-10px] lg:top-[-8px] xl:top-[-9px] 2xl:top-[-10px]
                                        left-[-10px] sm:left-[-10px] lg:left-[-8px] xl:left-[-9px] 2xl:left-[-10px]
                                        rounded-tr-[20px]
                                        rounded-bl-[20px]
                                        group-hover:scale-[1.03] transition-all duration-300
                                    "></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default OurGoals