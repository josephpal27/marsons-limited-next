import { blogsData } from "@/data/blogsData"
import Link from "next/link"

const BlogsListing = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                mt-[2rem] sm:mt-[3rem] lg:mt-[6.5rem] xl:mt-[7.5rem] 2xl:mt-[8rem]
                pb-[1.5rem] sm:pb-[2rem] lg:pb-[2rem] xl:pb-[2.5rem] 2xl:pb-[3rem]
                flex flex-wrap gap-[2.6%]
            ">
                {blogsData.map((blog, index) => {
                    return (
                        <div key={index} className="
                            w-full sm:w-[48%] lg:w-[31.6%] 
                            bg-[#fff] hover:bg-[#fafafa] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] transition duration-300
                            p-[0.8rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                            mb-[1.2rem] sm:mb-[1.8rem] lg:mb-[1.8rem] xl:mb-[1.9rem] 2xl:mb-[2rem]
                        ">
                            <img src={blog.image} alt={blog.title} loading="lazy" className="w-full aspect-[4/3]" />
                            <span className="
                                text-[1.2rem] sm:text-[1.3rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                                font-[500] text-[#0a2946] block font-gilroy
                                mt-[0.8rem] sm:mt-[0.8rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                !line-clamp-2
                            ">
                                {blog.title}
                            </span>
                            <p className="
                                text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] font-[450]
                                mt-[0.6rem] sm:mt-[0.5rem] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                                line-clamp-2
                            ">
                                {blog.desc}
                            </p>
                            <div className="
                                flex justify-between items-center border-t border-[#e6e6e6]
                                mt-[0.8rem] sm:mt-[0.8rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                pt-[0.8rem] sm:pt-[0.8rem] lg:pt-[0.8rem] xl:pt-[0.9rem] 2xl:pt-[1rem]
                            ">
                                <Link href={`/blogs/${blog.slug}`} className="
                                    bg-[#e9202a] text-white font-[450] rounded-[3px] hover:bg-[#d6151f] transition block w-max
                                    text-[0.95rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                    px-[1rem]
                                    py-[0.25rem]
                                ">
                                    Read More
                                </Link>
                                <span className="
                                    text-[0.8rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                ">
                                    {blog.date}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default BlogsListing
