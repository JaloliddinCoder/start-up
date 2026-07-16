import { motion } from "framer-motion";
import { Award, BadgePercent } from "lucide-react";
import CardOrnament from "./CardOrnament";
import TiltCard from "./TiltCard";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Prizes.module.css";

const PRIZES = [
  { id: "second", tier: "silver", glowKey: "glowSilver", text: "gradient-text--silver" },
  { id: "first", tier: "gold", glowKey: "glowGold", text: "gradient-text--gold", featured: true },
  { id: "third", tier: "bronze", glowKey: "glowBronze", text: "gradient-text--bronze" },
];

export default function Prizes() {
  const { t } = useLanguage();

  return (
    <section id="prizes" className="section">
      <div className="shell">
        <div className="section__head section__head--center">
          <div className="section__eyebrow eyebrow">{t("prizes.eyebrow")}</div>
          <h2 className="section__title">{t("prizes.title")}</h2>
          <p className="section__desc">{t("prizes.desc")}</p>
        </div>

        <div className={styles.podium}>
          {PRIZES.map((prize, index) => (
            <motion.div
              key={prize.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <TiltCard className={`${styles.card} gradient-border ${prize.featured ? styles.featured : ""}`}>
                <CardOrnament variant="orb" tone={prize.tier} />
                <div className={`${styles.glow} ${styles[prize.glowKey]}`} aria-hidden="true" />
                <div className={styles.content}>
                  <span className={styles.tier}>
                    <Award size={16} strokeWidth={2} />
                    {t(`prizes.items.${prize.id}.place`)}
                  </span>
                  <div className={`${styles.amount} ${prize.text}`}>{t(`prizes.items.${prize.id}.amount`)}</div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.incentive}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className={styles.incentiveIcon}>
            <BadgePercent size={18} strokeWidth={2} />
          </span>
          <p className={styles.incentiveText}>
            {t("prizes.incentiveBefore")}
            <strong>{t("prizes.incentiveBold")}</strong>
            {t("prizes.incentiveAfter")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
