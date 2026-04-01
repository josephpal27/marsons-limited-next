import FacilityImageCard from "./FacilityImageCard";
import FacilityTextBlock from "./FacilityTextBlock";

const facilityData = [
    {
        id: 1,
        type: "image",
        title: "CORE ASSEMBLY",
        desc: "Our robust round core construction uses cold rolled silicon steel and secure clamping to prevent movement, support windings, and boost short circuit strength.",
        img: "/images/facility/1.avif",
    },
    {
        id: 2,
        type: "image",
        title: "COIL ASSEMBLY",
        desc: "Our dedicated core coil assembly area meticulously constructs the transformer's vital active part, defining its insulation scheme, cooling, and dynamic withstand capabilities.",
        img: "/images/facility/2.avif",
    },
    {
        id: 3,
        type: "text",
        para: "The core and coil form the vital active part of our transformers. Utilizing cold-rolled, grain-oriented silicon steel, our robust construction defines the insulation scheme, optimizes cooling, and guarantees superior dynamic withstand capabilities during operation and transport.",
    },
    {
        id: 4,
        type: "text",
        para: "Precision is paramount. By maintaining an isolated, clean winding environment, we ensure extremely low impedance variation. Furthermore, our advanced vacuum drying technology cuts drying times by over 50%, passing those time savings directly to your delivery schedule.",
    },
    {
        id: 5,
        type: "image",
        title: "WINDING DEPARTMENT",
        desc: "Housed in a pristine, enclosed room, our winding department uses vertical and horizontal machines to ensure tight tolerances and low impedance variation.",
        img: "/images/facility/3.avif",
    },
    {
        id: 6,
        type: "image",
        title: "VACUUM DRYING SYSTEM",
        desc: "Our highly effective vacuum drying process ensures perfect dryness and extends the transformer lifespan, while significantly shortening production cycles and delivery times.",
        img: "/images/facility/4.avif",
    },
];

const Facility = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                pt-[2.5rem] sm:pt-[3.5rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
                pb-[1.5rem] sm:pb-[1.5rem] lg:pb-[1.9rem] xl:pb-[2.2rem] 2xl:pb-[2.5rem]
            ">
                {/* Head */}
                <div className="
                    flex flex-col items-center
                ">
                    <h3 className="
                        text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                        text-[#e9202a] font-[600]
                    ">
                        PRODUCTION FACILITY
                    </h3>
                    <p className="
                        w-full lg:w-[70%]
                        text-center
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        font-[500] text-[#000]
                    ">
                        MARSON operates a state-of-the-art manufacturing facility dedicated to building high-performance power transformers. From high-grade materials to rigorous quality control, our entire production line is optimized for reliability, longevity, and efficiency.
                    </p>
                </div>

                {/* ROW 1 */}
                <div className="
                    mt-[2rem] sm:mt-[2rem] lg:mt-[2.5rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                    flex flex-col lg:flex-row gap-7
                ">
                    <FacilityImageCard {...facilityData[0]} />
                    <FacilityImageCard {...facilityData[1]} />
                    <FacilityTextBlock {...facilityData[2]} />
                </div>

                {/* ROW 2 */}
                <div className="
                    mt-[2rem] sm:mt-[2rem] lg:mt-[1.6rem] xl:mt-[1.7rem] 2xl:mt-[1.8rem]
                    flex flex-col-reverse lg:flex-row gap-7
                ">
                    <FacilityTextBlock {...facilityData[3]} />
                    <FacilityImageCard {...facilityData[4]} />
                    <FacilityImageCard {...facilityData[5]} />
                </div>
            </section>
        </>
    )
}

export default Facility