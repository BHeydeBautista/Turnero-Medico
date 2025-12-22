export function Footer() {
  return (
    <footer className="bg-slate-100 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm text-slate-600">

        <div>
          <h4 className="font-semibold text-slate-800 mb-3">
            Enlaces Rápidos
          </h4>
          <ul className="space-y-2">
            <li>Inicio</li>
            <li>Turnos</li>
            <li>Obra Social</li>
            <li>Reportes</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-800 mb-3">
            Soporte
          </h4>
          <ul className="space-y-2">
            <li>Preguntas Frecuentes</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-800 mb-3">
            Contacto
          </h4>
          <ul className="space-y-2">
            <li>Email: soporte@gestionmedica.com</li>
            <li>Tel: +54 11 1234 5678</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-slate-500 py-4 border-t">
        © 2024 Gestión Médica. Todos los derechos reservados.
      </div>
    </footer>
  );
}
