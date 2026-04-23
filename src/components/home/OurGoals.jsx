import Reveal from "../Reveal";
import Fade from "../Fade";

let ourGoalsData = [
    {
        id: 1,
        image: "/images/vision.avif",
        icon: "/images/icons/vision.avif",
        title: "VISION",
        desc: "To establish Marsons as a global brand and one of the most trusted names in transformers.",
    },
    {
        id: 2,
        image: "/images/mission.avif",
        icon: "/images/icons/mission.avif",
        title: "MISSION",
        desc: "Through quality assurance and stringent evaluations, provide customers with quality products at affordable prices and consistency in service. Develop and maintain supplier–customer relationships based on open communication, mutual trust, and respect.",
    },
]


const OurGoals = () => {
    return (
        <>
            <section className="
                py-[1.7rem] sm:py-[3rem] lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[4rem]
                px-[1rem] sm:px-[5%] lg:px-[7%]
                bg-[url('/images/mission-vision-bg.avif')] bg-no-repeat bg-cover bg-bottom sm:bg-center z-[-10]
            ">

                {/* Top */}
                <div>
                    <Reveal>
                        <h3 className="
                            text-[1.8rem] sm:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                            text-[#000] font-[600]
                            mb-[1rem] sm:mb-[1.1rem] lg:mb-[1.3rem] xl:mb-[1.4rem] 2xl:mb-[1.5rem]
                        ">
                            OUR <br /> <span className="text-[#e9202a]">GOALS</span>
                        </h3>
                    </Reveal>

                    <Fade>
                        <p className="
                            text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                            text-[#000] font-[500] w-full lg:w-[60%]
                        ">
                            To manufacture and supply trouble-free products in conformance to specification for the satisfaction of our customers. We commit to increase productivity and continuously improve systems — ensuring timely delivery at competitive prices, in compliance with health, safety, and environmental requirements.
                        </p>
                    </Fade>
                </div>

                {/* Bottom */}
                <div className="
                    flex justify-end flex-wrap gap-[4rem]
                    mt-[3rem] sm:mt-[2.8rem] lg:mt-[3rem] xl:mt-[3.5rem] 2xl:mt-[4rem]
                ">
                    {
                        ourGoalsData.map((item, index) => {
                            return (
                                <div className="
                                    w-full sm:w-[30%] group
                                    p-[0.8rem] sm:p-[1.2rem] lg:p-[1rem] xl:p-[1.1rem] 2xl:p-[1.2rem]
                                    bg-[#0a2946] text-[#fff] relative
                                    mb-[0] sm:mb-0 last:mb-[1.4rem] sm:last:mb-0
                                " key={index}>
                                    <div>
                                        <img src={item.image} alt={item.title} loading="lazy" className="
                                            w-full rounded-lg
                                        " />
                                    </div>
                                    <Fade>
                                        <span className="
                                            text-[1.5rem] sm:text-[1.8rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]
                                            font-[550] font-gilroy block
                                            mt-[0.8rem] sm:mt-[0.7rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                        ">
                                            {item.title}
                                        </span>
                                    </Fade>
                                    
                                    <Fade>
                                        <p className="
                                            text-[0.9rem] sm:text-[1rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                            mt-[0.4rem] sm:mt-[0.5rem] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                                            mb-[45px] sm:mb-[50px] lg:mb-[40px] xl:mb-[45px] 2xl:mb-[50px]
                                        ">
                                            {item.desc}
                                        </p>
                                    </Fade>
                                    
                                    <div className="
                                        w-[70px] sm:w-[80px] lg:w-[65px] xl:w-[73px] 2xl:w-[80px]
                                        h-[70px] sm:h-[80px] lg:h-[65px] xl:h-[73px] 2xl:h-[80px]
                                        position-absolute bg-[#e9202a] rounded-[5px]
                                        bottom-[-11px] sm:bottom-[-15px] lg:bottom-[-11px] xl:bottom-[-13px] 2xl:bottom-[-15px]
                                        right-[-11px] sm:right-[-15px] lg:right-[-11px] xl:right-[-13px] 2xl:right-[-15px]
                                        p-[0.8rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                                    ">
                                        <img src={item.icon} alt={item.title} loading="lazy" className="
                                            w-full group-hover:scale-[1.2] transition-all duration-300
                                        "/>
                                    </div>
                                    <div className="
                                        w-[70%]
                                        h-[80%]
                                        position-absolute bg-[#e9202a] z-[-1] inset-0
                                        top-[-10px] sm:top-[-11px] lg:top-[-8px] xl:top-[-9px] 2xl:top-[-10px]
                                        left-[-10px] sm:left-[-11px] lg:left-[-8px] xl:left-[-9px] 2xl:left-[-10px]
                                        rounded-tr-[20px]
                                        rounded-bl-[20px]
                                        group-hover:scale-[1.03] transition-all duration-300
                                    "></div>
                                </div>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default OurGoals