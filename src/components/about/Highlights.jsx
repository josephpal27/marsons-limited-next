let highlightsData = [
    {
        id: 1,
        image: "/images/icons/quality.png",
        title: "Certified Products",
    },
    {
        id: 2,
        image: "/images/icons/experience.png",
        title: "Credible & Longstanding Experience",
    },
    {
        id: 3,
        image: "/images/icons/infrastructure.png",
        title: "Quality-Accredited Infrastructure",
    },
    {
        id: 4,
        image: "/images/icons/increase.png",
        title: "Responsive",
    },
]

const Highlights = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[2rem] sm:py-[3rem] lg:py-[2rem] xl:py-[2.5rem] 2xl:py-[3rem]
                flex flex-wrap justify-between bg-[#0a2946]
            ">
                {
                    highlightsData.map((item, index) => {
                        return(
                            <div key={index} className="
                                w-full sm:w-[20%] mb-[2rem] sm:mb-[0] last:mb-0
                                flex flex-col items-center justify-center
                            ">
                                <img src={item.image} alt={item.title} loading="lazy" className="
                                    w-[20%] sm:w-[40%]
                                " data-aos="zoom-in" data-aos-once="true"/>
                                <p className="
                                    text-[#fff] font-[500] text-center
                                    text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                    mt-[1rem] sm:mt-[1.2rem] lg:mt-[1rem] xl:mt-[1.1rem] 2xl:mt-[1.2rem]
                                " data-aos="fade">
                                    {item.title}
                                </p>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Highlights
