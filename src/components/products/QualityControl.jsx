const qualityControlData = [
    {
        id: 1,
        title: "Quality Control",
        desc: [
            "A quality policy is a reflection of the endeavors and aims of the organization. Quality has always been a benchmark at Marsons.",
            "Our uncompromising stance on quality and strict adherence to ISO 9001:2008 standards furnish our customers with the very best and reliable products.",
            "To maintain these rigorous standards, our quality control activities are seamlessly integrated into every stage of the production cycle.",
            "These core activities can be summarized as: custom order management, a strict approval system for all vendors, uncompromising manufacturing supervision, and comprehensive testing and inspection.",
        ],
    },
    {
        id: 2,
        title: "Testing Infrastructure",
        desc: [
            "Our testing departments, utilizing high-end equipment, play a decisive role in the implementation of our quality program. We operate two laboratories, both equipped with modern machinery and precision instruments.",
            "To ensure the highest accuracy, tests are conducted separately. One laboratory is strictly allotted for high/medium voltage transformers, and the other for medium/low voltage transformers.",
            "Our quality is backed by accredited infrastructure. Our fully equipped NABL accredited laboratory can efficiently carry out all required routine and type tests, including Impulse lightning tests and Temperature rise tests.",
            "This facility allows us to rigorously test various ratings of Power Transformers up to the range of 200 MVA 220 kV class using various conventional, state-of-the-art, and modern equipment.",
        ],
    },
]

const QualityControl = () => {
    return (
        <>
            <section className="mt-[3rem] sm:mt-[2rem] lg:mt-[1.9rem] xl:mt-[2.2rem] 2xl:mt-[2.5rem]">
                {/* Banner */}
                <div className="
                    relative
                ">
                    <img src="/images/quality-bg.avif" alt="Quality Control" loading="lazy" className="
                        w-full
                    " />
                    <div className="
                        absolute w-full h-full
                        top-0 flex justify-center
                        bg-[linear-gradient(to_bottom,#e9202ab3_30%,#fff_100%)]
                        pt-[1.5rem] sm:pt-[3rem] lg:pt-[6rem] xl:pt-[7rem] 2xl:pt-[8rem]
                    ">
                        <h5 className="
                            text-[1.5rem] sm:text-[2.5rem] lg:text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem]
                            font-[600] text-[#fff] text-center
                            w-[65%] sm:w-full
                        ">
                            QUALITY CONTROL & TESTING
                        </h5>
                    </div>
                </div>

                {/* Boxes Row */}
                <div className="
                    flex justify-between flex-wrap
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    mt-[-1.5rem] sm:mt-[-11rem] lg:mt-[-13rem] xl:mt-[-14rem] 2xl:mt-[-15rem]
                    z-10 relative
                ">
                    {
                        qualityControlData.map((item, index) => {
                            return (
                                <div key={index} className="
                                    w-full lg:w-[48%] bg-[#fff] shadow-[-8px_8px_9px_rgba(0,0,0,0.25)] 
                                    p-[1rem] sm:p-[1.7rem] lg:p-[1.9rem] xl:p-[2.3rem] 2xl:p-[2.5rem]
                                    mb-[1.5rem] lg:mb-0
                                ">
                                    <span className="
                                        text-[1.3rem] sm:text-[1.7rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]
                                        text-[#e9202a] font-[600]
                                    ">
                                        {item.title}
                                    </span>
                                    {
                                        item.desc.map((para, i) => (
                                            <p key={i} className="
                                                mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                                text-[1rem] sm:text-[1.1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                                font-[500]
                                            ">
                                                {para}
                                            </p>
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default QualityControl
