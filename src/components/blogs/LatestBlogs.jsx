import { blogsData } from "@/data/blogsData";
import Link from "next/link";

const LatestBlogs = () => {
    return (
        <div>

            <span className="
                text-[1.4rem] sm:text-[1.3rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]
                font-[600] text-[#0a2946] block font-gilroy
            ">
                Latest Blogs
            </span>

            <div className="
                mt-[0.6rem] sm:mt-[0.8rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                pt-[1rem] sm:pt-[1.2rem] lg:pt-[1.3rem] xl:pt-[1.4rem] 2xl:pt-[1.5rem]
                border-t border-[#e2e2e2]
            ">
                {blogsData.slice(-3).reverse().map((blog, index) => {
                    return(
                        <Link href={`/blogs/${blog.slug}`} key={index} className="
                            flex justify-between flex-wrap
                            mb-[1.5rem] sm:mb-[0.9rem] lg:mb-[1rem] xl:mb-[1.1rem] 2xl:mb-[1.2rem]
                        ">
                            <div className="w-full lg:w-[21%]">
                                <img src={blog.image} alt={blog.title} loading="lazy" className="
                                    w-full shadow-[rgba(0,0,0,0.2)_3px_3px_3px]
                                " />
                            </div>
                            <div className="w-full lg:w-[76%] mt-[0.8rem] lg:mt-0">
                                <span className="
                                    text-[1.15rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                    font-[600] font-gilroy
                                ">
                                    {blog.title}
                                </span>
                                <p className="
                                    text-[0.9rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                    mt-[0.25rem] sm:mt-[0.4rem] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                                    text-[#6f6f6f]
                                ">
                                    {blog.desc}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default LatestBlogs
