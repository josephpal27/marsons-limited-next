
const InvestorCornerBanner = ({title, background}) => {
    return (
        <>
            <section className="
                w-full
                lg:h-screen
                relative
            ">
                <img src={background} alt="Investor Corner Banner" loading="eager" className="
                    w-full
                    lg:h-[106vh]
                    drop-shadow-[0_7px_0px_#e9202a] sm:drop-shadow-[0_10px_0px_#e9202a]
                " />
                <div className="
                    pb-[1.2rem] sm:pb-[3rem] lg:pb-[2.5rem] xl:pb-[3rem] 2xl:pb-[3.5rem]
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    absolute
                    top-0 w-full h-full flex items-end
                ">
                    <h1 className="
                        text-[1.6rem] sm:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                        text-[#fff] font-[700]
                    " data-aos="fade-up">
                        {title}
                    </h1>
                </div>
            </section>
        </>
    )
}

export default InvestorCornerBanner
