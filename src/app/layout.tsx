import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ManualsHub - Free Product Manuals & User Guides",
  description: "Find free product manuals, user guides, and documentation for thousands of products from Samsung, Apple, Sony, LG, and more. Download PDFs instantly.",
  keywords: "product manuals, user guides, instruction manuals, PDF manuals, Samsung manual, Apple manual, Sony manual, free manuals",
  openGraph: {
    title: "ManualsHub - Free Product Manuals & User Guides",
    description: "Find free product manuals, user guides, and documentation for thousands of products.",
    type: "website",
    locale: "en_US",
    siteName: "ManualsHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "ManualsHub - Free Product Manuals & User Guides",
    description: "Find free product manuals, user guides, and documentation for thousands of products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
