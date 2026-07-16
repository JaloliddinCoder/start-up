import { motion } from "framer-motion";
import { Code2, GraduationCap, Users } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Requirements.module.css";

const RULES = [
  { id: "ageLimit", icon: GraduationCap, tone: "violet" },
  { id: "teamSize", icon: Users, tone: "crimson" },
  { id: "codingSkill", icon: Code2, tone: "cyan" },
];

export default function Requirements() {
  const { t } = useLanguage();

  return (
    <section id="requirements" className="section">
      <div className="shell">
        <div className="section__head">
          <div className="section__eyebrow eyebrow">{t("requirements.eyebrow")}</div>
          <h2 className="section__title">{t("requirements.title")}</h2>
          <p className="section__desc">{t("requirements.desc")}</p>
        </div>

        <div className={styles.grid}>
          {RULES.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <motion.div
                key={rule.id}
                className={`${styles.card} gradient-border`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className={`${styles.iconTile} ${styles[rule.tone]}`}>
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className={styles.label}>{t(`requirements.items.${rule.id}.label`)}</h3>
                <p className={styles.desc}>{t(`requirements.items.${rule.id}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
