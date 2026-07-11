import { motion } from "framer-motion";
import { Award, BadgePercent } from "lucide-react";
import CardOrnament from "./CardOrnament";
import TiltCard from "./TiltCard";
import styles from "./Prizes.module.css";

const PRIZES = [
  {
    place: "2-o'rin jamoasi uchun",
    amount: "7.000.000 so'm",
    tier: "silver",
    glow: styles.glowSilver,
    text: "gradient-text--silver",
  },
  {
    place: "1-o'rin jamoasi uchun",
    amount: "10.000.000 so'm",
    tier: "gold",
    glow: styles.glowGold,
    text: "gradient-text--gold",
    featured: true,
  },
  {
    place: "3-o'rin jamoasi uchun",
    amount: "5.000.000 so'm",
    tier: "bronze",
    glow: styles.glowBronze,
    text: "gradient-text--bronze",
  },
];

export default function Prizes() {
  return (
    <section id="prizes" className="section">
      <div className="shell">
        <div className="section__head section__head--center">
          <div className="section__eyebrow eyebrow">Asosiy Yutuqlar</div>
          <h2 className="section__title">G'olib jamoalarni kutmoqda</h2>
          <p className="section__desc">
            Final bosqichida g'olib bo'lgan jamoalar quyidagi pul mukofotlari,
            diplom va sertifikatlar bilan taqdirlanadi.
          </p>
        </div>

        <div className={styles.podium}>
          {PRIZES.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <TiltCard className={`${styles.card} gradient-border ${prize.featured ? styles.featured : ""}`}>
                <CardOrnament variant="orb" tone={prize.tier} />
                <div className={`${styles.glow} ${prize.glow}`} aria-hidden="true" />
                <div className={styles.content}>
                  <span className={styles.tier}>
                    <Award size={16} strokeWidth={2} />
                    {prize.place}
                  </span>
                  <div className={`${styles.amount} ${prize.text}`}>{prize.amount}</div>
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
            Barcha qolgan ishtirokchilarga Target IT kurslariga{" "}
            <strong>30% chegirma</strong> taqdim etiladi!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
