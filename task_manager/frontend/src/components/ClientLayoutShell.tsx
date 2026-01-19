"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === "/login" || pathname === "/register";
  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
}