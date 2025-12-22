import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        <div>
          <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/turnos">Turnos</Link></li>
            <li><Link href="/obra-social">Obra Social</Link></li>
            <li><Link href="/reportes">Reportes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Soporte</h4>
          <ul className="space-y-2">
            <li>Preguntas Frecuentes</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <ul className="space-y-2">
            <li>📧 soporte@gestionmedica.com</li>
            <li>📞 +54 11 1234 5678</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-950 text-center text-xs py-4">
        © 2025 Gestión Médica. Todos los derechos reservados.
      </div>
    </footer>
  );
}
