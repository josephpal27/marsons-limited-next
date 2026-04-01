
const FacilityTextBlock = ({para}) => {
    return (
        <>
            <div className="w-full lg:w-[30%] flex items-center">
                <p className="
                    text-[1rem] sm:text-[1.1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                    text-[#000] font-[500]
                ">
                    {para}
                </p>
            </div>
        </>
    )
}

export default FacilityTextBlock
