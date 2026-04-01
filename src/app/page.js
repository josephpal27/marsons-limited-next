import Footer from "@/components/Footer";
import HomeBanner from "@/components/home/HomeBanner";
import LatestNews from "@/components/home/LatestNews";
import OurGoals from "@/components/home/OurGoals";
import OurProducts from "@/components/home/OurProducts";
import PoweringIndustries from "@/components/home/PoweringIndusties";
import MyNavbar from "@/components/Navbar";
import OurClientLogos from "@/components/OurClientLogos";

export default function Home() {
  return (
    <>
      <MyNavbar />
      <HomeBanner />
      <PoweringIndustries />
      <OurGoals />
      <OurProducts />
      <LatestNews />
      <OurClientLogos />
      <Footer />
    </>
  );
}