import { motion } from "framer-motion";
import CardOrnament from "./CardOrnament";
import TiltCard from "./TiltCard";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./MetricsGrid.module.css";

const METRICS = [
  { id: "prizePool", tone: "crimson" },
  { id: "participants", tone: "violet", compact: true },
  { id: "teams", tone: "cyan", compact: true },
];

export default function MetricsGrid() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="shell">
        <div className="section__head">
          <div className="section__eyebrow eyebrow">{t("metrics.eyebrow")}</div>
          <h2 className="section__title">{t("metrics.title")}</h2>
          <p className="section__desc">{t("metrics.desc")}</p>
        </div>

        <div className={styles.grid}>
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <TiltCard className={`${styles.card} gradient-border`}>
                <CardOrnament variant="ring" tone={metric.tone} />
                <div className={`${styles.value} gradient-text ${metric.compact ? styles.valueCompact : ""}`}>
                  {t(`metrics.items.${metric.id}.value`)}
                </div>
                <div className={styles.label}>{t(`metrics.items.${metric.id}.label`)}</div>
                <p className={styles.desc}>{t(`metrics.items.${metric.id}.desc`)}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
