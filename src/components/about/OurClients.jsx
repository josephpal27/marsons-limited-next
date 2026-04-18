"use client"

import OurClientLogos from "../OurClientLogos";
import Reveal from "../Reveal";

const OurClients = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[0] sm:py-[1rem] lg:py-[1rem] xl:py-[1.5rem] 2xl:py-[2rem]
                mt-[3rem] sm:mt-0
            ">
                {/* Head */}
                <div className="
                    flex flex-col items-center
                ">
                    <Reveal>
                        <h3 className="
                            text-[1.8rem] sm:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                            font-[700] leading-[1.1] text-center
                        ">
                            OUR <span className="text-[#e9202a]">CLIENTS</span>
                        </h3>
                    </Reveal>
                    
                    <p className="
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        text-[#000] font-[500] text-center
                        mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        lg:w-[60%]
                    " data-aos="fade" data-aos-once="true">
                        Trusted by industry leaders worldwide, we deliver reliable power solutions to state utilities, infrastructure projects, and multinational corporations.
                    </p>
                </div>

                {/* Row */}
                <div className="
                    mt-[0.5rem]
                 ">
                    <OurClientLogos />
                </div>
            </section>
        </>
    )
}

export default OurClients;
