"use client"

import { motion } from "framer-motion";
import Fade from "../Fade";
import Reveal from "../Reveal";

const AboutWhatWeDo = () => {
    return (
        <>
            <section>
                {/* Top Content */}
                <div className="
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    pt-[1rem] sm:pt-[3rem] lg:pt-[2rem] xl:pt-[2.5rem] 2xl:pt-[3rem]
                    flex justify-between items-center flex-wrap
                ">
                    <div className="
                        sm:w-[37%]
                    ">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.9,
                                        ease: "easeOut",
                                    }}
                            >
                                <h1 className="
                                    text-[2rem] sm:text-[7rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem]
                                    text-[#e9202a] font-[700] leading-[0.9]
                                ">
                                    <span className="
                                        font-[300] text-[#000] inline-block
                                        text-[1.5rem] sm:text-[3rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem]
                                    ">
                                        WHAT
                                    </span> <br /> WE DO
                                </h1>
                            </motion.div>
                    </div>
                    <div className="
                        sm:w-[60%]
                    ">
                        <Fade>
                            <p className="
                                text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                text-[#000] font-[500] mt-[0.8rem] sm:mt-0    
                            ">
                                Marsons Limited was founded in Kolkata in the late 1950s, at a time when India's industrial infrastructure was being built from the ground up. Our founders understood that electrical power transformation was not a commodity — it was the foundation on which everything else depended. That conviction has not changed in 65 years.
                            </p>
                        </Fade>
                    </div>
                </div>
                {/* Center Content */}
                <div className="
                    mt-[0.8rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                ">
                    <Fade>
                        <p className="
                            text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                            text-[#000] font-[500]
                        ">
                            From our earliest distribution transformers supplying electricity to Bengal's growing industrial belt, we expanded steadily — into medium voltage, into high voltage, and eventually into Extra-High Voltage transformers that connect major power stations to India's national grid. Today, Marsons is the only transformer manufacturer in Eastern India — including the North Eastern Region — that builds EHV units.
                        </p>
                    </Fade>
                </div>
                {/* Bottom Content */}
                <div className="
                    relative
                    mt-[0] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    flex flex-col-reverse
                ">
                    <img src="/images/what-we-do-bg.avif" alt="What We Do" loading="lazy" className="
                        w-full
                        sm:h-screen
                    " />
                    <div className="
                        sm:w-[35%]
                        sm:absolute
                        top-[0] sm:top-[5rem] lg:top-[2rem] xl:top-[2.5rem] 2xl:top-[3rem]
                        right-[7%]
                        px-[1rem] sm:px-0
                        py-[1.5rem] sm:py-0
                    ">
                        <Reveal>
                            <span className="
                                text-[1.4rem] sm:text-[2.5rem] lg:text-[2rem] xl:text-[2.3rem] 2xl:text-[2.5rem]
                                text-[#e9202a] font-[700] block
                            ">
                                Unmatched Infrastructure
                            </span>
                        </Reveal>
                        
                        <Fade>
                            <p className="
                                text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                text-[#000] font-[500]
                            ">
                                In recent years, we have expanded to serve the United States market, manufacturing to IEEE/ANSI standards and exporting to UK, Europe, Africa, and the Middle East. A new manufacturing facility for 315 MVA 400 kV class transformers is currently under development.
                            </p>
                        </Fade>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutWhatWeDo