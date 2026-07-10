import styles from "./Footer.module.css";

const COLUMNS = [
  {
    title: "Chempionat",
    links: ["Yo'nalishlar", "Jarayon", "Sovrinlar", "Ro'yxatdan o'tish"],
  },
  {
    title: "Ishtirokchilar",
    links: ["Qoidalar", "Baholash mezonlari", "Mentorlar", "Bootcamp"],
  },
  {
    title: "Tashkilotchilar",
    links: ["Target International School", "Hamkorlar", "Media uchun", "Ko'ngillilar"],
  },
  {
    title: "Resurslar",
    links: ["Pitch-deck shabloni", "Byudjet shabloni", "FAQ", "Aloqa"],
  },
  {
    title: "Huquqiy",
    links: ["Foydalanish shartlari", "Maxfiylik siyosati", "Cookie siyosati"],
  },
  {
    title: "Aloqa",
    links: ["info@targetschool.uz", "+998 71 200-00-00", "Toshkent, O'zbekiston"],
  },
];

const SOCIALS = [
  { label: "Telegram", href: "#", glyph: "T" },
  { label: "Instagram", href: "#", glyph: "I" },
  { label: "LinkedIn", href: "#", glyph: "L" },
  { label: "YouTube", href: "#", glyph: "Y" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.grid}>
          {COLUMNS.map((column) => (
            <div key={column.title} className={styles.column}>
              <h4 className={styles.columnTitle}>{column.title}</h4>
              <ul className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.link}>
                      {link}
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
            © {new Date().getFullYear()} Target International School. Barcha huquqlar himoyalangan.
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
