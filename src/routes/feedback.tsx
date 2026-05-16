import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { AppHeader } from "@/components/AppHeader";
import { useLang, ui } from "@/lib/lang";
import { initialFeedback, type Feedback } from "@/data/seed";
import { Star } from "lucide-react";

export const Route = createFileRoute("/feedback")({ component: FeedbackPage });

const STORAGE_KEY = "feedback_v1";

function FeedbackPage() {
  const { t } = useLang();
  const [list, setList] = useState<Feedback[]>(initialFeedback);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (raw) {
      try { setList(JSON.parse(raw)); } catch {}
    }
  }, []);

  const save = (next: Feedback[]) => {
    setList(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const next: Feedback[] = [
      { id: `fb_${Date.now()}`, name: name.trim(), message: message.trim(), rating, date: new Date().toISOString().slice(0, 10) },
      ...list,
    ];
    save(next);
    setName(""); setMessage(""); setRating(5);
  };

  return (
    <>
      <AppHeader subtitle={t(ui.feedback)} />
      <main className="p-4 space-y-4">
        <form onSubmit={onSubmit} className="rounded-2xl bg-white border border-orange-100 p-4 shadow-sm space-y-3">
          <h2 className="text-sm font-bold text-slate-800">{t(ui.shareFeedback)}</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t(ui.yourName)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-orange-400"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t(ui.yourMessage)}
            rows={3}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-orange-400 resize-none"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-600">{t(ui.rating)}</span>
            <div className="flex gap-1">
              {[1,2,3,4,5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setRating(n)}
                  aria-label={`${n} stars`}
                >
                  <Star className={`h-5 w-5 ${n <= rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}`} />
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className="w-full rounded-lg bg-orange-600 hover:bg-orange-700 py-2 text-sm font-semibold text-white transition-colors">
            {t(ui.submit)}
          </button>
        </form>

        <section>
          <h3 className="mb-2 text-sm font-bold text-slate-800">{t(ui.recentFeedback)}</h3>
          <div className="space-y-2">
            {list.map((f) => (
              <article key={f.id} className="rounded-xl bg-white border border-slate-100 p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-slate-800">{f.name}</h4>
                  <div className="flex">
                    {Array.from({ length: f.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">{f.message}</p>
                <div className="mt-1 text-[10px] text-slate-400">{f.date}</div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
