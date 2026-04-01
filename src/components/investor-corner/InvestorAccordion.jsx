"use client";

import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

const InvestorAccordion = ({ accordionData, slug }) => {

    return (
        <>
            <section
                className="
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    pb-[2rem] sm:pb-[3rem] lg:pb-[2.5rem] xl:pb-[3rem] 2xl:pb-[3.5rem]
                    mt-[2.5rem] sm:mt-[4.5rem] lg:mt-[6rem] xl:mt-[7rem] 2xl:mt-[8rem]
                    investor-accordion
                ">
                <Accordion defaultActiveKey="0" key={slug}>
                    {accordionData.map((item, index) => {
                        const hasBody = item.body && item.body.length > 0;

                        return (
                            <Accordion.Item
                                eventKey={String(index)}
                                key={index}
                                className="
                                    mb-[0.8rem] sm:mb-[1rem] lg:mb-[0.8rem] xl:mb-[0.9rem] 2xl:mb-[1rem]
                                    border-none
                                "
                            >
                                <Accordion.Header
                                    onClick={!hasBody ? (e) => e.preventDefault() : undefined}
                                    className={!hasBody ? "no-accordion" : ""}
                                >
                                    <span className="
                                        text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                                    ">
                                        {item.title}
                                    </span>
                                </Accordion.Header>
                                {hasBody && (
                                    <Accordion.Body
                                        className="
                                            bg-[#d5d5d5]
                                            py-[1rem] sm:py-[1.5rem] lg:py-[1.6rem] xl:py-[1.8rem] 2xl:py-[2rem]
                                            px-[1rem] sm:px-[1.5rem] lg:px-[1.1rem] xl:px-[1.3rem] 2xl:px-[1.5rem]
                                            rounded-[15px] sm:rounded-[15px] lg:rounded-[14px] xl:rounded-[17px] 2xl:rounded-[20px]
                                            mt-[0.5rem]
                                        "
                                    >
                                        {item.body &&
                                            item.body.map((item, idx) => {
                                                return (
                                                    <div
                                                        className="
                                                            flex justify-between flex-wrap
                                                            py-[0.5rem] sm:py-[0.8rem] lg:py-[0.6rem] xl:py-[0.7rem] 2xl:py-[0.8rem]
                                                            border-b border-[#a2a2a2]
                                                            last:border-none
                                                        "
                                                        key={idx}
                                                    >
                                                        <div
                                                            className="
                                                                w-full sm:w-[88%]
                                                            "
                                                        >
                                                            <p
                                                                className="
                                                                    text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                                                    text-[#000] font-[550]
                                                                "
                                                            >
                                                                {item.heading}
                                                            </p>
                                                        </div>
                                                        <div
                                                            className="
                                                                w-max lg:w-[6%]
                                                                mt-[0.6rem] sm:mt-0
                                                                mb-[0.2rem] sm:mb-0
                                                            "
                                                        >
                                                            {!item.link ? (
                                                                <span
                                                                    className="
                                                                        bg-gray-400 text-white font-[500] block text-center rounded-[5px]
                                                                        w-full py-[0.2rem] cursor-not-allowed
                                                                        text-[0.85rem] sm:text-[0.95rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                                                        px-[0.8rem] lg:px-0
                                                                    "
                                                                >
                                                                    View
                                                                </span>
                                                            ) : item.type === "route" ? (
                                                                <Link
                                                                    href={item.link}
                                                                    className="
                                                                        bg-[#0a2946] hover:bg-[#d61821] text-[#fff] font-[500] block text-center rounded-[5px] transition
                                                                        w-full
                                                                        py-[0.2rem]
                                                                        text-[0.85rem] sm:text-[0.95rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                                                        px-[0.8rem] lg:px-0
                                                                    "
                                                                >
                                                                    View
                                                                </Link>
                                                            ) : (
                                                                <a
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="
                                                                        bg-[#0a2946] hover:bg-[#d61821] text-[#fff] font-[500] block text-center rounded-[5px] transition
                                                                        w-full
                                                                        py-[0.2rem]
                                                                        text-[0.85rem] sm:text-[0.95rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                                                        px-[0.8rem] lg:px-0
                                                                    "
                                                                >
                                                                    View
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </Accordion.Body>
                                )}
                            </Accordion.Item>
                        );
                    })}
                </Accordion>
            </section>
        </>
    );
};

export default InvestorAccordion;
