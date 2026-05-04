import Reveal from "../Reveal"

const greenApplicationsData = [
    {
        id: 1,
        title: "Utility-Scale Solar <br/> PV Parks",
        desc: "Ground-mounted solar plants from 5 MW to 500 MW+. Central inverter and string inverter configurations.",
        icon: "/images/icons/marsons-green/1.png",
    },
    {
        id: 2,
        title: "Battery Energy <br/> Storage (BESS)",
        desc: "Grid-scale battery storage for renewable firming, frequency regulation, and peak demand management. Enhanced 150% cyclic overloading.",
        icon: "/images/icons/marsons-green/2.png",
    },
    {
        id: 3,
        title: "Industrial Captive <br/> Solar",
        desc: "Rooftop and ground-mounted captive solar for industrial and commercial energy consumers.",
        icon: "/images/icons/marsons-green/3.png",
    },
    {
        id: 4,
        title: "Variable Frequency <br/> Drives (VFD)",
        desc: "Industrial motor drive systems in steel, cement, mining, oil & gas — harmonic mitigation at the transformer.",
        icon: "/images/icons/marsons-green/4.png",
    },
    {
        id: 5,
        title: "PM-KUSUM & Solar <br/> Pump Schemes",
        desc: "Government scheme solar pump installations — compact, reliable IDTs for distributed agricultural solar.",
        icon: "/images/icons/marsons-green/5.png",
    },
]

const GreenApplications = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%] 
                pt-[1rem] sm:pt-[4.2rem] lg:pt-[3.9rem] xl:pt-[4.2rem] 2xl:pt-[4.5rem]
            ">
                <Reveal>
                    <h5 className="
                        text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                        text-[#228f49] font-[600] text-center
                    ">
                        APPLICATIONS
                    </h5>
                </Reveal>

                {/* Row */}
                <div className="
                    flex justify-center flex-wrap gap-[6.5%]
                    mt-[4rem] sm:mt-[4rem] lg:mt-[4.5rem] xl:mt-[4.7rem] 2xl:mt-[5rem]
                ">
                    {greenApplicationsData.map((item) => {
                        return(
                            <div key={item.id} className="
                                w-full sm:w-[28%]
                                bg-[#0a2946] text-[#fff] rounded-xl relative
                                p-[1.5rem] sm:p-[1rem] lg:p-[1.5rem] xl:p-[1.7rem] 2xl:p-[2rem]
                                mb-[3.5rem] sm:mb-[3rem] lg:mb-[4.5rem] xl:mb-[4.7rem] 2xl:mb-[5rem]
                            ">
                                <div className="
                                    absolute top-[-2rem] left-[-0.7rem] sm:left-[-1.5rem]
                                    w-[65px] sm:w-[50px] lg:w-[60px] xl:w-[65px] 2xl:w-[70px]
                                    h-[65px] sm:h-[50px] lg:h-[60px] xl:h-[65px] 2xl:h-[70px]
                                    flex justify-center items-center bg-[#228f49] rounded-md
                                ">
                                    <img src={item.icon} alt={item.title} loading="lazy" className="
                                        w-[40px] sm:w-[40px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px]
                                        h-[40px] sm:h-[40px] lg:h-[35px] xl:h-[40px] 2xl:h-[45px]
                                        object-contain
                                    " />
                                </div>

                                <span className="
                                    text-center block font-[600]
                                    text-[1rem] sm:text-[1.1rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                                " dangerouslySetInnerHTML={{ __html: item.title }} />
                                
                                <p className="
                                    text-center
                                    text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                    mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                ">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default GreenApplications
