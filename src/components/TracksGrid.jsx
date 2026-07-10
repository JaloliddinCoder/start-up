import { motion } from "framer-motion";
import CardOrnament from "./CardOrnament";
import TiltCard from "./TiltCard";
import styles from "./TracksGrid.module.css";

const TRACKS = [
  {
    icon: "◔",
    accent: "blue",
    title: "EdTech",
    desc: "Ta'lim jarayonini raqamlashtiruvchi va o'qishni yanada samarali qiluvchi yechimlar.",
  },
  {
    icon: "❖",
    accent: "green",
    title: "GreenTech",
    desc: "Ekologik barqarorlik va resurslarni tejashga qaratilgan innovatsion loyihalar.",
  },
  {
    icon: "◈",
    accent: "purple",
    title: "AI Solutions",
    desc: "Sun'iy intellekt asosida real muammolarni hal qiluvchi mahsulotlar.",
  },
  {
    icon: "◑",
    accent: "red",
    title: "Social Impact",
    desc: "Jamiyatga ijtimoiy foyda keltiruvchi va muammolarni hal qiluvchi startaplar.",
  },
];

export default function TracksGrid() {
  return (
    <section id="tracks" className="section">
      <div className="shell">
        <div className="section__head">
          <div className="section__eyebrow eyebrow">Yo'nalishlar</div>
          <h2 className="section__title">Loyihangiz uchun trek tanlang</h2>
          <p className="section__desc">
            To'rtta asosiy kategoriya bo'yicha g'oyangizni taqdim eting va mos
            mentorlar bilan ishlang.
          </p>
        </div>

        <div className={styles.grid}>
          {TRACKS.map((track, index) => (
            <motion.div
              key={track.title}
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
                <h3 className={styles.title}>{track.title}</h3>
                <p className={styles.desc}>{track.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
