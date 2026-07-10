import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Faq.module.css";

const FAQ_ITEMS = [
  {
    question: "Kimlar ishtirok eta oladi?",
    answer: "O'zbekistondagi istalgan maktab yoki akademik litsey o'quvchilaridan iborat 2–6 kishilik jamoalar ishtirok etishi mumkin.",
  },
  {
    question: "Ishtirok bepulmi?",
    answer: "Ha, chempionatda ishtirok etish to'liq bepul. Barcha bootcamp va mentorlik dasturlari tashkilotchilar tomonidan qoplanadi.",
  },
  {
    question: "Loyiha g'oyasi tayyor bo'lishi shartmi?",
    answer: "Yo'q. Boshlang'ich g'oya yetarli — bootcamp davomida mentorlar bilan birgalikda uni to'liq mahsulotga aylantirasiz.",
  },
  {
    question: "Qanday hujjatlar talab qilinadi?",
    answer: "Ro'yxatdan o'tishda jamoa a'zolarining ismi, maktab nomi va loyiha qisqacha tavsifi kifoya qiladi.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faq" className="section">
      <div className="shell">
        <div className="section__head">
          <div className="section__eyebrow eyebrow">Savol-javob</div>
          <h2 className="section__title">Ko'p beriladigan savollar</h2>
        </div>

        <div className={styles.accordion}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <motion.div
                key={item.question}
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
                  <span className={styles.question}>{item.question}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>+</span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={styles.panel}
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className={styles.panelInner}>
                    <p className={styles.answer}>{item.answer}</p>
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
