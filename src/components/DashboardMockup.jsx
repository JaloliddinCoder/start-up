import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./DashboardMockup.module.css";

const ROWS = [
  { id: "submit", icon: "◆", keys: ["⌘", "K"] },
  { id: "mentor", icon: "◈", keys: ["⌘", "M"] },
  { id: "pitch", icon: "▣", keys: ["⏎"] },
  { id: "team", icon: "◐", keys: ["⌘", "U"] },
  { id: "results", icon: "▤", keys: ["⌘", "R"] },
];

export default function DashboardMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  return (
    <section id="mockup" className="section">
      <div className="glow-field" aria-hidden="true">
        <span className={`glow-blob glow-blob--violet ${styles.blob}`} />
      </div>
      <div className="shell">
        <motion.div
          className={`${styles.frame} gradient-border`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.titleBar}>
            <div className={styles.dots}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <span className={styles.titleText}>{t("dashboardMockup.titleText")}</span>
            <span />
          </div>

          <div className={styles.searchRow}>
            <span className={styles.searchIcon}>⌕</span>
            <span className={styles.searchPlaceholder}>{t("dashboardMockup.searchPlaceholder")}</span>
            <span className={styles.searchKeycap}>⌘ K</span>
          </div>

          <div className={styles.rows}>
            {ROWS.map((row, index) => (
              <button
                key={row.id}
                type="button"
                className={`${styles.row} ${index === activeIndex ? styles.rowActive : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <span className={styles.rowIcon}>{row.icon}</span>
                <span className={styles.rowText}>
                  <span className={styles.rowTitle}>{t(`dashboardMockup.rows.${row.id}.title`)}</span>
                  <span className={styles.rowMeta}>{t(`dashboardMockup.rows.${row.id}.meta`)}</span>
                </span>
                <span className={styles.keycapGroup}>
                  {row.keys.map((key) => (
                    <span key={key} className={styles.keycap}>
                      {key}
                    </span>
                  ))}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
