import Link from 'next/link';

const LatestNewsCard = ({
    image,
    title,
    description,
    reverse = false,
    layout = "vertical",
}) => {
    return (
        <div
            className="
            bg-white shadow-[rgba(0,0,0,0.24)_0px_3px_8px]
            p-[0.8rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
            h-full
        ">
            <div className={`
                ${layout === "horizontal" ? "flex justify-between gap-[1rem] sm:gap-0 flex-wrap" : ""}
                ${reverse ? "flex-row-reverse" : ""}
            `}>
                {/* Image */}
                <div className={layout === "horizontal" ? "sm:w-[46%]" : "w-full"}>
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="w-full"
                    />
                </div>

                {/* Content */}
                <div className={layout === "horizontal" ? "sm:w-[51%]" : "mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]"}>
                    <span className="
                        text-[1.2rem] sm:text-[1.2rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        font-[500] text-[#0a2946] block
                    ">
                        {title}
                    </span>

                    <p className="
                        text-[1rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                        mt-[0.6rem] sm:mt-[0.5rem] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                    ">
                        {description}
                    </p>

                    <Link href="/coming-soon" className="
                        bg-[#e9202a] text-white font-[450] rounded-[3px] hover:bg-[#d6151f] transition block w-max
                        text-[1rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                        px-[0.6rem]
                        py-[0.25rem]
                        mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    ">
                        READ MORE
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LatestNewsCard;