import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Footer.module.css";

const COLUMN_IDS = ["championship", "participants", "organizers", "resources", "legal", "contact"];

const COLUMN_LINK_IDS = {
  championship: ["tracks", "timeline", "prizes", "register"],
  participants: ["rules", "criteria", "mentors", "bootcamp"],
  organizers: ["school", "partners", "media", "volunteers"],
  resources: ["pitchDeck", "budget", "faq", "contact"],
  legal: ["terms", "privacy", "cookies"],
  contact: ["email", "phone", "address"],
};

const SOCIALS = [
  { label: "Telegram", href: "#", glyph: "T" },
  { label: "Instagram", href: "#", glyph: "I" },
  { label: "LinkedIn", href: "#", glyph: "L" },
  { label: "YouTube", href: "#", glyph: "Y" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.grid}>
          {COLUMN_IDS.map((columnId) => (
            <div key={columnId} className={styles.column}>
              <h4 className={styles.columnTitle}>{t(`footer.columns.${columnId}.title`)}</h4>
              <ul className={styles.linkList}>
                {COLUMN_LINK_IDS[columnId].map((linkId) => (
                  <li key={linkId}>
                    <a href="#" className={styles.link}>
                      {t(`footer.columns.${columnId}.links.${linkId}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="hairline-divider" />

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} Target International School. {t("footer.rightsReserved")}
          </span>
          <div className={styles.socials}>
            {SOCIALS.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} className={styles.socialIcon}>
                {social.glyph}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
