export const marsonsGreenData = [
    {
        id: 1,
        banner: "/images/banners/wtg-banner.png",
        title: "WTG Transformers",
        range: "MARSONS GREEN | 1 MVA – 6.3 MVA | IEC 60076-16 | India's Full Onshore Wind Fleet",
        slug: "wtg-transformers",
        overview: {
            image: "/images/marsons-green/wtg/wtg.png",
            desc: "Every wind turbine generates power at low voltage — typically 690 V to 1,200 V — which must be stepped up to medium voltage for collection and grid injection. The transformer that does this job is not a standard distribution transformer. IEC 60076-16 exists precisely because conventional transformers fail prematurely in wind applications. Marsons WTG Transformers are designed, tested, and delivered to this standard — covering every onshore wind turbine class currently operating or planned in India.",
        },
        problems: {
            heading: "WHY STANDARD <br/> TRANSFORMERS FAIL IN WIND",
            items: [
                {
                    id: 1,
                    title: "Thermal Cycling <br/> Fatigue",
                    desc: "Each turbine start/stop cycle creates rapid heating and cooling. Standard transformers are rated for continuous duty only. Marsons WTG units use enhanced insulation materials and oil formulations engineered for cyclic thermal stress.",
                    image: "/images/marsons-green/wtg/slider/1.png",
                },
                {
                    id: 2,
                    title: "VCB Switching <br/> Surges",
                    desc: "Vacuum Circuit Breakers generate high di/dt transients when disconnecting turbines. Marsons WTG designs include reinforced BIL and RC surge suppression capability.",
                    image: "/images/marsons-green/wtg/slider/2.png",
                },
                {
                    id: 3,
                    title: "Harmonic Currents <br/> from VSDs",
                    desc: "Variable Speed Drives generate 5th, 7th, 11th, 13th order harmonic currents. Marsons WTG windings are K-factor derated to handle harmonic heating without insulation degradation.",
                    image: "/images/marsons-green/wtg/slider/3.png",
                },
                {
                    id: 4,
                    title: "Loop-Feed Ring <br/> Main Faults",
                    desc: "Wind farm collector networks use daisy-chain ring-main topology. Marsons WTG units are rated and configured for loop-feed ring-bus operation with HV loop-feed bushings.",
                    image: "/images/marsons-green/wtg/slider/4.png",
                },
            ]
        },
        technicalSpecs: [
            ["Rating Range", "1 MVA to 6.3 MVA (covers India's full onshore turbine fleet: 1.5 MW – 6.3 MW)"],
            ["HV Voltage Class", "Up to 33 kV (MV collector network side)"],
            ["LV Winding Voltage", "690 V / 1,050 V / 1,200 V — matched to turbine generator output"],
            ["Frequency", "50 Hz (India) | 60 Hz on request"],
            ["Tap Changer", "OCTC or OLTC (OLTC preferred for sites with wide grid voltage variation)"],
            ["Cooling", "ONAN / ONAF — compact design for tower-base or nacelle installation"],
            ["Insulating Oil", "Mineral Oil or Silicone Oil (silicone for environmentally sensitive / near-water sites)"],
            ["Winding Material", "Aluminium Foil / Copper Foil"],
            ["Mounting", "Tower-base pad-mounted | Nacelle-integrated (per turbine OEM requirement)"],
            ["HV Terminal Arrangement", "Loop-feed bushing configuration for ring-main daisy-chain collector topology"],
            ["Impulse Withstand (BIL)", "Enhanced BIL — reinforced for VCB switching surge protection"],
            ["K-Factor Rating", "K-7, K-13 per IEEE C57.110 for harmonic duty"],
            ["Standards", "IEC 60076-16 (primary standard) | IS 2026, IEC 60076"],
        ],
        advantage: {
            image: "/images/marsons-green/wtg/advantage-bg.png",
            title: "MARSONS GREEN ADVANTAGE",
            desc: "Harnessing wind power requires more than a standard distribution transformer. Marsons WTG Transformers bridge the critical gap between your turbine's generation and grid injection. Covering India's full onshore wind fleet from 1 MVA to 6.3 MVA, our engineered solutions provide the steadfast backbone your renewable energy projects demand.",
        },
    },

    {
        id: 2,
        banner: "/images/banners/inverter-duty-banner.png",
        title: "Inverter Duty Transformers",
        range: "MARSONS GREEN | 1 MVA – 25 MVA | K-13 / K-20 Rated | Solar PV / BESS / VFD",
        slug: "inverter-duty-transformers",
        overview: {
            image: "/images/marsons-green/inverter-duty/inverter-duty.png",
            desc: "Solar PV inverters and battery storage inverters generate harmonic currents that standard transformers are not rated to handle. Connecting a conventional distribution transformer to a solar inverter system causes accelerated insulation degradation and premature failure — even at rated load. Marsons Inverter Duty Transformers are purpose-engineered for inverter-based sources: foil windings, K-factor rated insulation, multi-pulse harmonic cancellation, and unity power factor sizing.",
        },
        problems: {
            heading: "THE PROBLEM - AND <br/> HOW MARSONS IDTs SOLVE IT",
            items: [
                {
                    id: 1,
                    title: "Harmonic Currents <br/> from Inverters",
                    desc: "Solar inverters produce 5th, 7th, 11th, 13th order harmonics causing additional winding heating not accounted for in standard transformer ratings. Marsons IDTs are K-factor rated (K-13/K-20 per IEEE C57.110) with foil windings that distribute harmonic currents uniformly.",
                    image: "/images/marsons-green/inverter-duty/slider/1.png",
                },
                {
                    id: 2,
                    title: "Wrong power <br/> factor sizing",
                    desc: "Standard transformers are rated at 0.8 power factor. Solar inverters run at unity pf — meaning a standard transformer is undersized by 25% for solar duty. Marsons IDTs are rated at unity (1.0) power factor.",
                    image: "/images/marsons-green/inverter-duty/slider/2.png",
                },
                {
                    id: 3,
                    title: "Continuous <br/> full-load duty",
                    desc: "A distribution feeder averages 40–60% load. A solar IDT runs at or near rated load for 6–8 hours daily. Marsons IDTs are thermally designed for this continuous duty profile.",
                    image: "/images/marsons-green/inverter-duty/slider/3.png",
                },
                {
                    id: 4,
                    title: "Grid harmonic <br/> injection (THD)",
                    desc: "Marsons 3-winding or 5-winding IDTs with phase-shifted secondaries cancel dominant 5th and 7th harmonic orders at the MV bus — reducing Total Harmonic Distortion injected into the grid.",
                    image: "/images/marsons-green/inverter-duty/slider/4.png",
                },
            ]
        },
        technicalSpecs: [
            ["Rating Range", "1 MVA to 25 MVA (covers rooftop solar to 250 MW+ utility-scale parks)"],
            ["HV Voltage Class", "Up to 33 kV (grid injection at 11 kV / 22 kV / 33 kV)"],
            ["LV Winding Voltage", "415 V / 690 V / 800 V / 1,050 V — matched to inverter AC output"],
            ["Frequency", "50 Hz (India) | 60 Hz on request"],
            ["Primary / Multi-Winding", "Single secondary | 2 / 3 / 4 / 5 secondary windings (multi-pulse harmonic cancellation)"],
            ["Cooling", "ONAN / ONAF / OFAF — forced cooling for large MVA ratings"],
            ["Winding Material", "Aluminium Foil / Copper Foil (foil winding essential for harmonic current distribution)"],
            ["K-Factor Rating", "K-13 (standard solar duty) | K-20 (heavy harmonic / BESS / VFD duty) — per IEEE C57.110"],
            ["Power Factor Rating", "Unity (1.0) power factor — NOT 0.8 pf. Critical for correct solar duty sizing."],
            ["Insulating Oil", "Mineral Oil or Silicone Oil"],
            ["Neutral Grounding", "Solidly grounded or impedance grounded per site grid code (CEA regulations India)"],
            ["For BESS Applications", "150% cyclic overloading capability for battery charge/discharge cycles"],
            ["Standards", "IS 2026, IEC 60076, IEEE C57.12.00, IEEE C57.110 (K-factor), CBIP Manual on Solar Transformers"],
        ],
        advantage: {
            image: "/images/marsons-green/inverter-duty/advantage-bg.png",
            title: "ENGINEERED FOR INVERTERS",
            desc: "Handle rigorous harmonic profiles with precision. Marsons Inverter Duty Transformers seamlessly connect complex inverter outputs to the grid, offering advanced multi-winding designs and enhanced overload capabilities for solar and BESS applications up to 25 MVA.",
        },
    },
]