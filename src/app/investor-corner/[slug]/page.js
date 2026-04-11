import Footer from "@/components/Footer";
import InvestorAccordion from "@/components/investor-corner/InvestorAccordion";
import InvestorCornerBanner from "@/components/investor-corner/InvestorCornerBanner";
import MyNavbar from "@/components/Navbar";
import { investorCornerData } from "@/data/investorCornerData";
import { notFound } from "next/navigation";

// Generate static pages
export async function generateStaticParams() {
  return Object.keys(investorCornerData).map((slug) => ({
    slug,
  }));
}

// Dynamic SEO per page
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const pageData = investorCornerData[slug];

  if (!pageData) {
    return {
      title: "No Data Found - Marsons Limited",
      description: "",
    };
  }

  return {
    title: pageData.banner.title + " - Marsons Limited",
    description: "",
  };
}

export default async function InvestorCorner({ params }) {

  const { slug } = await params;

  const pageData = investorCornerData[slug];

  if (!pageData) return notFound();

    return (
        <>
            <MyNavbar />
            <InvestorCornerBanner
                title={pageData.banner.title}
                background={pageData.banner.image}
            />
            <InvestorAccordion
                accordionData={pageData.accordion}
                slug={slug}
            />
            <Footer />
        </>
    );
}