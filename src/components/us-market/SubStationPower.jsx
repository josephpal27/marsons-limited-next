const subStationData = [
    {
        id: 1,
        image: "/images/us-market/two-winding.png",
        title: "Two-Winding",
        range: [
            {
                id: 1,
                head: "MVA Range",
                value: "5 – 300 MVA",
            },
            {
                id: 2,
                head: "HV Class",
                value: "69 – 345 kV",
            },
            {
                id: 3,
                head: "Standard",
                value: "IEEE C57.12.00/10",
            },
        ]
    },
    {
        id: 2,
        image: "/images/us-market/three-winding.png",
        title: "Three-Winding",
        range: [
            {
                id: 1,
                head: "MVA Range",
                value: "10 – 300 MVA",
            },
            {
                id: 2,
                head: "HV Class",
                value: "115 – 345 kV",
            },
            {
                id: 3,
                head: "Standard",
                value: "IEEE C57.12.10",
            },
        ]
    },
    {
        id: 3,
        image: "/images/us-market/auto-transformer.png",
        title: "Auto-Transformer",
        range: [
            {
                id: 1,
                head: "MVA Range",
                value: "30 – 300 MVA",
            },
            {
                id: 2,
                head: "HV Class",
                value: "345/230/13.8 kV",
            },
            {
                id: 3,
                head: "Standard",
                value: "IEEE C57.12.10",
            },
        ]
    },
    {
        id: 4,
        image: "/images/us-market/phase-shifting.png",
        title: "Phase-Shifting Transformer",
        range: [
            {
                id: 1,
                head: "MVA Range",
                value: "50 – 300 MVA",
            },
            {
                id: 2,
                head: "HV Class",
                value: "115 – 345 kV (±15° to ±30°)",
            },
            {
                id: 3,
                head: "Standard",
                value: "IEEE C57.12.10",
            },
        ]
    },
]

const SubStationPower = () => {
    return (
        <>
            <section className="
                px-[0] sm:px-[5%] lg:px-[7%]
                py-[2.3rem] sm:py-[3.5rem] lg:py-[3.9rem] xl:py-[4.2rem] 2xl:py-[4.5rem]
            ">
                <h4 className="
                    text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                    text-[#e9202a] font-[600]
                ">
                    SUBSTATION POWER <br /> TRANSFORMERS
                </h4>

                {/* Row */}
                <div className="
                    flex justify-between flex-wrap
                    mt-[1.5rem] sm:mt-[2rem] lg:mt-[2.5rem] xl:mt-[2.7rem] 2xl:mt-[3rem]
                ">
                    {/* Image */}
                    <div className="w-[37%]">
                        <img 
                            src="/images/us-market/two-winding.png" 
                            alt="Sub Station Power" 
                            loading="lazy" 
                            className="w-full" 
                        />
                    </div>

                    {/* Content */}
                    <div className="
                        w-[61%]
                        flex flex-col
                        gap-[1rem] sm:gap-[1rem] lg:gap-[1rem] xl:gap-[1.15rem] 2xl:gap-[1.25rem]
                    ">
                        {subStationData.map((item) => {
                            return(
                                <div key={item.id} className="
                                    bg-[#f4f3f3]
                                    p-[1rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                                    flex justify-between
                                    gap-[1rem] sm:gap-[1rem] lg:gap-[0.8rem] xl:gap-[0.9rem] 2xl:gap-[1rem]
                                ">
                                    <div className="w-[16%]">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            loading="lazy" 
                                            className="w-full aspect-square object-cover" 
                                        />
                                    </div>
                                    <div className="w-[80%]">
                                        <span className="
                                            text-[#0a2946] font-[700] font-gilroy
                                            text-[1.5rem] sm:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                                        ">
                                            {item.title}
                                        </span>
                                        <div className="
                                            mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                            gap-[1rem] sm:gap-[1rem] lg:gap-[0.8rem] xl:gap-[0.9rem] 2xl:gap-[1rem]
                                            flex
                                        ">
                                            {item.range.map((range) => {
                                                return (
                                                    <div key={range.id} className="
                                                        bg-[#0a2946] text-[#fff]
                                                        px-[1rem] sm:px-[1rem] lg:px-[0.8rem] xl:px-[0.9rem] 2xl:px-[1rem]
                                                        py-[0.2rem]
                                                    ">
                                                        <span className="
                                                            text-[0.7rem] sm:text-[0.55rem] lg:text-[0.55rem] xl:text-[0.65rem] 2xl:text-[0.75rem]
                                                        ">
                                                            {range.head}
                                                        </span>
                                                        <p className="
                                                            text-[0.9rem] sm:text-[0.65rem] lg:text-[0.75rem] xl:text-[0.85rem] 2xl:text-[0.95rem]
                                                            mt-[0.2rem]
                                                        ">
                                                            {range.value}
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SubStationPower
