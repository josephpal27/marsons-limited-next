import ContactBanner from "@/components/contact/ContactBanner";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactMap from "@/components/contact/ContactMap";
import Footer from "@/components/Footer";
import MyNavbar from "@/components/Navbar";

export default function Contact() {
    return (
        <>
            <MyNavbar />
            <ContactBanner />
            <ContactDetails />
            <ContactMap />
            <Footer />
        </>
    );
}