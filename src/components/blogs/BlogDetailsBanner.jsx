
const BlogDetailsBanner = ({blog}) => {
    return (
        <>
            <section className="
                w-full
                relative
            ">
                <img src="/images/banners/about-banner.avif" alt="Blogs Banner" loading="eager" className="
                    w-full
                    h-[37vh] lg:h-[65vh]
                    drop-shadow-[0_7px_0px_#e9202a] sm:drop-shadow-[0_10px_0px_#e9202a]
                " />
                <div className="
                    pb-[1.2rem] sm:pb-[3rem] lg:pb-[2.9rem] xl:pb-[3.2rem] 2xl:pb-[3.5rem]
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    absolute
                    top-0 w-full
                    h-full
                    flex flex-col justify-end
                ">
                    <h1 className="
                        text-[1.3rem] sm:text-[2rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem]
                        text-[#fff] font-[700]
                    ">
                        {blog.title}
                    </h1>
                    <span className="
                        text-[#fff] font-[450] block
                        text-[0.8rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                        mt-[0.5rem] sm:mt-[0.8rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    "> 
                        {blog.date}
                    </span>
                </div>
            </section>
        </>
    )
}

export default BlogDetailsBanner
