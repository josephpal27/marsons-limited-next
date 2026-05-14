import BlogsBanner from "@/components/blogs/BlogsBanner";
import BlogsListing from "@/components/blogs/BlogsListing";

export const metadata = {
    title: "Our Blogs - Marsons Limited",
    description: "",
};

export default function Blogs() {
    return (
        <>
            <BlogsBanner />
            <BlogsListing />
        </>
    );
}