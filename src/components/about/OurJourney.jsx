"use client"

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { journeyData } from "../../data/journeyData";
import Reveal from "../Reveal";
import Fade from "../Fade";

const OurJourney = () => {
    const sectionRef = useRef(null);
    const dotRefs = useRef([]);

    const [lineTop, setLineTop] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Handle screen size safely
    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // Measure exact line start & end
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
    }, []);

    return (
        <section className="
            px-[1rem] sm:px-[5%] lg:px-[7%]
            mt-[1.5rem] sm:mt-[3rem] lg:mt-[5rem] xl:mt-[5.5rem] 2xl:mt-[6rem]
        ">

            {/* Head */}
            <div className="flex justify-between items-center flex-wrap">
                <div className="w-full sm:w-[35%]">
                    <Reveal>
                        <h2 className=" 
                            text-[1.8rem] sm:text-[3rem] lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[5.5rem]
                            font-[700] leading-[1]
                        ">
                            OUR <br /> <span className="text-[#e9202a]">JOURNEY</span>
                        </h2>
                    </Reveal>
                </div>
                <div className="sm:w-[60%] mt-[1rem] sm:mt-0">
                    <Fade>
                        <p className="text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem] text-[#000] font-[500]">
                            Over the past 65 years, Marsons Limited has built an incredible legacy of distinction and credibility in the power sector.
                        </p>
                    </Fade>

                    <Fade>
                        <p className="text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem] text-[#000] font-[500] mt-[0.8rem] sm:mt-[1rem]">
                            From our early days, we have grown to operate the largest transformer manufacturing facility in Eastern India with global reach.
                        </p>
                    </Fade>
                </div>
            </div>

            <div ref={sectionRef} className="
                relative 
                mt-[2rem] sm:mt-[2.5rem] lg:mt-[3rem] xl:mt-[3.5rem] 2xl:mt-[4rem]
            ">

                {/* Line */}
                <div
                    className="
                        absolute 
                        left-[0] sm:left-1/2
                        -translate-x-0 sm:-translate-x-1/2
                        bg-[#bebebe]
                        w-[3px] sm:w-[5px] lg:w-[5px] xl:w-[6px] 2xl:w-[7px]
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
                                {isLeft || isMobile ? (
                                    <img src={item.image} alt={item.year} className="w-full grayscale hover:grayscale-0 transition duration-300" />
                                ) : (
                                    <Content item={item} align="right" />
                                )}
                            </div>

                            {/* Dot */}
                            <div
                                ref={(el) => (dotRefs.current[index] = el)}
                                className="absolute left-[-8.8%] sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 z-10"
                            >
                                <div className="w-[12px] sm:w-[13px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] h-[12px] sm:h-[13px] lg:h-[14px] xl:h-[16px] 2xl:h-[18px] bg-black rounded-full border-black border-[10px] sm:border-[15px] lg:border-[13px] xl:border-[14px] 2xl:border-[15px]" />
                            </div>

                            {/* Right */}
                            <div className="w-full sm:w-[45%]">
                                {!isLeft && !isMobile ? (
                                    <img src={item.image} alt={item.year} className="w-full grayscale hover:grayscale-0 transition duration-300" />
                                ) : (
                                    <Content item={item} align="left" />
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


// Reusable Box
const Content = ({ item, align }) => (
    <div className={`
        ${align === "right" ? "text-left sm:text-right pr-[0] sm:pr-[1rem] lg:pr-[1.6rem] xl:pr-[1.8rem] 2xl:pr-[2rem]" : "pl-[0] sm:pl-[1rem] lg:pl-[1.6rem] xl:pl-[1.8rem] 2xl:pl-[2rem]"}
    `}>
        <Reveal>
            <span className="text-[2rem] sm:text-[3rem] lg:text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem] font-[700] text-[#0f2b3a] block mt-[1rem] sm:mt-0">
                {item.year}
            </span>
        </Reveal>
        
        <Reveal>
            <span className="text-[1.5rem] sm:text-[1.8rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem] font-[700] block mt-[0.5rem] uppercase">
                {item.title.split(item.highlight)[0]}
                <span className="text-[#e9202a]">{item.highlight}</span>
            </span>
        </Reveal>
        
        <Reveal>
            <p className="text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem] text-[#000] font-[500] mt-[0.5rem]">
                {item.desc}
            </p>
        </Reveal>
        
    </div>
);