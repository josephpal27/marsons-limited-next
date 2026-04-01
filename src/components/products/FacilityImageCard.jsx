
const FacilityImageCard = ({img, title, desc}) => {
    return (
        <>
            <div className="w-full lg:w-[35%] relative group">
                <img
                    src={img}
                    className="w-full grayscale group-hover:grayscale-0 transition duration-300"
                />
                <div className="
                    absolute bg-[#0a29469f] group-hover:bg-[#0a2946e8] text-[#fff] transition-all
                    bottom-[-0.5rem] lg:bottom-[-0.7rem] group-hover:bottom-[0]
                    left-[-0.5rem] lg:left-[-0.7rem] group-hover:left-[0]
                    w-[90%] sm:w-[70%] lg:w-[80%]
                    h-[70%] sm:h-[40%] lg:h-[65%] 
                    px-[1rem] sm:px-[1rem] lg:px-[1.2rem] xl:px-[1.4rem] 2xl:px-[1.5rem]
                    py-[0.5rem] sm:py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                ">
                    <span className="
                        text-[1.15rem] sm:text-[1.5rem] lg:text-[1.05rem] xl:text-[1.2rem] 2xl:text-[1.4rem]
                        font-[600]
                    ">
                        {title}
                    </span>
                    <p className="
                        text-[0.75rem] sm:text-[1.1rem] lg:text-[0.65rem] xl:text-[0.75rem] 2xl:text-[0.85rem]
                        mt-[0.2rem] lg:mt-[0.5rem]
                    ">
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default FacilityImageCard
