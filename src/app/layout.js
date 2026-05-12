import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import MyNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StockPrice from "@/components/StockPrice";

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
        <StockPrice />
        {children}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
        />
      </body>
    </html>
  );
}
