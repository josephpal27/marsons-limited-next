"use client"

import { motion } from 'framer-motion';
import Reveal from "../Reveal";

const whyMarsonsData = [
    {
        id: 1,
        title: "Only EHV Manufacturer in Eastern India",
        desc: "No other transformer manufacturer in Eastern India — including the North Eastern Region — produces Extra-High Voltage transformers. We have commissioned nearly 200 EHV units across India's most demanding grid projects, with units impulse-tested at 150 MVA 220 kV class at our own NABL accredited laboratory.",
        image: "/images/why-marsons/1.avif",
    },
    {
        id: 2,
        title: "Built to International Standards",
        desc: "	We engineer to IS/IEC for India's grid and IEEE/ANSI for the United States — from the same factory, the same quality system, the same people. 132 kV class units certified and exported to European markets.",
        image: "/images/why-marsons/3.avif",
    },
    {
        id: 3,
        title: "NABL Accredited Test Laboratory",
        desc: "Our in-house laboratory is equipped with a Haefely Trench impulse test system from Switzerland — rated at 1,600 kV / 80 kJ. We test transformers up to 200 MVA 220 kV class without sending units to a third-party facility. Full test reports provided with every unit.",
        image: "/images/why-marsons/2.avif",
    },
    {
        id: 4,
        title: "65 Years Without Compromise",
        desc: "Founded in the late 1950s, Marsons has shipped over 300,000 transformers. Customers in steel plants, railways, chemical plants, and EHV substations have trusted Marsons repeatedly for over six decades.",
        image: "/images/why-marsons/4.avif",
    },
    {
        id: 5,
        title: "12,000 MVA Annual Capacity",
        desc: "	Eastern India's largest transformer facility — 45,000 sq.m., dust-free winding and assembly, epoxy-coated flooring, and a vacuum drying system that cuts drying time by more than 50%.",
        image: "/images/why-marsons/5.avif",
    },
    {
        id: 6,
        title: "India's Renewable Energy Partner",
        desc: "Our Marsons Green product line covers every onshore wind turbine class in India from 1.5 MW to 6.3 MW, and every solar plant scale from rooftop to 500 MW utility parks.",
        image: "/images/why-marsons/6.avif",
    },
]

const WhyMarsons = () => {
    return (
        <>
            <section className="
                pt-[1.5rem] sm:pt-[2rem] lg:pt-[3rem] xl:pt-[3.5rem] 2xl:pt-[4rem]
                px-[1rem] sm:px-[5%] lg:px-[7%]
            ">
                <Reveal>
                    <h5 className="
                        text-[1.8rem] sm:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                        text-[#000] font-[600]
                    ">
                        WHY <br /> <span className="text-[#e9202a]">MARSONS</span>
                    </h5>
                </Reveal>

                {/* Row */}
                <div className="
                    mt-[1.5rem] sm:mt-[1.8rem] lg:mt-[2.1rem] xl:mt-[2.3rem] 2xl:mt-[2.5rem]
                    flex justify-between flex-wrap
                ">
                    {whyMarsonsData.map((item) => {
                        return (
                            <motion.div key={item.id} className="
                                w-full sm:w-[48.5%] lg:w-[32%] relative
                                mb-[1rem] sm:mb-[1.5rem] lg:mb-[1.3rem] xl:mb-[1.5rem] 2xl:mb-[1.7rem]
                            "
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full"
                                />
                                <div className="
                                    absolute top-0 left-0 w-full h-full flex flex-col justify-end text-[#fff] 
                                    bg-[#00000094] hover:bg-[#000000c3] transition-all duration-200
                                    p-[1rem] sm:p-[1.2rem] lg:p-[1.3rem] xl:p-[1.4rem] 2xl:p-[1.5rem]
                                ">
                                    <span className="
                                        text-[1.4rem] sm:text-[1.6rem] lg:text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.7rem]
                                        font-[600] leading-[1.3] font-gilroy
                                    ">
                                        {item.title}
                                    </span>
                                    <p className="
                                        text-[0.9rem] sm:text-[1rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                        font-[500]
                                        mt-[0.7rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                    ">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default WhyMarsons