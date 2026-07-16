import { useEffect, useState } from "react";
import { LANGUAGES } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LINKS = [
    { href: "#tracks", label: t("nav.links.tracks") },
    { href: "#prizes", label: t("nav.links.prizes") },
    { href: "#timeline", label: t("nav.links.timeline") },
    { href: "#faq", label: t("nav.links.faq") },
  ];

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={`shell ${styles.navInner}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark}>▲</span>
          <span className={styles.brandText}>{t("nav.brand")}</span>
        </a>

        <nav className={styles.links}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.navActions}>
          <div className={styles.langSwitch} role="tablist" aria-label="Language">
            {LANGUAGES.map((language) => (
              <button
                key={language.code}
                type="button"
                role="tab"
                aria-selected={lang === language.code}
                className={`${styles.langTab} ${lang === language.code ? styles.langTabActive : ""}`}
                onClick={() => setLang(language.code)}
              >
                {language.label}
              </button>
            ))}
          </div>

          <a href="#register" className={`btn-pill ${styles.navCta}`}>
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
