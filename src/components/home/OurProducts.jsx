"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Reveal from '../Reveal';

let productsData = [
    {
        id: 1,
        name: "Distribution <br/> Transformers",
        desc: "For state utilities, DISCOMs, and industrial facilities. BIS Star Rated (Level 1–3). Hermetically sealed, conservator, and free-breathing variants.",
        output: "10 KVA – 2,500 KVA | Up to 33 kV | IS 1180",
        image: "/images/products/distribution.avif",
        url: "/products/distribution-transformers",
    },
    {
        id: 2,
        name: "Power <br/> Transformers",
        desc: "The only EHV transformer manufacturer in Eastern India. Serving India's 220 kV / 400 kV grid and US transmission networks at 69–345 kV.",
        output: "Up to 300 MVA | Up to 345 kV | IS 2026 / IEEE C57",
        image: "/images/products/power.avif",
        url: "/products/power-transformers",
    },
    {
        id: 3,
        name: "Furnace Duty <br/> Transformers",
        desc: "Purpose-built for electric arc furnaces and ladle furnaces. Designed for continuous repetitive short-circuit events.",
        output: "EAF & LF Type | Electrode current up to 50 kA",
        image: "/images/products/furnace-duty.avif",
        url: "/products/furnace-duty-transformers",
    },
    {
        id: 4,
        name: "Locomotive & <br/> Traction",
        desc: "Critical front-end transformers for Indian Railways' electric locomotive fleet.",
        output: "WAG9 / WAP5 / WAP7 | 25 kV AC | RDSO",
        image: "/images/products/locomotive.avif",
        url: "/coming-soon",
    },
    {
        id: 5,
        name: "Dry Type <br/> Transformers",
        desc: "Oil-free, fire-safe units for hospitals, metro tunnels, data centres, and high-rise buildings.",
        output: "Up to 20 MVA | Up to 33 kV | IS 11171",
        image: "/images/products/dry-type.avif",
        url: "/products/dry-type-transformers",
    },
    {
        id: 6,
        name: "WTG Transformers - <br/> Marsons Green",
        desc: "India's full onshore wind fleet. Handles thermal cycling, VCB surges, and harmonics.",
        output: "1 MVA – 6.3 MVA | IEC 60076-16",
        image: "/images/products/wtg.avif",
        url: "/products/marsons-green/wtg-transformers",
    },
    {
        id: 7,
        name: "Inverter Duty Transformers - Marsons Green",
        desc: "For utility-scale solar PV, BESS, and VFD. Foil windings, unity power factor sizing.",
        output: "1 MVA – 25 MVA | K-13 / K-20 | IEEE C57.110",
        image: "/images/products/inverter-duty.avif",
        url: "/products/marsons-green/inverter-duty-transformers",
    },
    {
        id: 8,
        name: "US Market <br/> Transformers",
        desc: "Pad-mounted, substation, GSU, solar/BESS, wind collector, and specialty transformers. PE-stamped all 50 states.",
        output: "Up to 300 MVA / 345 kV | IEEE / ANSI / DOE",
        image: "/images/products/us-market.avif",
        url: "/coming-soon",
    },
]

const OurProducts = () => {

    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

    return (
        <>
            <section className="
                py-[2rem] sm:py-[2.5rem] lg:py-[2.5rem] xl:py-[3rem] 2xl:py-[3.5rem]
                px-[1rem] sm:px-[5%] lg:px-[7%]
                flex flex-col justify-center
            ">
                <Reveal>
                    <h6 className="
                        text-[1.8rem] sm:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                        text-[#000] font-[600]
                    ">
                        OUR <br /> <span className="text-[#e9202a]">PRODUCTS</span>
                    </h6>
                </Reveal>

                {/* Products Row */}
                <div className="
                    flex flex-wrap justify-between
                    mt-[1.7rem] sm:mt-[1.8rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                ">
                    {productsData.map((item, index) => {
                        return (
                            <motion.div key={index} className="
                                w-full sm:w-[48.5%] lg:w-[23.7%]
                                shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),_0px_3px_7px_-3px_rgba(0,0,0,0.3)]
                                mb-[1.1rem] sm:mb-[1.5rem] lg:mb-[1.2rem] xl:mb-[1.3rem] 2xl:mb-[1.4rem]
                                flex flex-col group
                            "
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: isMobile ? 0 : index * 0.1,
                                    ease: "easeOut",
                                }}
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                        className="w-full group-hover:scale-[1.03] transition duration-500"
                                    />
                                </div>
                                <div className="
                                    p-[0.9rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                                    flex flex-col justify-between flex-1 h-full
                                ">
                                    <div>
                                        <span className="
                                            text-[#e9202a] font-[800] block
                                            text-[1.3rem] sm:text-[1.5rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                        " dangerouslySetInnerHTML={{__html: item.name} } >
                                        </span>
                                        <span className="
                                            text-[#000] font-[700] block
                                            text-[0.9rem] sm:text-[1rem] lg:text-[0.7rem] xl:text-[0.75rem] 2xl:text-[0.85rem]
                                            mt-[0.8rem]
                                        ">
                                            {item.output}
                                        </span>
                                        <p className="
                                            text-[#000] font-[450]
                                            text-[0.9rem] sm:text-[1.1rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                            mt-[0.3rem]
                                        ">
                                            {item.desc}
                                        </p>
                                    </div>
                                    {/* Desktop Link */}
                                    <div className="mt-[1rem] sm:mt-[1.1rem] lg:mt-[1rem] xl:mt-[1.1rem] 2xl:mt-[1.2rem]">
                                        <Link href={item.url} className="
                                            text-center block bg-[#e9202a] hover:bg-[#d6151f] text-[#fff] font-[500] transition
                                            text-[0.95rem] sm:text-[1.15rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                            py-[0.5rem]
                                        ">
                                            VIEW PRODUCT
                                        </Link>
                                    </div>
                                    {/* Mobile Link */}
                                    {/* <div className="flex justify-between items-center mt-[1rem]">
                                        <div className="w-[48%]">
                                            <Link href={item.url} className="
                                                text-center block bg-[#e9202a] hover:bg-[#d6151f] text-[#fff] font-[500] transition
                                                text-[0.9rem] py-[0.5rem]
                                            ">
                                                VIEW PRODUCT
                                            </Link>
                                        </div>
                                        <div className="w-[30%]">
                                            <img src="/images/products/distribution-art.png" alt={item.name} loading="lazy" className="
                                                w-full h-[80px] object-contain
                                            " />
                                        </div>
                                    </div> */}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default OurProducts
