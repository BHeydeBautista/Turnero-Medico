// src/app/layout.tsx
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
