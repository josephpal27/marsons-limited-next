import "./globals.css";

export const metadata = {
  title: "Setting Power In Motion - Marsons Limited",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
