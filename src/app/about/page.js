import AboutBanner from "@/components/about/AboutBanner";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import Highlights from "@/components/about/Highlights";
// import OurClients from "@/components/about/OurClients";
// import OurJourney from "@/components/about/OurJourney";
import VisionMission from "@/components/about/VisionMission";
import MyNavbar from "@/components/Navbar";

export default function About() {
    return (
        <>
            <MyNavbar />
            <AboutBanner />
            <AboutWhatWeDo />
            <Highlights />
            <VisionMission />
            {/* <OurJourney /> */}
            {/* <OurClients /> */}
        </>
    );
}