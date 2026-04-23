import HomeBanner from "@/components/home/HomeBanner";
import LatestNews from "@/components/home/LatestNews";
import Manufacturer from "@/components/home/Manufacturer";
import OurGoals from "@/components/home/OurGoals";
import OurProducts from "@/components/home/OurProducts";
import PoweringIndustries from "@/components/home/PoweringIndusties";
import TrustedWorldWide from "@/components/home/TrustedWorldWide";
import WhyMarsons from "@/components/home/WhyMarsons";
import OurClientLogos from "@/components/OurClientLogos";

export const metadata = {
  title: "Setting Power In Motion - Marsons Limited",
  description: "",
};

export default function Home() {
  return (
    <>
      <HomeBanner />
      <WhyMarsons />
      <Manufacturer />
      <PoweringIndustries />
      <OurGoals />
      <OurProducts />
      <TrustedWorldWide />
      <section className="px-[1rem] sm:px-[5%] lg:px-[7%]">
        <OurClientLogos />
      </section>
      <LatestNews />
    </>
  );
}