import { motion } from "framer-motion";
import CardOrnament from "./CardOrnament";
import TiltCard from "./TiltCard";
import styles from "./MetricsGrid.module.css";

const METRICS = [
  { value: "20.000.000 so'm", label: "Umumiy mukofot jamg'armasi", desc: "1, 2 va 3-o'rin jamoalari orasida taqsimlanadi.", tone: "crimson" },
  { value: "150", label: "Kutilayotgan ishtirokchilar", desc: "Tinchlik filialida jamlanadigan startap ishtirokchilari.", tone: "violet" },
  { value: "50", label: "Raqobatdosh jamoalar", desc: "Saralovdan o'tib asosiy tadbirda ishtirok etadigan jamoalar.", tone: "cyan" },
];

export default function MetricsGrid() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section__head">
          <div className="section__eyebrow eyebrow">Chempionat haqida</div>
          <h2 className="section__title">Raqamlarda miqyos</h2>
          <p className="section__desc">
            Start-up Tinchlik — maktab o'quvchilari uchun O'zbekistondagi eng
            yirik tadbirkorlik tanlovi.
          </p>
        </div>

        <div className={styles.grid}>
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <TiltCard className={`${styles.card} gradient-border`}>
                <CardOrnament variant="ring" tone={metric.tone} />
                <div className={`${styles.value} gradient-text`}>{metric.value}</div>
                <div className={styles.label}>{metric.label}</div>
                <p className={styles.desc}>{metric.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
