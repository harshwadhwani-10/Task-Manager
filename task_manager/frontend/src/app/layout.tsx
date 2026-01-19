
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ThemeProvider from "../components/ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientLayoutShell from "../components/ClientLayoutShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Manager App",
  description: "A professional task manager built with Next.js, Tailwind CSS, and shadcn/ui.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <ClientLayoutShell>
            {children}
          </ClientLayoutShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
