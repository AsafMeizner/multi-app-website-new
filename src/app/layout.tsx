"use client";

import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

const disallowedPaths = ['urlShortner/', 'scouting', '3d'];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (!disallowedPaths.some(path => pathname.includes(path) && pathname != path)) {
    const isNavbar = true;
  } else {
    const isNavbar = false;
  }
  let isNavbar: boolean;

  if (!disallowedPaths.some(path => pathname.includes(path) && pathname != path)) {
    isNavbar = true;
  } else {
    isNavbar = false;
  }

  return (
    <html lang="en">
      <meta name="google-site-verification" content="CcXnsKnCEzv5NFMffTlZNPIOqGpEwm2H5G7aMYnMjdk" />
      <body className={inter.className}>
        {isNavbar && <Navbar />}
        {children}
        <ToastContainer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
