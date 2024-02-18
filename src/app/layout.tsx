"use client";

import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {!(pathname.includes('urlShortner/') && pathname != 'urlShortner/') && !pathname.includes('scouting') && <Navbar />}
        {children}
        <ToastContainer />
        <SpeedInsights/>
      </body>
    </html>
  );
}
