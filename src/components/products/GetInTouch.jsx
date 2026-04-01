import Link from "next/link"

const GetInTouch = () => {
    return (
        <>
            <section className="
                mt-[2rem] sm:mt-[3rem] lg:mt-[4.5rem] xl:mt-[5.5rem] 2xl:mt-[6rem]
                relative
            ">
                <img src="/images/get-in-touch-bg.avif" alt="Get In Touch" loading="lazy" className="
                    w-full h-[40vh] lg:h-auto object-cover
                "/>
                {/* Layer */}
                <div className="
                    absolute w-full h-full top-0 text-center text-[#fff]
                    flex flex-col items-center justify-end
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    pb-[1.5rem] sm:pb-[3rem] lg:pb-[3.4rem] xl:pb-[3.7rem] 2xl:pb-[4rem]
                ">  
                    <h6 className="
                        text-[1.5rem] sm:text-[2.5rem] lg:text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem]
                        font-[600]
                    ">
                        GET IN TOUCH
                    </h6>
                    <p className="
                        w-full lg:w-[55%]
                        text-[0.95rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        mt-[0.5rem] sm:mt-[1.1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    ">
                        Ready to power your infrastructure? Contact our experts today to discuss our wide range of ISO-certified distribution and power transformers, backed by 65 years of industry trust and credibility.
                    </p>
                    <Link href="/contact" className="
                        text-[1rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                        bg-[#e9202a] hover:bg-[#d6151f] w-max rounded-[3px] transition font-[500]
                        py-[0.5rem] 
                        px-[1.2rem] sm:px-[1.2rem] lg:px-[1.35rem] xl:px-[1.45rem] 2xl:px-[1.5rem]
                        mt-[1.5rem] sm:mt-[1.5rem] lg:mt-[1.8rem] xl:mt-[1.9rem] 2xl:mt-[2rem]
                    ">
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    )
}

export default GetInTouch
