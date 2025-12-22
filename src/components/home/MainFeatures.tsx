import { FeatureCard } from "./FeatureCard";

const FEATURES = [
  {
    title: "Gestión de Turnos",
    description: "Agenda, confirma y reprograma turnos fácilmente.",
    icon: "📅",
  },
  {
    title: "Cargas de Obras Sociales",
    description: "Simplificá los trámites administrativos.",
    icon: "📄",
  },
  {
    title: "Mensajería Automática",
    description: "Confirmaciones vía WhatsApp.",
    icon: "💬",
  },
];

export function MainFeatures() {
  return (
    <section className="py-20 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Funciones Principales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
