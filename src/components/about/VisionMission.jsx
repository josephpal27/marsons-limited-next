const visionMissionData = [
    {
        id: 1,
        type: "image",
        image: "",
        alt: "Vision Image",
    },
    {
        id: 2,
        type: "content",
        title: "OUR",
        highlight: "VISION",
        align: "center",
        desc: `To establish Marsons as a global brand and one of the most trusted names in transformers.`,
    },
    {
        id: 3,
        type: "image",
        image: "",
        alt: "Mission Image",
    },
    {
        id: 4,
        type: "content",
        title: "OUR",
        highlight: "MISSION",
        align: "left",
        desc: `To provide customers with quality products at affordable prices through stringent evaluations, fostering relationships built on open communication and mutual trust.`,
    },
    {
        id: 5,
        type: "image",
        image: "",
        alt: "Values Image",
    },
    {
        id: 6,
        type: "content",
        title: "OUR",
        highlight: "VALUES",
        align: "left",
        desc: `We are driven by vision, commitment, and excellence. Our uncompromising stance on quality ensures reliable products, continuous improvement, and environmental responsibility.`,
    },
];

const VisionMission = () => {
    return (
        <section className="
            px-[1rem] sm:px-[5%] lg:px-[7%]
            mt-[2rem] sm:mt-[4rem] lg:mt-[3rem] xl:mt-[3.5rem] 2xl:mt-[4rem]
        ">
            <div className="
                flex flex-wrap justify-between
            ">

                {visionMissionData.map((item) => {
                    if (item.type === "image") {
                        return (
                            <div key={item.id} className="
                                sm:w-[33.33%]
                            ">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    loading="lazy"
                                    className="w-full grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        );
                    }

                    return (
                        <div
                            key={item.id}
                            className={`
                                sm:w-[33.33%]
                                p-[0] sm:p-[2rem] lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-[2rem]
                                py-[1.5rem] sm:py-0
                                flex flex-col justify-center
                                ${item.align === "center" ? "text-left sm:text-center" : "text-left"}
                            `}
                        >
                            <span className="
                                text-[1.7rem] sm:text-[3rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                                font-[700] leading-[1]
                            " data-aos="fade-up" data-aos-once="true">
                                {item.title} <br />
                                <span className="text-[#e9202a]">
                                    {item.highlight}
                                </span>
                            </span>

                            <p className="
                                text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                text-[#000] font-[500]
                                mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                            " data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}

            </div>
        </section>
    );
};

export default VisionMission;