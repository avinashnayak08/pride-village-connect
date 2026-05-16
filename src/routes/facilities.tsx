import { createFileRoute } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { useLang, ui } from "@/lib/lang";
import { facilities } from "@/data/seed";

export const Route = createFileRoute("/facilities")({ component: FacilitiesPage });

function FacilitiesPage() {
  const { t } = useLang();
  return (
    <>
      <AppHeader subtitle={t(ui.facilities)} />
      <main className="p-4 grid grid-cols-2 gap-3">
        {facilities.map((f) => (
          <div key={f.id} className="rounded-2xl bg-white border border-orange-100 p-4 shadow-sm">
            <div className="text-3xl">{f.emoji}</div>
            <h3 className="mt-2 text-sm font-bold text-slate-800">{t(f.name)}</h3>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">{t(f.description)}</p>
          </div>
        ))}
      </main>
    </>
  );
}
