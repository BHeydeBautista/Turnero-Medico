import { HeroContent } from "./HeroContent";
import { HeroIllustration } from "./HeroIllustration";

export function HeroSection() {
  return (
    <section className="
      relative overflow-hidden
      bg-gradient-to-br from-blue-50 via-blue-100 to-white
      py-24
    ">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <HeroContent />
        <HeroIllustration />
      </div>
    </section>
  );
}
