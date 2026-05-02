import MarsonsGreenOverview from "@/components/marsons-green/MarsonsGreenOverview";
import ProductsBanner from "@/components/products/ProductsBanner";
import { marsonsGreenData } from "@/data/marsonsGreenData";
import { notFound } from "next/navigation";

// Generate static pages
export async function generateStaticParams() {
    return marsonsGreenData.map((item) => ({
        slug: item.slug,
    }));
}

// Dynamic SEO per product
export async function generateMetadata({ params }) {
    const { slug } = await params;

    const product = marsonsGreenData.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return {
            title: "Product Not Found - Marsons Limited",
            description: "",
        };
    }

    return {
        title: product.title + " - Marsons Limited",
        description: product.desc,
    };
}

export default async function MarsonsGreen({ params }) {

    const { slug } = await params;

    const product = marsonsGreenData.find(
        (item) => item.slug === slug
    );

    // If Not Found → 404
    if (!product) return notFound();

    return (
        <>
            <ProductsBanner title={product?.title} range={""} />
            <MarsonsGreenOverview />
        </>
    );
}