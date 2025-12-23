"use client";

export default function Hero() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          ¡Hola Secretaria!
        </h1>
        <p className="text-slate-500 mt-1">
          Bienvenida a tu panel de gestión.
        </p>
      </div>

      <div className="w-40 h-24 bg-slate-100 rounded-lg" />
    </div>
  );
}
