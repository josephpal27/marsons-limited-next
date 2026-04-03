import Footer from "@/components/Footer";
import MyNavbar from "@/components/Navbar";
import Facility from "@/components/products/Facility";
import GetInTouch from "@/components/products/GetInTouch";
import ProductsBanner from "@/components/products/ProductsBanner";
import QualityControl from "@/components/products/QualityControl";
import RelatedProducts from "@/components/products/RelatedProducts";
import TechnicalSpecifications from "@/components/products/TechnicalSpecifications";
import Transformers from "@/components/products/Transformers";
import { productsData } from "@/data/productsData";
import { notFound } from "next/navigation";

// Dynamic Meta data
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData =  productsData.find(item => item.slug === slug);

  if (!pageData) {
    return {
      title: "Not Found - Marsons Limited",
    };
  }

  return {
    title: `${pageData.title} - Marsons Limited`,
    description: ``,
  };
}

export default async function Products({ params }) {

    const { slug } = await params;
    const product = productsData.find(item => item.slug === slug);
    if (!product) {
        return notFound();
    }

    return (
        <>
            <MyNavbar />
            <ProductsBanner title={product?.title} range={product?.range} />
            <Transformers data={product} />
            <TechnicalSpecifications specs={product?.technicalSpecs} />
            <Facility />
            <RelatedProducts />
            <QualityControl />
            <GetInTouch />
            <Footer />
        </>
    );
}