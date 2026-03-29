import { useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
// import { journeyData } from "../../data/journeyData";

const OurJourney = () => {
    const sectionRef = useRef(null);
    const dotRefs = useRef([]);
    const location = useLocation();

    const [lineTop, setLineTop] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);

    // Measure exact line start & end (static)
    useLayoutEffect(() => {
        const calculate = () => {
            if (!sectionRef.current || dotRefs.current.length === 0) return;

            const sectionRect = sectionRef.current.getBoundingClientRect();

            const firstRect = dotRefs.current[0].getBoundingClientRect();
            const lastRect =
                dotRefs.current[dotRefs.current.length - 1].getBoundingClientRect();

            const start =
                firstRect.top - sectionRect.top + firstRect.height / 2;

            const end =
                lastRect.top - sectionRect.top + lastRect.height / 2;

            setLineTop(start);
            setLineHeight(end - start);
        };

        const images = sectionRef.current?.querySelectorAll("img");
        let loaded = 0;

        images?.forEach((img) => {
            if (img.complete) {
                loaded++;
            } else {
                img.onload = () => {
                    loaded++;
                    if (loaded === images.length) calculate();
                };
            }
        });

        if (loaded === images?.length) calculate();

        window.addEventListener("resize", calculate);
        return () => window.removeEventListener("resize", calculate);
    }, [location]);

    return (
        <section className="
            px-[1rem] sm:px-[5%] lg:px-[7%]
            mt-[1.5rem] sm:mt-[6rem] lg:mt-[5rem] xl:mt-[5.5rem] 2xl:mt-[6rem]
        ">

            {/* Head */}
            <div className="flex justify-between items-center flex-wrap">
                <div className="
                    w-full sm:w-[35%]
                ">
                    <h4 className=" 
                        text-[1.8rem] sm:text-[5rem] lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[5.5rem]
                        font-[700] leading-[1]
                    " data-aos="fade-up">
                        OUR <br /> <span className="text-[#e9202a]">JOURNEY</span>
                    </h4>
                </div>
                <div className=" 
                    sm:w-[60%]
                    mt-[1rem] sm:mt-0
                ">
                    <p className=" 
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        text-[#000] font-[500] 
                    " data-aos="fade" data-aos-once="true">
                        Over the past 65 years, Marsons Limited has built an incredible legacy of distinction and credibility in the power sector.
                    </p>
                    <p className="
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        text-[#000] font-[500]
                        mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    " data-aos="fade" data-aos-once="true">
                        From our early days, we have grown to operate the largest transformer manufacturing facility in Eastern India with global reach.
                    </p>
                </div>
            </div>

            <div ref={sectionRef} className="
                relative 
                mt-[2rem] sm:mt-[3rem] lg:mt-[3rem] xl:mt-[3.5rem] 2xl:mt-[4rem]
            ">

                {/* Static Vertical Line */}
                <div
                    className="
                        absolute 
                        left-[0] sm:left-1/2
                        -translate-x-0 sm:-translate-x-1/2
                        bg-[#bebebe]
                        w-[3px] sm:w-[7px] lg:w-[5px] xl:w-[6px] 2xl:w-[7px]
                    "
                    style={{
                        top: lineTop,
                        height: lineHeight,
                    }}
                />

                {journeyData.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div
                            key={item.id}
                            className="
                                w-[94%] sm:w-full
                                ml-[6%] sm:ml-0
                                relative flex flex-col sm:flex-row items-start sm:items-center justify-between  
                                mb-[2.5rem] sm:mb-[5rem] lg:mb-[4rem] xl:mb-[4.5rem] 2xl:mb-[5rem]
                        ">
                            {/* Left */}
                            <div className="w-full sm:w-[45%]">
                                {isLeft || window.innerWidth < 640 ? (
                                    <img src={item.image} alt="Journey Image" className="
                                        w-full grayscale hover:grayscale-0 transition duration-300
                                    " />
                                ) : (
                                    <div className="
                                        text-left sm:text-right 
                                        pr-[0] sm:pr-[2rem] lg:pr-[1.6rem] xl:pr-[1.8rem] 2xl:pr-[2rem]
                                    ">
                                        <span
                                            className="
                                                text-[2.5rem] sm:text-[4rem] lg:text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem]
                                                font-[700] text-[#0f2b3a] block
                                        " data-aos="fade-up" >
                                            {item.year}
                                        </span>
                                        <span
                                            className="
                                                text-[1.5rem] sm:text-[2.5rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem]
                                                font-[700] block
                                                mt-[0.5rem] 
                                            " data-aos="fade-up">
                                            {item.title.split(item.highlight)[0]}
                                            <span className="text-[#e9202a]">
                                                {item.highlight}
                                            </span>
                                        </span>
                                        <p
                                            className="
                                                text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                                text-[#000] font-[500] 
                                                mt-[0.5rem] sm:mt-[0.7rem] lg:mt-[0.5rem] xl:mt-[0.6rem] 2xl:mt-[0.7rem]
                                            " data-aos="fade-up" >
                                            {item.desc}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Center Dot */}
                            <div
                                ref={(el) => (dotRefs.current[index] = el)}
                                className="
                                    absolute 
                                    left-[-8.8%] sm:left-1/2
                                    -translate-x-0 sm:-translate-x-1/2
                                    z-10
                                "
                            >
                                <div
                                    className="
                                        w-[12px] sm:w-[18px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px]
                                        h-[12px] sm:h-[18px] lg:h-[14px] xl:h-[16px] 2xl:h-[18px]
                                        bg-black rounded-full border-black
                                        border-[10px] sm:border-[15px] lg:border-[13px] xl:border-[14px] 2xl:border-[15px]
                                    " data-aos="zoom-in" data-aos-duration="500"
                                />
                            </div>

                            {/* Right */}
                            <div className="w-full sm:w-[45%]">
                                {!isLeft && window.innerWidth >= 640 ? (
                                    <img src={item.image} alt="Journey Image" className="
                                        w-full grayscale hover:grayscale-0 transition duration-300
                                    " />
                                ) : (
                                    <div className="
                                        pl-[0] sm:pl-[2rem] lg:pl-[1.6rem] xl:pl-[1.8rem] 2xl:pl-[2rem]
                                    ">
                                        <span
                                            className="
                                                text-[2.5rem] sm:text-[4rem] lg:text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem]
                                                font-[700] text-[#0f2b3a] block
                                                mt-[1rem] sm:mt-0
                                            " data-aos="fade-up"
                                        >
                                            {item.year}
                                        </span>
                                        <span
                                            className="
                                                text-[1.5rem] sm:text-[2.5rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem]
                                                font-[700] block
                                                mt-[0.5rem] 
                                            "
                                            data-aos="fade-up"
                                        >
                                            {item.title.split(item.highlight)[0]}
                                            <span className="text-[#e9202a]">
                                                {item.highlight}
                                            </span>
                                        </span>
                                        <p
                                            className="
                                                text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                                text-[#000] font-[500] 
                                                mt-[0.7rem] sm:mt-[0.7rem] lg:mt-[0.5rem] xl:mt-[0.6rem] 2xl:mt-[0.7rem]
                                            "
                                            data-aos="fade-up"
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default OurJourney;