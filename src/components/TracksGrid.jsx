import { motion } from "framer-motion";
import CardOrnament from "./CardOrnament";
import TiltCard from "./TiltCard";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./TracksGrid.module.css";

const TRACKS = [
  { id: "edtech", icon: "◔", accent: "blue" },
  { id: "greentech", icon: "❖", accent: "green" },
  { id: "ai", icon: "◈", accent: "purple" },
  { id: "social", icon: "◑", accent: "red" },
];

export default function TracksGrid() {
  const { t } = useLanguage();

  return (
    <section id="tracks" className="section">
      <div className="shell">
        <div className="section__head">
          <div className="section__eyebrow eyebrow">{t("tracks.eyebrow")}</div>
          <h2 className="section__title">{t("tracks.title")}</h2>
          <p className="section__desc">{t("tracks.desc")}</p>
        </div>

        <div className={styles.grid}>
          {TRACKS.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <TiltCard className={`${styles.card} gradient-border`}>
                <CardOrnament variant="cube" tone={track.accent} />
                <div className={`${styles.iconTile} ${styles[track.accent]}`}>
                  {track.icon}
                </div>
                <h3 className={styles.title}>{t(`tracks.items.${track.id}.title`)}</h3>
                <p className={styles.desc}>{t(`tracks.items.${track.id}.desc`)}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
