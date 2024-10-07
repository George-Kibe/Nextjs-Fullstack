import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Buni Real Estate Consult",
  description: "Buni Real Estate Consult for real estate services including feasibility studies, land appraisal, " +
  "property management, estate agency inter alia. Developed by Realhive Consultants Limited",
  icons: {icon: '/buni-logo.png'}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#000] to-[#DC009E] text-white`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
