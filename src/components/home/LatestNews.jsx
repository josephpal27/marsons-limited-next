import latestNewsData from "@/data/LatestNewsData";
import LatestNewsCard from "./LatestNewsCard";

const LatestNews = () => {

    return (
        <div className="
            pb-[0] sm:pb-[1.5rem] lg:pb-[1rem] xl:pb-[1.5rem] 2xl:pb-[2rem]
            px-[1rem] sm:px-[5%] lg:px-[7%]
            flex flex-col justify-center
            h-full
        ">
            <h5 className="
                text-[1.8rem] sm:text-[3rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                font-[600]
            ">
                LATEST <span className="text-[#e9202a]">BLOGS</span> & <span className="text-[#e9202a]">ARTICLES</span>
            </h5>

            {/* Cards Row */}
            <div className="
                mt-[1.5rem] sm:mt-[2.5rem] lg:mt-[2.1rem] xl:mt-[2.3rem] 2xl:mt-[2.5rem]
                flex justify-between flex-wrap
            ">

                {/* Left */}
                <div className="sm:w-[24%] mb-[1.4rem] sm:mb-0">
                    <LatestNewsCard
                        image={latestNewsData[0].image}
                        title={latestNewsData[0].title}
                        description={latestNewsData[0].desc}
                    />
                </div>

                {/* Center */}
                <div className="
                    sm:w-[49%] hidden lg:flex flex-col 
                    gap-[1.4rem] sm:gap-[1.3rem] lg:gap-[1.1rem] xl:gap-[1.2rem] 2xl:gap-[1.3rem]
                ">
                    <LatestNewsCard
                        image={latestNewsData[1].image}
                        title={latestNewsData[1].title}
                        description={latestNewsData[1].desc}
                        layout="horizontal"
                    />

                    <LatestNewsCard
                        image={latestNewsData[2].image}
                        title={latestNewsData[2].title}
                        description={latestNewsData[2].desc}
                        layout="horizontal"
                        reverse
                    />
                </div>

                {/* Right */}
                <div className="sm:w-[24%] mt-[1.4rem] sm:mt-0 hidden lg:flex">
                    <LatestNewsCard
                        image={latestNewsData[3].image}
                        title={latestNewsData[3].title}
                        description={latestNewsData[3].desc}
                    />
                </div>

            </div>
        </div>
    );
};

export default LatestNews;