import { useLang, ui } from "@/lib/lang";

const iconUrl = "/icon-192.png";

export function AppHeader({ subtitle }: { subtitle?: string }) {
  const { lang, setLang, t } = useLang();
  return (
    <header className="sticky top-0 z-30 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
        <img src={iconUrl} alt="" width={36} height={36} className="rounded-md bg-white/90 p-0.5" />
        <div className="flex-1 min-w-0">
          <h1 className="text-base font-bold leading-tight truncate">{t(ui.appName)}</h1>
          <p className="text-[11px] opacity-90 truncate">{subtitle ?? t(ui.tagline)}</p>
        </div>
        <button
          onClick={() => setLang(lang === "en" ? "kn" : "en")}
          className="text-xs font-semibold bg-white/20 hover:bg-white/30 rounded-full px-3 py-1.5 transition-colors"
          aria-label="Toggle language"
        >
          {lang === "en" ? "ಕನ್ನಡ" : "EN"}
        </button>
      </div>
    </header>
  );
}
