import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/bootstrap-grid.min.css";
import "../styles/globals.scss";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";
import ThemeSwitch from "./components/themeSwitch/ThemeSwitch";

import { Providers } from "./providers";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karin's Portfolio",
  description: "Presentation of Karin Ljunggren, frontend developer.",
};

// If a single element’s attribute or text content is different between the server and the client, you may silence the hydration mismatch warning.
//the <html> element is being updated by next-themes.
//With the provider rendered at the root, all other Client Components throughout your app will be able to consume this context.
// By putting the provider at te root, I am NOT making the entire app a client component

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <NavBar />
      <Providers>
     
          <div className="site_content" id="siteContent">
            <ThemeSwitch />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
