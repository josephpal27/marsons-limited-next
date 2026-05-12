"use client";
import { useEffect, useState } from "react";

// const fetchStock = async (symbol) => {
//     const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`;
//     const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(yahooUrl)}`;

//     const res = await fetch(proxyUrl);
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);

//     const json = await res.json();
//     const meta = json.chart.result[0].meta;

//     const price = meta.regularMarketPrice;
//     const prevClose = meta.chartPreviousClose || meta.regularMarketPreviousClose;

//     const changePercent =
//         typeof meta.regularMarketChangePercent === "number" &&
//             !isNaN(meta.regularMarketChangePercent)
//             ? meta.regularMarketChangePercent
//             : prevClose
//                 ? ((price - prevClose) / prevClose) * 100
//                 : 0;

//     return {
//         price,
//         change: changePercent,
//         time: new Date(meta.regularMarketTime * 1000).toLocaleTimeString("en-IN", {
//             hour: "2-digit",
//             minute: "2-digit",
//             second: "2-digit",
//         }),
//     };
// };

const fetchStock = async (symbol) => {
    const res = await fetch(`https://marsonsonline.com/stock.php?symbol=${symbol}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json = await res.json();
    const meta = json.chart.result[0].meta;

    const price = meta.regularMarketPrice;
    const prevClose = meta.chartPreviousClose || meta.regularMarketPreviousClose;
    const changePercent =
        typeof meta.regularMarketChangePercent === "number" &&
            !isNaN(meta.regularMarketChangePercent)
            ? meta.regularMarketChangePercent
            : prevClose
                ? ((price - prevClose) / prevClose) * 100
                : 0;

    return {
        price,
        change: changePercent,
        time: new Date(meta.regularMarketTime * 1000).toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }),
    };
};

const ExchangeBlock = ({ label, data, error }) => {
    const isDown = data?.change < 0;
    return (
        <div className="flex items-center gap-[0.2rem] sm:gap-[0.5rem] px-[0.5rem] sm:px-[1rem] lg:px-[1.1rem] xl:px-[1.2rem] 2xl:px-[1.3rem] py-[0.4rem] sm:py-[0.5rem] lg:py-[0.4rem] xl:py-[0.45rem] 2xl:py-[0.5rem]">
            <span
                className={`w-2 h-2 rounded-full animate-pulse hidden sm:block ${error
                    ? "bg-red-400"
                    : !data
                        ? "bg-yellow-400"
                        : isDown
                            ? "bg-red-400"
                            : "bg-green-400"
                    }`}
            />
            <span className="text-blue-500 text-[0.5rem] sm:text-[0.6rem] lg:text-[0.7rem] xl:text-[0.75rem] 2xl:text-[0.8rem] font-bold tracking-relaxed sm:tracking-widest">
                {label}
            </span>
            {error ? (
                <span className="text-red-400 text-[0.5rem] sm:text-[0.6rem] lg:text-[0.7rem] xl:text-[0.75rem] 2xl:text-[0.8rem]">Unavailable</span>
            ) : data ? (
                <>
                    <span className="text-black font-bold text-[0.6rem] sm:text-[0.8rem] lg:text-[0.8rem] xl:text-[0.85rem] 2xl:text-[0.9rem]">
                        ₹{data.price.toFixed(2)}
                    </span>
                    <span
                        className={`text-[0.5rem] sm:text-[0.6rem] lg:text-[0.7rem] xl:text-[0.75rem] 2xl:text-[0.8rem] font-bold flex items-center gap-0.5 ${isDown ? "text-red-400" : "text-green-400"
                            }`}
                    >
                        {isDown ? "▼" : "▲"} {Math.abs(data.change).toFixed(2)}%
                    </span>
                    <span className="hidden sm:block text-slate-500 text-[10px] sm:text-[8px] lg:text-[8.5px] xl:text-[9.5px] 2xl:text-[10px]">{data.time}</span>
                </>
            ) : (
                <span className="text-slate-500 text-[0.8rem] sm:text-[0.6rem] lg:text-[0.7rem] xl:text-[0.75rem] 2xl:text-[0.8rem] animate-pulse">Loading...</span>
            )}
        </div>
    );
};

const StockPrice = () => {
    const [bse, setBse] = useState(null);
    const [nse, setNse] = useState(null);
    const [bseError, setBseError] = useState(false);
    const [nseError, setNseError] = useState(false);

    const fetchAll = async () => {
        const [bseResult, nseResult] = await Promise.allSettled([
            fetchStock("MARSONS.BO"),
            fetchStock("MARSONS.NS"),
        ]);

        if (bseResult.status === "fulfilled") {
            setBse(bseResult.value);
            setBseError(false);
        } else {
            setBseError(true);
        }

        if (nseResult.status === "fulfilled") {
            setNse(nseResult.value);
            setNseError(false);
        } else {
            setNseError(true);
        }
    };

    useEffect(() => {
        fetchAll();
        const interval = setInterval(fetchAll, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute top-[5.1rem] sm:top-[5rem] lg:top-[5.8rem] xl:top-[6.6rem] 2xl:top-[7.2rem] w-full z-[10] px-[5%] flex justify-end">
            <div className="
                flex items-center justify-center bg-[#fff] rounded-full overflow-hidden shadow-lg w-full sm:w-max
            ">
                <ExchangeBlock label="BSE: MARSONS" data={bse} error={bseError} />
                <div className="w-px h-3 sm:h-4 lg:h-4 xl:h-4.5 2xl:h-5 bg-[#2a2d3a]" />
                <ExchangeBlock label="NSE: MARSONS" data={nse} error={nseError} />
            </div>
        </div>
    );
};

export default StockPrice;