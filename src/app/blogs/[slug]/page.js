import BlogDetailsBanner from "@/components/blogs/BlogDetailsBanner";
import { blogsData } from "@/data/blogsData";
import { notFound } from "next/navigation";

// Generate static pages
export async function generateStaticParams() {
    return blogsData.map((item) => ({
        slug: item.slug,
    }));
}

// Dynamic SEO per product
export async function generateMetadata({ params }) {
    const { slug } = await params;

    const blog = blogsData.find(
        (item) => item.slug === slug
    );

    if (!blog) {
        return {
            title: "Blog Not Found - Marsons Limited",
            description: "",
        };
    }

    return {
        title: blog.title + " - Marsons Limited",
        description: blog.desc,
    };
}

export default async function BlogDetails({ params }) {

    const { slug } = await params;

    const blog = blogsData.find(
        (item) => item.slug === slug
    );

    // If Not Found → 404
    if (!blog) return notFound();

    return (
        <>
            <BlogDetailsBanner blog={blog} />
        </>
    );
}