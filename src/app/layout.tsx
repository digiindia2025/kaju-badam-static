import { ReactNode } from "react";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import { CartProvider } from '../Context/CartContext';
// import header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DryFruits E-commerce",
  description: "The best place to buy dry fruits online.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <CartProvider>
           {/* ✅ Use Header directly without client-wrapper */}
           {/* <Header/> */}
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
