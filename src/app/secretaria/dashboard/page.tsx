"use client";

import Sidebar from "@/components/secretary/Sidebar";
import Header from "@/components/secretary/Header";
import StatsCards from "@/components/secretary/StatsCards";
import AppointmentsTable from "@/components/secretary/AppointmentsTable";
import RightWidgets from "@/components/secretary/RightWidgets";
import TramitesOS from "@/components/secretary/TramitesOS";

export default function SecretariaPage() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 py-6">
        <div className="grid grid-cols-[240px_1fr] gap-4">
          <Sidebar />

          <main className="space-y-6">
            <Header />

            <StatsCards />

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 space-y-6">
                <AppointmentsTable />
                <TramitesOS />
              </div>

              <div className="col-span-4">
                <RightWidgets />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
