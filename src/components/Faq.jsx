import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Faq.module.css";

const FAQ_IDS = ["q1", "q2", "q3", "q4"];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faq" className="section">
      <div className="shell">
        <div className="section__head">
          <div className="section__eyebrow eyebrow">{t("faq.eyebrow")}</div>
          <h2 className="section__title">{t("faq.title")}</h2>
        </div>

        <div className={styles.accordion}>
          {FAQ_IDS.map((id, index) => {
            const isOpen = index === openIndex;
            return (
              <motion.div
                key={id}
                className={styles.item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggle(index)}
                >
                  <span className={styles.question}>{t(`faq.items.${id}.question`)}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>+</span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={styles.panel}
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className={styles.panelInner}>
                    <p className={styles.answer}>{t(`faq.items.${id}.answer`)}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
