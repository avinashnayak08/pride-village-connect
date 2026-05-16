import { createFileRoute } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { useLang, ui } from "@/lib/lang";
import { meals } from "@/data/seed";

export const Route = createFileRoute("/meals")({ component: MealsPage });

function MealsPage() {
  const { t } = useLang();
  return (
    <>
      <AppHeader subtitle={t(ui.todayMeal)} />
      <main className="p-4 space-y-3">
        {meals.map((m, i) => (
          <article key={i} className="rounded-2xl bg-white border border-orange-100 p-4 shadow-sm">
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-bold text-orange-700">{t(m.day)}</h3>
              <span className="text-[11px] text-slate-400">{m.date}</span>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {m.items.map((it, j) => <li key={j}>🍽️ {t(it)}</li>)}
            </ul>
            <div className="mt-3 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
              {m.calories} {t(ui.calories)}
            </div>
          </article>
        ))}
      </main>
    </>
  );
}
