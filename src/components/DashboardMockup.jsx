import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./DashboardMockup.module.css";

const ROWS = [
  { icon: "◆", title: "Loyihani yuborish", meta: "EdTech · 12-jamoa", keys: ["⌘", "K"] },
  { icon: "◈", title: "Mentor bilan uchrashuv", meta: "Bootcamp · Hafta 3", keys: ["⌘", "M"] },
  { icon: "▣", title: "Pitch-deck yuklash", meta: "Grand Final tayyorgarligi", keys: ["⏎"] },
  { icon: "◐", title: "Jamoa a'zolarini boshqarish", meta: "3-5 ta a'zo faol", keys: ["⌘", "U"] },
  { icon: "▤", title: "Baholash natijalari", meta: "Selection bosqichi", keys: ["⌘", "R"] },
];

export default function DashboardMockup() {
  const [activeIndex, setActiveIndex] = useState(0);

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
            <span className={styles.titleText}>Startup Chempionati — Boshqaruv paneli</span>
            <span />
          </div>

          <div className={styles.searchRow}>
            <span className={styles.searchIcon}>⌕</span>
            <span className={styles.searchPlaceholder}>Buyruq yoki loyiha qidirish…</span>
            <span className={styles.searchKeycap}>⌘ K</span>
          </div>

          <div className={styles.rows}>
            {ROWS.map((row, index) => (
              <button
                key={row.title}
                type="button"
                className={`${styles.row} ${index === activeIndex ? styles.rowActive : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <span className={styles.rowIcon}>{row.icon}</span>
                <span className={styles.rowText}>
                  <span className={styles.rowTitle}>{row.title}</span>
                  <span className={styles.rowMeta}>{row.meta}</span>
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
