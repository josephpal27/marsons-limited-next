
const TechnicalSpecifications = ({specs}) => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                pt-[1.3rem] sm:pt-[2.5rem] lg:pt-[2.4rem] xl:pt-[2.7rem] 2xl:pt-[3rem]
            ">
                <h3 className="
                    text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                    text-[#e9202a] font-[600] text-center
                ">
                    TECHNICAL SPECIFICATIONS
                </h3>

                {/* Table */}
                <div className="
                    mt-[1.2rem] sm:mt-[1.4rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                ">
                    <table className="
                        w-full border border-gray-300
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                    ">

                        {/* Table Header */}
                        <thead className="bg-[#0a2946] text-[#fff] hidden sm:table-header-group">
                            <tr>
                                <th className="
                                    px-[1rem] sm:px-[1rem] lg:px-[1rem] xl:px-[1.1rem] 2xl:px-[1.2rem]
                                    py-[0.9rem] sm:py-[0.9rem] lg:py-[0.7rem] xl:py-[0.8rem] 2xl:py-[0.9rem]
                                    w-[25%]
                                ">
                                    Parameter
                                </th>
                                <th className="
                                    px-[1rem] sm:px-[1rem] lg:px-[1rem] xl:px-[1.1rem] 2xl:px-[1.2rem]
                                    py-[0.9rem] sm:py-[0.9rem] lg:py-[0.7rem] xl:py-[0.8rem] 2xl:py-[0.9rem]
                                "> 
                                    Value / Description
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {specs?.map((item, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? 
                                        "bg-gray-100 hover:bg-gray-50 transition group block sm:table-row" : 
                                        "bg-[#fff] hover:bg-[#f9f9f9] transition group block sm:table-row"
                                    }
                                >
                                    <td className="
                                        block sm:table-cell 
                                        px-[0.8rem] sm:px-[1rem] lg:px-[1rem] xl:px-[1.1rem] 2xl:px-[1.2rem]
                                        py-[0.6rem] sm:py-[0.8rem] lg:py-[0.6rem] xl:py-[0.7rem] 2xl:py-[0.8rem]
                                        font-semibold text-[#e9202a] sm:text-[#0a2946] border group-hover:text-[#e9202a]
                                    ">
                                        {item[0]}
                                    </td>
                                    <td className="
                                        block sm:table-cell 
                                        px-[0.8rem] sm:px-[1rem] lg:px-[1rem] xl:px-[1.1rem] 2xl:px-[1.2rem]
                                        py-[0.6rem] sm:py-[0.8rem] lg:py-[0.6rem] xl:py-[0.7rem] 2xl:py-[0.8rem]
                                        font-[500] border text-gray-700
                                    ">
                                        {item[1]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default TechnicalSpecifications
