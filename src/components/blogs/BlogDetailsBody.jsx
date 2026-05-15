import LatestBlogs from "./LatestBlogs"

const BlogDetailsBody = ({ blog }) => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                mt-[2rem] sm:mt-[3rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem]
                pb-[1rem] sm:pb-[2.5rem] lg:pb-[3rem] xl:pb-[3.5rem] 2xl:pb-[4rem]
            ">

                {/* Top */}
                <div className="
                    flex justify-between flex-wrap
                ">
                    {/* Image */}
                    <div className="w-full lg:w-[48%]">
                        <img src={blog.image} alt={blog.title} loading="lazy" className="
                            w-full shadow-[rgba(0,0,0,0.3)_5px_5px_4px]
                        " />
                    </div>
                    {/* Latest Blogs */}
                    <div className="w-[46%] hidden lg:block">
                        <LatestBlogs />
                    </div>
                </div>

                {/* Bottom */}
                <div className="
                    blog-content
                    mt-[1.7rem] sm:mt-[2.5rem] lg:mt-[3rem] xl:mt-[3.5rem] 2xl:mt-[4rem]
                " dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Blog Signature */}
                <div className="
                    mt-[1.3rem] sm:mt-[2rem] lg:mt-[2.8rem] xl:mt-[2.9rem] 2xl:mt-[3rem]
                ">
                    <span className="
                        text-[1.1rem] sm:text-[1.3rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        font-[600] text-[#0a2946] font-gilroy
                    ">
                        Harshvardhan Kotia
                    </span>
                    <p className="
                        text-[0.8rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                        mt-[0.2rem] sm:mt-[0.2rem] lg:mt-[0.1rem] xl:mt-[0.15rem] 2xl:mt-[0.2rem]
                        text-[#5b5b5b]
                    ">
                        CEO, Marsons Limited
                    </p>
                </div>

                {/* Latest Blogs Mobile View */}
                <div className="block lg:hidden w-full mt-[1.8rem]">
                    <LatestBlogs />
                </div>

            </section>
        </>
    )
}

export default BlogDetailsBody
