// src/app/layout.js
import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartProvider } from "@/context/CartContext";
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'DryFruits E-commerce',
  description: 'The best place to buy dry fruits online.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <CartProvider>{children}</CartProvider>
        <Footer />
      </body>
    </html>
  );
}
