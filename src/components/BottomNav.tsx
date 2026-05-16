import { Link, useLocation } from "@tanstack/react-router";
import { Home, Utensils, Building2, Star, MessageSquare } from "lucide-react";
import { useLang, ui } from "@/lib/lang";
import { cn } from "@/lib/utils";

const items = [
  { to: "/", icon: Home, label: ui.home },
  { to: "/meals", icon: Utensils, label: ui.meals },
  { to: "/facilities", icon: Building2, label: ui.facilities },
  { to: "/stars", icon: Star, label: ui.stars },
  { to: "/feedback", icon: MessageSquare, label: ui.feedback },
] as const;

export function BottomNav() {
  const { t } = useLang();
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-orange-100 shadow-[0_-2px_10px_rgba(0,0,0,0.04)]">
      <ul className="grid grid-cols-5 max-w-md mx-auto">
        {items.map((it) => {
          const active = pathname === it.to;
          const Icon = it.icon;
          return (
            <li key={it.to}>
              <Link
                to={it.to}
                className={cn(
                  "flex flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition-colors",
                  active ? "text-orange-600" : "text-slate-500",
                )}
              >
                <Icon className={cn("h-5 w-5", active && "fill-orange-100")} />
                <span>{t(it.label)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
