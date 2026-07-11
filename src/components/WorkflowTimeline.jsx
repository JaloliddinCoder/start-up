import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Building2,
  Check,
  ChevronDown,
  ClipboardCheck,
  Coffee,
  Compass,
  Cpu,
  Gift,
  GraduationCap,
  Mic,
  Network,
  PartyPopper,
  Presentation,
  Rocket,
  ShieldCheck,
  Target,
  Trophy,
  Users,
  Video,
} from "lucide-react";
import IllusionAsset from "./IllusionAsset";
import styles from "./WorkflowTimeline.module.css";

const STAGES = [
  {
    id: "stage-1",
    number: "I bosqich",
    title: "Onlayn — Ro'yxatga olish va saralash",
    badge: "Ochiq va bepul ro'yxatdan o'tish",
    badgeIcon: Users,
    tasks: [
      { icon: Cpu, text: "Rasmiy veb-sayt orqali onlayn ariza topshirish oson va tezkor." },
      { icon: Video, text: "Loyihangizni tanishtiruvchi qisqa video orqali g'oyangizni namoyish eting." },
      { icon: Target, text: "Barcha yangiliklar va e'lonlar rasmiy Telegram kanalida e'lon qilinadi." },
      { icon: Users, text: "Savol va takliflaringiz uchun qo'llab-quvvatlash jamoasi doim yordamga tayyor." },
      { icon: ShieldCheck, text: "Ekspertlar hay'ati barcha arizalarni chuqur tahlil qilib, eng munosib jamoalarni saralaydi." },
    ],
  },
  {
    id: "stage-2",
    number: "II bosqich",
    title: "Asosiy Tadbir — Bootcamp va Saralash Kuni",
    badge: "150 ishtirokchi, 50 jamoa",
    badgeIcon: Award,
    tasks: [
      { icon: Award, text: "Barcha ishtirokchilarga maxsus Target brendli badge va tadbir materiallari taqdim etiladi." },
      { icon: Building2, text: "Zamonaviy va qulay tadbir maydonida barcha ishtirokchilarni kutib olamiz." },
      { icon: Users, text: "Ro'yxatdan o'tish va yo'naltirish uchun mehmondo'st jamoa har doim yordamga tayyor." },
      { icon: Cpu, text: "Barcha texnik jarayonlar barqaror va uzluksiz internet aloqasi bilan ta'minlanadi." },
      { icon: Compass, text: "Tadbir davomida ishtirokchilarga yo'l-yo'riq ko'rsatib boradigan shaxsiy tutorlar biriktiriladi." },
      { icon: GraduationCap, text: "Tajribali IT va biznes ekspertlaridan tashkil topgan mentorlar jamoangiz bilan bevosita ishlaydi." },
      { icon: ClipboardCheck, text: "Barcha startap jamoasi a'zolariga rasmiy ishtirok sertifikati taqdim etiladi." },
      { icon: Gift, text: "Har bir ishtirokchi Target logotipli maxsus esdalik sovg'asini qo'lga kiritadi." },
      { icon: Mic, text: "IT va startap sohasining yetakchi vakillari mehmon spiker sifatida chiqish qiladi." },
      { icon: ShieldCheck, text: "Eng kuchli 10 ta jamoa Grand Finalga yo'llanma oladi." },
      { icon: Rocket, text: "Saralangan jamoalar uchun 1 oylik \"Start-up Hub\" akseleratsiya dasturi tashkil etiladi." },
      { icon: Coffee, text: "Kun davomida to'yimli ovqatlanish va kofe-breyklar tashkil etiladi." },
      { icon: Network, text: "Networking uchun maxsus vaqt ajratilib, boshqa jamoalar va mentorlar bilan tanishish imkoniyati yaratiladi." },
    ],
  },
  {
    id: "stage-3",
    number: "III bosqich",
    title: "Final — Taqdimot va Taqdirlash",
    badge: "Demo Day & Grand Ceremony",
    badgeIcon: Trophy,
    tasks: [
      { icon: Presentation, text: "Eng yaxshi 10 ta jamoa o'z startap loyihalarini nufuzli hakamlar hay'ati oldida taqdim etadi." },
      { icon: Building2, text: "Barcha mehmonlar va ishtirokchilar uchun yuqori darajadagi qulay tadbir muhiti tashkil etiladi." },
      { icon: ShieldCheck, text: "Hakamlar hay'ati aniq mezonlar asosida g'oliblarni adolatli tanlaydi." },
      { icon: Trophy, text: "G'olib jamoalar qimmatli pul mukofotlari, diplom, sertifikat va maxsus sovg'alar bilan taqdirlanadi." },
      { icon: PartyPopper, text: "Tadbir taniqli mehmon spikerlarning ilhomlantiruvchi nutqlari bilan yakunlanadi." },
    ],
  },
];

export default function WorkflowTimeline() {
  const [openId, setOpenId] = useState(STAGES[0].id);

  return (
    <section id="timeline" className="section">
      <div className="shell">
        <div className={styles.headGrid}>
          <div className="section__head">
            <div className="section__eyebrow eyebrow">Tadbir Yo'l Xaritasi</div>
            <h2 className="section__title">3 bosqichda g'oyadan g'alabagacha</h2>
            <p className="section__desc">
              Ro'yxatdan tortib Grand Finalgacha — har bir bosqichda sizni nima
              kutayotganini bilib oling.
            </p>
          </div>

          <div className={styles.headVisual}>
            <IllusionAsset variant="mesh" />
          </div>
        </div>

        <div className={styles.stack}>
          {STAGES.map((stage, index) => {
            const isOpen = stage.id === openId;
            const BadgeIcon = stage.badgeIcon;

            return (
              <motion.div
                key={stage.id}
                className={`${styles.stageCard} gradient-border`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <button
                  type="button"
                  className={styles.stageHeader}
                  aria-expanded={isOpen}
                  aria-controls={`${stage.id}-panel`}
                  onClick={() => setOpenId(isOpen ? null : stage.id)}
                >
                  <div className={styles.stageHeaderLeft}>
                    <span className={styles.stageNumber}>{stage.number}</span>
                    <h3 className={styles.stageTitle}>{stage.title}</h3>
                  </div>

                  <div className={styles.stageHeaderRight}>
                    <span className={styles.badge}>
                      <BadgeIcon size={14} strokeWidth={2} />
                      {stage.badge}
                    </span>
                    <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                      <ChevronDown size={18} strokeWidth={2} />
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${stage.id}-panel`}
                      className={styles.panel}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <ul className={styles.taskGrid}>
                        {stage.tasks.map((task, taskIndex) => {
                          const TaskIcon = task.icon;
                          return (
                            <motion.li
                              key={task.text}
                              className={styles.taskItem}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: taskIndex * 0.03 }}
                            >
                              <span className={styles.taskIcon}>
                                <TaskIcon size={16} strokeWidth={2} />
                              </span>
                              <span className={styles.taskText}>{task.text}</span>
                              <span className={styles.taskCheck}>
                                <Check size={13} strokeWidth={3} />
                              </span>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
