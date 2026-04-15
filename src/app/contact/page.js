import ContactBanner from "@/components/contact/ContactBanner";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactMap from "@/components/contact/ContactMap";

export const metadata = {
  title: "Contact Us - Marsons Limited",
  description: "",
};

export default function Contact() {
    return (
        <>
            <ContactBanner />
            <ContactDetails />
            <ContactMap />
        </>
    );
}