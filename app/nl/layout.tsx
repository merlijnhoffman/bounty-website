import "../globals.css";
import type { Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#0C0C0E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function DutchLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen font-sans">
        <Header locale="nl" />
        {children}
        <Footer locale="nl" />
      </body>
    </html>
  );
}
