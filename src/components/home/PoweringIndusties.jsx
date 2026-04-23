"use client"

import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import Reveal from '../Reveal';
import Fade from '../Fade';
import { motion } from "framer-motion";

let PoweringIndustriesData = [
  {
    id: 1,
    image: "/images/icons/certified.avif",
    title: "Certified Products",
    desc: "Our Transformers of various ratings, which includes 50 MVA 132 kV class, have been successfully type-tested at CPRI in Bhopal and Bangalore.",
  },
  {
    id: 2,
    image: "/images/icons/trust.avif",
    title: "Trusted Expertise",
    desc: "We have supplied more than 300,000 Transformers of different voltage and MVA across the globe over last 6 decades.",
  },
  {
    id: 3,
    image: "/images/icons/excellence.avif",
    title: "Certified Excellence",
    desc: "Our fully equipped laboratory can efficiently carry out all required routine tests, for various ratings of Power Transformers up to the range of 10 KVA to 300 MVA class.",
  },
  {
    id: 4,
    image: "/images/icons/responsive.avif",
    title: "Responsive",
    desc: "We have evolved over the years by introducing new range of products catering to the latest developments and requirements in the market.",
  },
]

const PoweringIndustries = () => {
  return (
    <>
      <section className="
        py-[1.5rem] sm:py-[2rem] lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[4rem]
        px-[1rem] sm:px-[5%] lg:px-[7%]
        flex flex-col justify-center
        pb-[0] relative
      ">
        <Reveal>
          <h4 className="
            text-[1.8rem] sm:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
            text-[#000] font-[600] uppercase
            mb-[0.4rem] sm:mb-[0.5rem] lg:mb-[0.8rem] xl:mb-[0.9rem] 2xl:mb-[1rem]
          ">
            Powering <br className="block sm:hidden" /> <span className="text-[#e9202a]">Industries</span>
          </h4>
        </Reveal>

        <p className="
          text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
          text-[#000] font-[500]
          mt-[0.5rem]
        ">
          Eastern India's largest transformer manufacturer. 65+ years of engineering trust. From 10 KVA to 300 MVA — built for utilities, railways, industry, and renewable energy.
        </p>

        {/* Cards Row */}
        <div className="
          mt-[2rem] sm:mt-[2.5rem] lg:mt-[3rem] xl:mt-[3.5rem] 2xl:mt-[4rem]
          flex justify-between flex-wrap overflow-hidden
        ">
          {
            PoweringIndustriesData.map((item, index) => {
              return (
                <div className="
                  feature-card
                  w-full sm:w-[50%] lg:w-[25%]
                  mb-[1.5rem] sm:mb-0
                  p-[0] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                  pb-[1.5rem] sm:pb-0
                  flex flex-col relative group
                  border-b-[1px] border-black sm:border-b-[0] last:border-b-[0]
                " key={index}>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-[20%] sm:w-[25%] lg:w-[30%] grayscale sm:grayscale-0 brightness-0 sm:brightness-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                  />
                  <motion.span
                    className="
                      text-[#e9202a] font-[500] block
                      text-[1.3rem] sm:text-[1.4rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]
                      mt-[1rem] sm:mt-[1.2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem] font-gilroy
                    "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                  >
                    {item.title}
                  </motion.span>

                  <Fade>
                    <p className="
                        text-[1rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                        text-[#323232] font-[450]
                        mt-[0.5rem] sm:mt-[0.6rem] lg:mt-[0.5rem] xl:mt-[0.6rem] 2xl:mt-[0.7rem]
                      ">
                      {item.desc}
                    </p>
                  </Fade>

                  <Link href="/about" className="
                    hidden lg:flex
                    text-[#e9202a] hover:text-[#d6151f] mt-auto font-[500] items-center w-max
                    text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                    pt-[1rem] sm:pt-[2rem] lg:pt-[1.6rem] xl:pt-[1.8rem] 2xl:pt-[2rem]
                  ">
                    View Details <FaArrowRightLong className="
                      ml-[0.5rem] sm:ml-[0.7rem] lg:ml-[0.5rem] xl:ml-[0.6rem] 2xl:ml-[0.7rem]
                      group-hover:ml-[1rem]
                      transition-all duration-[0.2s]
                    " />
                  </Link>
                </div>
              )
            })
          }
        </div>

        {/* Tower Image (Only Mobile) */}
        <img src="/images/powering-industries-bg.avif" alt="Powering Industries Background" loading="lazy" className="
          w-full absolute bottom-0 right-0 opacity-80 sm:hidden
        "/>

      </section>
    </>
  )
}

export default PoweringIndustries