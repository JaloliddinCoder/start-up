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
    badge: "Saralash Guruhi: 4 nafar IT + 2 nafar biznes mutaxassisi",
    badgeIcon: Users,
    tasks: [
      { icon: Cpu, text: "Ishtirokchilarni ro'yxatdan o'tkazish uchun maxsus onlayn platforma yaratish." },
      { icon: Video, text: "5 ta marketing videosini tayyorlash va ular uchun target reklama kampaniyasini yo'lga qo'yish." },
      { icon: Target, text: "Telegram kanallari uchun reklama postlarini tayyorlash va faol tarqatish." },
      { icon: Users, text: "Ishtirokchilar savollariga tezkor javob berish va administratorlik uchun 2 nafar mutaxassisni jalb qilish." },
      { icon: ShieldCheck, text: "Loyihalarni chuqur tahlil qilib keyingi bosqichga saralash." },
    ],
  },
  {
    id: "stage-2",
    number: "II bosqich",
    title: "Asosiy Tadbir — Tinchlik Filiali",
    badge: "150 ishtirokchi, 50 jamoa",
    badgeIcon: Award,
    tasks: [
      { icon: Award, text: "150 ta ishtirokchi uchun maxsus badge (bejik) va Target logotipli materiallarni tayyorlash." },
      { icon: Building2, text: "Tinchlik filialini tadbir muhitiga moslab to'liq jihozlash va tayyorlash." },
      { icon: Users, text: "Ishtirokchilarni kutib olish va joylashtirish uchun 4 nafar administrator." },
      { icon: Cpu, text: "Texnik muhit va tarmoqni qo'llab-quvvatlash uchun 2 nafar tizim administratori." },
      { icon: Compass, text: "Ishtirokchilarga yo'l-yo'riq ko'rsatish va yo'naltirish uchun 3–4 nafar tutor." },
      { icon: GraduationCap, text: "Har bir startap jamoasi bilan ishlash va jadal mentorlik uchun 4 nafar IT + 4 nafar biznes eksperti." },
      { icon: ClipboardCheck, text: "50 ta startap jamoasi a'zolari uchun rasmiy sertifikatlarni tayyorlash va chop etish." },
      { icon: Gift, text: "50 ta maxsus esdalik sovg'asini Target logotipi bilan brendlash va tayyorlash." },
      { icon: Mic, text: "IT va startap sohasidan nufuzli mehmon spikerlarni taklif etish." },
      { icon: ShieldCheck, text: "Eng kuchli va istiqbolli 10 ta jamoani yakuniy bosqichga saralab olish." },
      { icon: Rocket, text: "Saralangan jamoalar uchun 1 oylik \"Start-up Hub\" akseleratsiya dasturini kurs shaklida tashkil etish." },
      { icon: Coffee, text: "Ovqatlanish va kofebreyklarni tashkil etish (professional oshpazlarni jalb qilish)." },
      { icon: Network, text: "Umumiy tarmoq va ovqatlanish uchun maxsus vaqt ajratish integratsiyasi." },
    ],
  },
  {
    id: "stage-3",
    number: "III bosqich",
    title: "Final — Taqdimot va Taqdirlash",
    badge: "Demo Day & Grand Ceremony",
    badgeIcon: Trophy,
    tasks: [
      { icon: Presentation, text: "Saralangan eng yaxshi 10 ta jamoaning hakamlar hay'ati (Jury) oldida o'z startap loyihalarini Pitch qilish (taqdim etish) jarayoni." },
      { icon: Building2, text: "Hakamlar hay'ati va mehmonlar faoliyati uchun qulay, yuqori darajadagi professional muhit." },
      { icon: ShieldCheck, text: "Hakamlar hay'atining mezonlar asosida loyihalarni baholashi va g'oliblarni aniqlashi." },
      { icon: Trophy, text: "Eng yaxshi jamoalarni pul mukofotlari, diplomlar, sertifikatlar va Target esdalik sovg'alari bilan tantanali taqdirlash." },
      { icon: PartyPopper, text: "Rasmiy yopilish marosimi va taklif etilgan mehmon spikerlarning yakuniy motivatsion nutqlari." },
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
            <div className="section__eyebrow eyebrow">3-Bosqichli Tashkiliy Reja</div>
            <h2 className="section__title">Chempionat ish jarayoni</h2>
            <p className="section__desc">
              G'oyadan Grand Finalgacha — har bir bosqichning aniq vazifalari,
              jamoa tarkibi va texnik ta'minoti bilan.
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
