import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins } from "next/font/google";
import "./globals.css";
import MyNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Setting Power In Motion - Marsons Limited",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MyNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
