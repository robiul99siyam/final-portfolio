import Navbar from "@/components/main/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
export const lnter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
  href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
});
export const metadata = {
  title: "my portfolio",
  description: "This is a portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lnter.className}`}>
      <body className="bg-[#030014] overflow-x-hidden overflow-y-scroll">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
