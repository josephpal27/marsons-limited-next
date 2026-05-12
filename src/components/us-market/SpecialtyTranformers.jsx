import Reveal from "../Reveal"

const specialtyData = [
    {
        id: 1,
        title: "Solar PV & <br/> BESS Duty",
        desc: "K-13/K-20/K-30 | 1,500 Vdc secondary for HV PV strings | 150% BESS overloading | ANSI C57.159, IEEE 1547, NEC 690",
        image: "/images/us-market/specialty/1.avif",
    },
    {
        id: 2,
        title: "Wind Farm <br/> Collector",
        desc: "34.5 kV collector to 115/138 kV | IEC 61400-1 ed.4 / IECRE OD-501 | PD tested per IEEE C57.113",
        image: "/images/us-market/specialty/2.avif",
    },
    {
        id: 3,
        title: "Rectifier / Drive <br/> Isolation",
        desc: "6, 12, 18, 24-pulse winding configurations | K-4/K-7/K-13 | Phase-shift 15°/20°/30° | IEEE C57.18.10",
        image: "/images/us-market/specialty/3.avif",
    },
    {
        id: 4,
        title: "Grounding / Earthing <br/> Transformer",
        desc: "Zigzag or wye-delta | Short-time rated 10 sec / 1 min | NEC 250 | Optional NGR package | 5 kVA – 1,000 kVA",
        image: "/images/us-market/specialty/4.avif",
    },
    {
        id: 5,
        title: "Overhead <br/> Distribution",
        desc: "5 – 167 kVA | ANSI C57.12.20 | CSP or plain tank | DOE 2016 compliant",
        image: "/images/us-market/specialty/5.avif",
    },
    {
        id: 6,
        title: "Mobile / Emergency <br/> Substation",
        desc: "5 – 100 MVA, 34.5 – 230 kV | Trailer-mounted, DOT/FHWA | Quick-connect HV/LV bus | NERC CIP / FEMA ready",
        image: "/images/us-market/specialty/6.avif",
    },
]

const SpecialtyTranformers = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                mt-[0.3rem] sm:mt-0
            ">
                <Reveal>
                    <h5 className="
                        text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                        text-[#e9202a] font-[600]
                    ">
                        SPECIALTY <br /> TRANSFORMERS
                    </h5>
                </Reveal>

                {/* Row */}
                <div className="
                    flex justify-between flex-wrap
                    mt-[1.5rem] sm:mt-[2rem] lg:mt-[2.5rem] xl:mt-[2.7rem] 2xl:mt-[3rem]
                ">
                    {specialtyData.map((item) => {
                        return (
                            <div key={item.id} className="
                                w-[48.5%] lg:w-[32%] relative group overflow-hidden
                                mb-[0.8rem] sm:mb-[1.4rem] lg:mb-[1.5rem] xl:mb-[1.6rem] 2xl:mb-[1.7rem]
                            ">
                                <img src={item.image} alt={item.title} loading="lazy" className="w-full" />
                                <div className="
                                    absolute top-0 w-full h-full
                                    flex flex-col justify-end
                                    p-[0.6rem] sm:p-[1.5rem] lg:p-[1.8rem] xl:p-[1.9rem] 2xl:p-[2rem]
                                    group-hover:translate-y-full transition-all duration-500
                                    bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,#0a2946_100%)] text-[#fff]
                                ">
                                    <span className="
                                        text-[1rem] sm:text-[1.6rem] lg:text-[1.5rem] xl:text-[1.65rem] 2xl:text-[1.8rem]
                                        font-[550] leading-[1.2] font-gilroy
                                    " dangerouslySetInnerHTML={{ __html: item.title }} />
                                    <p className="
                                        text-[0.6rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                        mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                    ">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default SpecialtyTranformers
