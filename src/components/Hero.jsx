import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import FloatingShapes from "./FloatingShapes";
import IllusionAsset from "./IllusionAsset";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.stripe} aria-hidden="true">
        <span className={styles.stripeBand} />
        <span className={styles.stripeBand} />
        <span className={styles.stripeBand} />
      </div>

      <div className="glow-field" aria-hidden="true">
        <span className={`glow-blob glow-blob--crimson glow-blob--pulse ${styles.blobA}`} />
        <span className={`glow-blob glow-blob--violet glow-blob--pulse ${styles.blobB}`} />
        <span className={`glow-blob glow-blob--cyan glow-blob--pulse ${styles.blobC}`} />
      </div>

      <FloatingShapes />

      <div className={`shell ${styles.heroGrid}`}>
        <div className={styles.inner}>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("hero.eyebrow")}
          </motion.span>

          <motion.h1
            className={`display-xl gradient-text ${styles.headline}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {t("hero.headline")}
          </motion.h1>

          <motion.p
            className={`body-md ${styles.subtitle}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            <a href="#register" className="btn-pill">
              {t("hero.ctaPrimary")}
            </a>
            <a href="#mockup" className="btn-ghost">
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>

          <motion.div
            className={styles.countdownBlock}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <span className={styles.countdownLabel}>{t("hero.countdownLabel")}</span>
            <CountdownTimer />
          </motion.div>
        </div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <IllusionAsset variant="rings" />
        </motion.div>
      </div>
    </section>
  );
}
