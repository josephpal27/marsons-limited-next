import "bootstrap/dist/css/bootstrap.min.css";
// import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import MyNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const gilroy = localFont({
  src: "../../public/fonts/Gilroy-Bold.woff2",
  variable: "--font-gilroy",
});

export const metadata = {
  title: "Setting Power In Motion - Marsons Limited",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gilroy.variable}`}>
        <MyNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
