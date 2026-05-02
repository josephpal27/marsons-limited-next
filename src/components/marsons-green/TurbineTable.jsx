import Reveal from "../Reveal";

const turbineData = [
    ["Suzlon S120 / S144", "3 MW", "690 V", "3.3 MVA / 3.6 MVA"],
    ["Senvion 4.2M160", "4.2 MW", "690 V", "4.5 – 5.0 MVA"],
    ["Siemens Gamesa SG 3.4", "3.4 MW", "345/230/13.8 kV", "3.6 – 4.0 MVA"],
    ["Siemens Gamesa 5–6 MW", "5–6 MW", "690 V / 1,050 V", "5.5 – 6.3 MVA"],
    ["Adani Wind / Envision 5.2 MW+", "5.2 MW+", "1,050 V / 1,200 V", "5.5 – 6.3 MVA"],
    ["Vestas V120 / V150", "2.0 – 2.2 MW", "690 V", "2.2 – 2.5 MVA"],
    ["Inox Wind 3 MW Series", "3 MW", "690 V", "3.3 MVA"],
    ["Custom / Other", "Any", "Per turbine datasheet", "Per turbine datasheet"],
];

const TurbineTable = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%] 
                py-[1.5rem] sm:py-[4.2rem] lg:py-[3.9rem] xl:py-[4.2rem] 2xl:py-[4.5rem]
            ">
                <Reveal>
                    <h5 className="
                        text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                        text-[#228f49] font-[600]
                    ">
                        TURBINE <br /> COMPATIBILITY TABLE
                    </h5>
                </Reveal>

                {/* Table */}
                <div className="mt-[1.5rem]">

                    <table className="w-full sm:border border-[#0a2946] border-collapse">

                        {/* HEADER (hidden on mobile) */}
                        <thead className="hidden sm:table-header-group text-[#0a2946]">
                            <tr>
                                <th className="px-4 py-3 text-left w-[25%] bg-[#0a2946] text-white border border-[#0a2946]">
                                    Turbine Model
                                </th>
                                <th className="px-4 py-3 text-center border border-[#0a2946]">
                                    Rating (MW)
                                </th>
                                <th className="px-4 py-3 text-center border border-[#0a2946]">
                                    Transformer LV Voltage
                                </th>
                                <th className="px-4 py-3 text-center border border-[#0a2946]">
                                    Transformer MVA
                                </th>
                            </tr>
                        </thead>

                        {/* BODY */}
                        <tbody>
                            {turbineData.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`
                                    ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                                    border border-[#0a2946]
                                    mb-4 sm:mb-0
                                    rounded-md sm:rounded-none
                                    overflow-hidden
                                    block sm:table-row
                                `}
                                >

                                    {/* MODEL */}
                                    <td className="
                                    block sm:table-cell
                                    px-3 py-3 font-semibold text-white bg-[#0a2946]
                                    border border-[#0a2946]
                                ">
                                        {item[0]}
                                    </td>

                                    {/* RATING */}
                                    <td className="
                                    block sm:table-cell sm:text-center
                                    px-3 py-2 border border-[#0a2946]
                                    text-gray-800
                                ">
                                        <span className="sm:hidden font-semibold text-[#0a2946] block mb-1">
                                            Rating (MW)
                                        </span>
                                        {item[1]}
                                    </td>

                                    {/* VOLTAGE */}
                                    <td className="
                                    block sm:table-cell sm:text-center
                                    px-3 py-2 border border-[#0a2946]
                                    text-gray-800
                                ">
                                        <span className="sm:hidden font-semibold text-[#0a2946] block mb-1">
                                            Transformer LV Voltage
                                        </span>
                                        {item[2]}
                                    </td>

                                    {/* MVA */}
                                    <td className="
                                    block sm:table-cell sm:text-center
                                    px-3 py-2 border border-[#0a2946]
                                    text-gray-800
                                ">
                                        <span className="sm:hidden font-semibold text-[#0a2946] block mb-1">
                                            Transformer MVA
                                        </span>
                                        {item[3]}
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

export default TurbineTable
