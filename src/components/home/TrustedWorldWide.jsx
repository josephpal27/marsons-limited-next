"use client"

import Reveal from "../Reveal";
import { motion } from "framer-motion";

const locationData = [
    {
        id: 1,
        location: "India — IS / IEC Standards",
        desc: "The only EHV transformer manufacturer in Eastern India including the NER. Serving 16 state electricity boards, Indian Railways, steel industry, and India's 500 GW renewable energy target.",
        rating: [
            "33 kV",
            "66 kV",
            "132 kV",
            "220 kV",
            "400 kV (pipeline)",
            "24×7 Service",
        ]
    },
    {
        id: 2,
        location: "United States — IEEE / ANSI",
        desc: "Serving US utilities, renewable energy developers, and industrial customers with substation, GSU, pad-mounted, and specialty transformers. PE-stamped for all 50 states. NERC/FERC compliant.",
        rating: [
            "69 kV",
            "115 kV",
            "138 kV",
            "230 kV",
            "345 kV",
            "DOE 2016",
        ]
    },
]

const countryData = [
    {
        id: 1,
        country: "United Kingdom & Europe",
        desc: "132 kV class — CE certified",
    },
    {
        id: 2,
        country: "Africa & Middle East",
        desc: "Distribution & HV transformers",
    },
    {
        id: 3,
        country: "Bangladesh",
        desc: "Distribution transformers",
    },
]

const TrustedWorldWide = () => {
    return (
        <>
            <div className="
                py-[1.7rem] sm:py-[2rem] lg:py-[2rem] xl:py-[2.5rem] 2xl:py-[3rem]
                px-[1rem] sm:px-[5%] lg:px-[7%]
            ">
                <Reveal>
                    <h6 className="
                        text-[1.8rem] sm:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                        text-[#000] font-[600] uppercase
                    ">
                        Built in Kolkata, <br /> <span className="text-[#e9202a]">Trusted Worldwide</span>
                    </h6>
                </Reveal>

                {/* Cards */}
                <div className="
                    mt-[1.2rem] sm:mt-[2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                    flex justify-between flex-wrap
                ">
                    {locationData.map((item, index) => {
                        return (
                            <motion.div key={item.id} className="
                                w-full sm:w-[49.05%] bg-[#0a2946] 
                                p-[1rem] sm:p-[1.2rem] lg:p-[2.1rem] xl:p-[2.3rem] 2xl:p-[2.5rem]
                                mb-[1rem] sm:mb-0
                            "
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.1, // stagger effect
                                    ease: "easeOut",
                                }}
                            >
                                <span className="
                                    text-[#fff] font-[600] font-gilroy
                                    text-[1.3rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]
                                ">
                                    {item.location}
                                </span>
                                <p className="
                                    text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                    text-[#e0e0e0]
                                    mt-[0.7rem] sm:mt-[1rem] lg:mt-[0.6rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                                ">
                                    {item.desc}
                                </p>
                                <div className="
                                    mt-[1.2rem] sm:mt-[1.3rem] lg:mt-[1.1rem] xl:mt-[1.3rem] 2xl:mt-[1.5rem]
                                    flex flex-wrap 
                                    gap-[1rem] sm:gap-[0.9rem] lg:gap-[0.7rem] xl:gap-[0.8rem] 2xl:gap-[0.9rem]
                                ">
                                    {item.rating.map((item, index) => {
                                        return (
                                            <p key={index} className="
                                                bg-[#154776] text-[#e0e0e0] uppercase
                                                py-[0.35rem] sm:py-[0.4rem] lg:py-[0.3rem] xl:py-[0.35rem] 2xl:py-[0.4rem]
                                                px-[0.6rem] sm:px-[0.6rem] lg:px-[0.5rem] xl:px-[0.55rem] 2xl:px-[0.6rem]
                                                text-[0.85rem] sm:text-[0.8rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem]
                                            ">
                                                {item}
                                            </p>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom Cards */}
                <div className="
                    flex justify-between flex-wrap
                    mt-[1.2rem] sm:mt-[1.1rem] lg:mt-[1.1rem] xl:mt-[1.3rem] 2xl:mt-[1.5rem]
                ">
                    {countryData.map((item, index) => {
                        return (
                            <motion.div key={item.id} className="
                                w-full sm:w-[32%] bg-[#e9202a] 
                                p-[1rem] sm:p-[1.2rem] lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-[2rem]
                                mb-[1rem] sm:mb-0
                            "
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.1, // stagger effect
                                    ease: "easeOut",
                                }}
                            >
                                <span className="
                                    text-[1.3rem] sm:text-[1.3rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                    text-[#fff] font-[600] font-gilroy
                                ">
                                    {item.country}
                                </span>
                                <p className="
                                    text-[1rem] sm:text-[1rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                    mt-[0.5rem]
                                    text-[#efefef] font-[400]
                                ">
                                    {item.desc}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default TrustedWorldWide
