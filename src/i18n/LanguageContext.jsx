import { createContext, useContext, useMemo, useState } from "react";
import translations, { DEFAULT_LANGUAGE } from "./translations";

const LanguageContext = createContext(null);

function resolvePath(obj, path) {
  return path.split(".").reduce((node, key) => (node && typeof node === "object" ? node[key] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANGUAGE);

  const value = useMemo(() => {
    const t = (path) => {
      const value = resolvePath(translations[lang], path);
      if (value !== undefined) return value;

      // Fall back to the default language so a missing key never renders blank.
      const fallback = resolvePath(translations[DEFAULT_LANGUAGE], path);
      return fallback !== undefined ? fallback : path;
    };

    return { lang, setLang, t };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
