import Link from "next/link"
import { MdArrowOutward } from "react-icons/md";
import { HiDownload } from "react-icons/hi";

const UsCTA = () => {
    return (
        <>
            <section className="
                px-[0] sm:px-[5%] lg:px-[7%]
                mt-[3rem] sm:mt-[4rem] lg:mt-[4.4rem] xl:mt-[4.7rem] 2xl:mt-[5rem]
                mb-[4rem] sm:mb-[5rem] lg:mb-[6.4rem] xl:mb-[6.7rem] 2xl:mb-[7rem]
                bg-[url('/images/us-market/cta-bg.png')] bg-cover bg-no-repeat bg-center
                flex justify-between items-center flex-wrap
            ">
                <div className="w-[25%]">
                    <img 
                        src="/images/us-market/cta.png" 
                        alt="CTA" 
                        loading="lazy" 
                        className="
                            w-full scale-[1.3]
                            ml-[3rem]
                        " 
                    />
                </div>
                <div className="w-[60%]">
                    <Link href="/contact" className="
                        text-[#fff] font-[600] font-gilroy w-max
                        text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                        flex items-center gap-[0.5rem] group
                    ">
                        Get In Touch <MdArrowOutward className="group-hover:rotate-45 transition duration-300" />
                    </Link>
                    <p className="
                        text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                        mt-[0.7rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        text-[#fff]
                    ">
                        For US grid, utility, and renewable energy enquiries — please include voltage class, MVA rating, applicable IEEE standard, and project state in your enquiry for fastest response.
                    </p>
                    <a href="#" target="_blank" className="
                        bg-[#fff] text-[#0a2946] rounded-md font-gilroy flex items-center w-max transition duration-200
                        text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                        px-[1rem] sm:px-[1rem] lg:px-[0.8rem] xl:px-[0.9rem] 2xl:px-[1rem]
                        py-[0.7rem] sm:py-[0.7rem] lg:py-[0.6rem] xl:py-[0.65rem] 2xl:py-[0.7rem]
                        mt-[1.5rem] sm:mt-[2rem] lg:mt-[2.5rem] xl:mt-[2.7rem] 2xl:mt-[3rem]
                        gap-[0.5rem]
                        hover:bg-[#e9202a] hover:text-[#fff]
                    ">
                        Download Catalogue <HiDownload className="text-[1rem] sm:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]" />
                    </a>
                </div>
            </section>
        </>
    )
}

export default UsCTA
