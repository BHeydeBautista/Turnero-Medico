import Navbar from "@/components/layout/navbar/Navbar";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Mi App",
  description: "Descripción",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
