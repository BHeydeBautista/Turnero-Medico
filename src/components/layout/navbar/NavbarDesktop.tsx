"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_LINKS } from "./navbar.links";

export default function NavbarDesktop() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="h-16 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          
          {/* Logo / Título */}
          <div className="flex items-center gap-3 text-white font-semibold text-lg">
            <span className="text-xl">🩺</span>
            <span>Gestión Médica</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {NAVBAR_LINKS.map((link) => {
              const active = pathname === link.url;

              return (
                <Link
                  key={link.text}
                  href={link.url!}
                  className={`relative text-sm font-medium transition
                    ${active ? "text-white" : "text-blue-100 hover:text-white"}
                  `}
                >
                  {link.text}

                  {active && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Botón login */}
          <div>
            <Link
              href="/login"
              className="bg-white text-blue-700 text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-50 transition"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
