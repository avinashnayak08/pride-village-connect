import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "en" | "kn";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T extends { en: string; kn: string }>(b: T) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (saved === "en" || saved === "kn") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = <T extends { en: string; kn: string }>(b: T) => b[lang];

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}

export const ui = {
  appName: { en: "Shaale Namma Pride", kn: "ಶಾಲೆ ನಮ್ಮ ಹೆಮ್ಮೆ" },
  tagline: { en: "Our school, our pride", kn: "ನಮ್ಮ ಶಾಲೆ, ನಮ್ಮ ಹೆಮ್ಮೆ" },
  home: { en: "Home", kn: "ಮುಖಪುಟ" },
  meals: { en: "Meals", kn: "ಊಟ" },
  facilities: { en: "Facilities", kn: "ಸೌಲಭ್ಯಗಳು" },
  stars: { en: "Student Stars", kn: "ತಾರೆಯರು" },
  feedback: { en: "Feedback", kn: "ಪ್ರತಿಕ್ರಿಯೆ" },
  notices: { en: "Latest Notices", kn: "ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳು" },
  todayMeal: { en: "This week's menu", kn: "ಈ ವಾರದ ಮೆನು" },
  calories: { en: "kcal", kn: "ಕ್ಯಾಲೋರಿ" },
  views: { en: "views", kn: "ವೀಕ್ಷಣೆಗಳು" },
  shareFeedback: { en: "Share your feedback", kn: "ನಿಮ್ಮ ಅಭಿಪ್ರಾಯ" },
  yourName: { en: "Your name", kn: "ನಿಮ್ಮ ಹೆಸರು" },
  yourMessage: { en: "Your message", kn: "ನಿಮ್ಮ ಸಂದೇಶ" },
  rating: { en: "Rating", kn: "ರೇಟಿಂಗ್" },
  submit: { en: "Submit", kn: "ಕಳುಹಿಸಿ" },
  recentFeedback: { en: "Recent feedback", kn: "ಇತ್ತೀಚಿನ ಪ್ರತಿಕ್ರಿಯೆಗಳು" },
  installApp: { en: "Install App", kn: "ಅಪ್ಲಿಕೇಶನ್ ಅಳವಡಿಸಿ" },
  studentsCount: { en: "Students", kn: "ವಿದ್ಯಾರ್ಥಿಗಳು" },
  teachersCount: { en: "Teachers", kn: "ಶಿಕ್ಷಕರು" },
  since: { en: "Since", kn: "ಸ್ಥಾಪನೆ" },
};
