import { createFileRoute, Link } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { useLang, ui } from "@/lib/lang";
import { meals, facilities, notices, schoolStats } from "@/data/seed";
import { Utensils, Building2, Star, Eye } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { t } = useLang();
  const today = meals[0];

  return (
    <>
      <AppHeader />
      <main className="p-4 space-y-5">
        {/* stats */}
        <section className="grid grid-cols-3 gap-2">
          <Stat label={t(ui.studentsCount)} value={schoolStats.students} />
          <Stat label={t(ui.teachersCount)} value={schoolStats.teachers} />
          <Stat label={t(ui.since)} value={schoolStats.established} />
        </section>

        {/* today meal card */}
        <Link to="/meals" className="block rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-4 text-white shadow-lg">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-90">
            <Utensils className="h-4 w-4" /> {t(today.day)} · {t(ui.todayMeal)}
          </div>
          <ul className="mt-2 space-y-0.5 text-sm font-medium">
            {today.items.map((it, i) => <li key={i}>• {t(it)}</li>)}
          </ul>
          <div className="mt-2 text-xs opacity-90">{today.calories} {t(ui.calories)}</div>
        </Link>

        {/* facilities preview */}
        <section>
          <SectionTitle icon={<Building2 className="h-4 w-4" />} title={t(ui.facilities)} link="/facilities" />
          <div className="grid grid-cols-3 gap-2">
            {facilities.slice(0, 6).map((f) => (
              <div key={f.id} className="rounded-xl bg-white border border-orange-100 p-3 text-center shadow-sm">
                <div className="text-2xl">{f.emoji}</div>
                <div className="mt-1 text-[11px] font-semibold text-slate-700 leading-tight">{t(f.name)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* notices */}
        <section>
          <SectionTitle icon={<Star className="h-4 w-4" />} title={t(ui.notices)} />
          <div className="space-y-2">
            {notices.map((n) => (
              <article key={n.id} className="rounded-xl bg-white border border-slate-100 p-3 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-800">{t(n.title)}</h3>
                <p className="mt-0.5 text-xs text-slate-600 leading-relaxed">{t(n.body)}</p>
                <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400">
                  <span>{n.date}</span>
                  <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {n.views} {t(ui.views)}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-white border border-orange-100 p-3 text-center shadow-sm">
      <div className="text-lg font-bold text-orange-600">{value}</div>
      <div className="text-[10px] uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}

function SectionTitle({ icon, title, link }: { icon: React.ReactNode; title: string; link?: string }) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <h2 className="flex items-center gap-1.5 text-sm font-bold text-slate-800">{icon} {title}</h2>
      {link && <Link to={link} className="text-xs font-medium text-orange-600">→</Link>}
    </div>
  );
}
