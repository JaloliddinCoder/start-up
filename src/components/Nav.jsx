import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "#tracks", label: "Yo'nalishlar" },
  { href: "#prizes", label: "Sovrinlar" },
  { href: "#timeline", label: "Jarayon" },
  { href: "#faq", label: "Savollar" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={`shell ${styles.navInner}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark}>▲</span>
          Target Startup
        </a>

        <nav className={styles.links}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#register" className="btn-pill">
          Ro'yxatdan o'tish
        </a>
      </div>
    </header>
  );
}
