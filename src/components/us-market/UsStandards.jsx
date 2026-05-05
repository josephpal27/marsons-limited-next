const usStandardsData = [
    ["IEEE C57.12.00", "General requirements — liquid-immersed distribution, power and regulating transformers"],
    ["IEEE C57.12.10", "Safety requirements — liquid-filled power transformers ≤1000 MVA"],
    ["IEEE C57.12.34", "Pad-mounted, compartmental-type, self-cooled, three-phase distribution transformers"],
    ["IEEE C57.116", "Guide for transformers directly connected to generators (GSU standard)"],
    ["IEEE C57.110", "K-factor rating — capability when supplying non-sinusoidal (inverter) load currents"],
    ["ANSI C57.12.20", "Overhead-type distribution transformers, 500 kVA and smaller"],
    ["DOE 10 CFR 431", "Mandatory minimum efficiency — DOE 2016 compliant"],
    ["NESC C2 / NEC", "National Electrical Safety Code / National Electrical Code installation requirements"],
    ["IEEE 693", "Seismic design of substations — available on request"],
    ["NERC FAC-001/002", "Generator and transmission interconnection standards — LGIA/SGIA compliant"],
    ["FERC Order 2003 & 2023", "Generator interconnection procedures — compliant engineering documentation"],
    ["Buy American Act (BABA)", "Compliant manufacturing on request"],
]

const UsStandards = () => {
    return (
        <>
            <section className="
                px-[0] sm:px-[5%] lg:px-[7%]
                py-[1.5rem] sm:py-[2rem] lg:py-[2.4rem] xl:py-[2.7rem] 2xl:py-[3rem]
            ">
                <h6 className="
                    text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                    text-[#e9202a] font-[600]
                ">
                    US STANDARDS <br /> COMPLIANCE TABLE
                </h6>

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
                                    Standard
                                </th>
                                <th className="
                                    px-[1rem] sm:px-[1rem] lg:px-[1rem] xl:px-[1.1rem] 2xl:px-[1.2rem]
                                    py-[0.9rem] sm:py-[0.9rem] lg:py-[0.7rem] xl:py-[0.8rem] 2xl:py-[0.9rem]
                                ">
                                    Description
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {usStandardsData.map((item, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ?
                                        "bg-gray-100 hover:bg-gray-50 transition group block sm:table-row" :
                                        "bg-[#fff] hover:bg-[#f9f9f9] transition group block sm:table-row"
                                    }
                                >
                                    <td className={`
                                        block sm:table-cell 
                                        px-[0.8rem] sm:px-[1rem] lg:px-[1rem] xl:px-[1.1rem] 2xl:px-[1.2rem]
                                        py-[0.6rem] sm:py-[0.8rem] lg:py-[0.6rem] xl:py-[0.7rem] 2xl:py-[0.8rem]
                                        font-semibold sm:text-[#0a2946] border text-[#e9202a] group-hover:text-[#e9202a]
                                    `}>
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

export default UsStandards
