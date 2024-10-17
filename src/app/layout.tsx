import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/bootstrap-grid.min.css";
import "../styles/globals.scss";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karin's Portfolio",
  description: "Presentation of Karin Ljunggren, frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="site_content" id="siteContent">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
