import InvestorAccordion from "@/components/investor-corner/InvestorAccordion";
import InvestorCornerBanner from "@/components/investor-corner/InvestorCornerBanner";
import MyNavbar from "@/components/Navbar";
import { investorCornerData } from "@/data/investorCornerData";
import { notFound } from "next/navigation";

export default async function InvestorCorner({ params }) {

    const { slug } = await params;

    const pageData = investorCornerData[slug];

    if (!pageData) {
        return notFound();
    }

    return (
        <>
            <MyNavbar />
            <InvestorCornerBanner
                title={pageData.banner.title}
                background={pageData.banner.image}
            />
            <InvestorAccordion
                accordionData={pageData.accordion}
            />
        </>
    );
}