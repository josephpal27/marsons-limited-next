import Link from 'next/link';

let productsData = [
    {
        id: 1,
        name: "Distribution Transformers",
        desc: "For state utilities, DISCOMs, and industrial facilities. BIS Star Rated (Level 1–3). Hermetically sealed, conservator, and free-breathing variants.",
        output: "10 KVA – 2,500 KVA | Up to 33 kV | IS 1180",
        image: "/images/products/1.jpg",
        url: "/products/distribution-transformers",
    },
    {
        id: 2,
        name: "Power Transformers",
        desc: "The only EHV transformer manufacturer in Eastern India. Serving India's 220 kV / 400 kV grid and US transmission networks at 69–345 kV.",
        output: "Up to 300 MVA | Up to 345 kV | IS 2026 / IEEE C57",
        image: "/images/products/2.jpg",
        url: "/products/power-transformers",
    },
    {
        id: 3,
        name: "Furnace Duty Transformers",
        desc: "Purpose-built for electric arc furnaces and ladle furnaces. Designed for continuous repetitive short-circuit events.",
        output: "EAF & LF Type | Electrode current up to 50 kA",
        image: "/images/products/3.jpg",
        url: "/products/furnace-duty-transformers",
    },
    {
        id: 4,
        name: "Locomotive & Traction",
        desc: "Critical front-end transformers for Indian Railways' electric locomotive fleet.",
        output: "WAG9 / WAP5 / WAP7 | 25 kV AC | RDSO",
        image: "/images/products/4.jpg",
        url: "/coming-soon",
    },
    {
        id: 5,
        name: "Dry Type Transformers",
        desc: "Oil-free, fire-safe units for hospitals, metro tunnels, data centres, and high-rise buildings.",
        output: "Up to 20 MVA | Up to 33 kV | IS 11171",
        image: "/images/products/5.jpg",
        url: "/products/dry-type-transformers",
    },
    {
        id: 6,
        name: "WTG Transformers - Marsons Green",
        desc: "India's full onshore wind fleet. Handles thermal cycling, VCB surges, and harmonics.",
        output: "1 MVA – 6.3 MVA | IEC 60076-16",
        image: "/images/products/6.jpg",
        url: "/coming-soon",
    },
    {
        id: 7,
        name: "Inverter Duty Transformers - Marsons Green",
        desc: "For utility-scale solar PV, BESS, and VFD. Foil windings, unity power factor sizing.",
        output: "1 MVA – 6.3 MVA | IEC 60076-16",
        image: "/images/products/7.jpg",
        url: "/coming-soon",
    },
    {
        id: 8,
        name: "US Market Transformers",
        desc: "Pad-mounted, substation, GSU, solar/BESS, wind collector, and specialty transformers. PE-stamped all 50 states.",
        output: "Up to 300 MVA / 345 kV | IEEE / ANSI / DOE",
        image: "/images/products/8.png",
        url: "/coming-soon",
    },
]

const OurProducts = () => {
    return (
        <>
            <div className="
                py-[1.5rem] sm:py-[3rem] lg:py-[2.5rem] xl:py-[3rem] 2xl:py-[3.5rem]
                px-[1rem] sm:px-[5%] lg:px-[7%]
                flex flex-col justify-center
                h-full
            ">
                <h4 className="
                    text-[1.8rem] sm:text-[3rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                    text-[#000] font-[600]
                ">
                    OUR <span className="text-[#e9202a]">PRODUCTS</span>
                </h4>

                {/* Products Row */}
                <div className="
                    flex flex-wrap justify-between
                    mt-[1.5rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                ">
                    {
                        productsData.map((item, index) => {
                            return (
                                <div className="
                                    w-full sm:w-[23.7%]
                                    shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),_0px_3px_7px_-3px_rgba(0,0,0,0.3)]
                                    mb-[1.1rem] sm:mb-[1.4rem] lg:mb-[1.2rem] xl:mb-[1.3rem] 2xl:mb-[1.4rem]
                                    relative overflow-hidden group
                                " key={index}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="
                                            w-full
                                        "
                                    />
                                    {/* Title Layer */}
                                    <div className="
                                        w-full
                                        h-full
                                        absolute
                                        inset-0 bg-[#0a2946d6]
                                        flex flex-col justify-center items-center translate-y-0 group-hover:-translate-y-full transition-transform duration-500 ease-in-out
                                        p-[1rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                                    ">
                                        <span className="
                                            text-[#fff] font-[600] text-center
                                            text-[1.2rem] sm:text-[1.2rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                        ">
                                            {item.name}
                                        </span>
                                        <span className="
                                            text-[#fff] text-center font-[600]
                                            text-[0.8rem] sm:text-[0.9rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.85rem]
                                            mt-[1rem]
                                        ">
                                            &bull; {item.output}
                                        </span>
                                        <p className="
                                            text-[#fff] text-center font-[450]
                                            text-[0.8rem] sm:text-[0.9rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem]
                                            mt-[0.3rem]
                                        ">
                                            {item.desc}
                                        </p>
                                    </div>
                                    {/* Read More Layer */}
                                    <div className="
                                        w-full
                                        h-full
                                        absolute
                                        inset-0 flex justify-center sm:justify-end items-end translate-y-full group-hover:-translate-y-0 transition-transform duration-500 ease-in-out
                                        p-[0.8rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                                    ">
                                        <Link href={item.url}>
                                            <button className="
                                                bg-[#e9202a] text-[#fff] font-[500] rounded-[3px] hover:bg-[#d6151f]
                                                text-[0.9rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                                px-[0.5rem]
                                                pt-[0.17rem]
                                                pb-[0.2rem]
                                                mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                            ">
                                                READ MORE
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default OurProducts
