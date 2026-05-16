import { createFileRoute } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { useLang, ui } from "@/lib/lang";
import { students } from "@/data/seed";

export const Route = createFileRoute("/stars")({ component: StarsPage });

function StarsPage() {
  const { t } = useLang();
  return (
    <>
      <AppHeader subtitle={t(ui.stars)} />
      <main className="p-4 space-y-3">
        {students.map((s) => (
          <article key={s.id} className="flex gap-3 rounded-2xl bg-white border border-orange-100 p-4 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-2xl">
              {s.emoji}
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-slate-800">{s.name}</h3>
              <div className="text-[11px] text-orange-600 font-medium">{s.grade}</div>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">{t(s.achievement)}</p>
            </div>
          </article>
        ))}
      </main>
    </>
  );
}
