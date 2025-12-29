"use client";

import { useState } from "react";
import Link from "next/link";
import { NAVBAR_LINKS } from "./navbar.links";
import { Menu, X } from "lucide-react";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="flex items-center justify-between h-16 px-4">
        <span className="font-semibold">🩺 Gestión Médica</span>

        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="px-4 pb-4 space-y-2">
          {NAVBAR_LINKS.map((link) => (
            <Link
              key={link.text}
              href={link.url!}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium"
            >
              {link.text}
            </Link>
          ))}

          <Link
            href="/login"
            className="block mt-2 bg-white text-blue-700 text-center py-2 rounded-md font-semibold"
          >
            Iniciar sesión
          </Link>
        </nav>
      )}
    </header>
  );
}
