import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const productSans = localFont({
  src: [
    { path: "./fonts/ProductSans-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/ProductSans-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./fonts/ProductSans-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/ProductSans-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./fonts/ProductSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/ProductSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/ProductSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/ProductSans-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./fonts/ProductSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/ProductSans-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./fonts/ProductSans-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/ProductSans-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-product-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vast",
  description: " Your one-stop platform for services, rides, payments, and shopping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${productSans.variable} antialiased`}>
        <Navbar/>
        <Toaster position="top-center" />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
