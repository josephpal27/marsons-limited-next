import HomeBanner from "@/components/home/HomeBanner";
import OurGoals from "@/components/home/OurGoals";
import PoweringIndustries from "@/components/home/PoweringIndusties";
import MyNavbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <MyNavbar />
      <HomeBanner />
      <PoweringIndustries />
      <OurGoals />
    </>
  );
}