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
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./WorkflowTimeline.module.css";

const STAGES = [
  {
    id: "stage1",
    badgeIcon: Users,
    taskIcons: [Cpu, Video, Target, Users, ShieldCheck],
  },
  {
    id: "stage2",
    badgeIcon: Award,
    taskIcons: [
      Award,
      Building2,
      Users,
      Cpu,
      Compass,
      GraduationCap,
      ClipboardCheck,
      Gift,
      Mic,
      ShieldCheck,
      Rocket,
      Coffee,
      Network,
    ],
  },
  {
    id: "stage3",
    badgeIcon: Trophy,
    taskIcons: [Presentation, Building2, ShieldCheck, Trophy, PartyPopper],
  },
];

export default function WorkflowTimeline() {
  const [openId, setOpenId] = useState(STAGES[0].id);
  const { t } = useLanguage();

  return (
    <section id="timeline" className="section">
      <div className="shell">
        <div className={styles.headGrid}>
          <div className="section__head">
            <div className="section__eyebrow eyebrow">{t("timeline.eyebrow")}</div>
            <h2 className="section__title">{t("timeline.title")}</h2>
            <p className="section__desc">{t("timeline.desc")}</p>
          </div>

          <div className={styles.headVisual}>
            <IllusionAsset variant="mesh" />
          </div>
        </div>

        <div className={styles.stack}>
          {STAGES.map((stage, index) => {
            const isOpen = stage.id === openId;
            const BadgeIcon = stage.badgeIcon;
            const taskKeys = Object.keys(t(`timeline.stages.${stage.id}.tasks`));

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
                    <span className={styles.stageNumber}>{t(`timeline.stages.${stage.id}.number`)}</span>
                    <h3 className={styles.stageTitle}>{t(`timeline.stages.${stage.id}.title`)}</h3>
                  </div>

                  <div className={styles.stageHeaderRight}>
                    <span className={styles.badge}>
                      <BadgeIcon size={14} strokeWidth={2} />
                      {t(`timeline.stages.${stage.id}.badge`)}
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
                        {taskKeys.map((taskKey, taskIndex) => {
                          const TaskIcon = stage.taskIcons[taskIndex];
                          const taskText = t(`timeline.stages.${stage.id}.tasks.${taskKey}`);
                          return (
                            <motion.li
                              key={taskKey}
                              className={styles.taskItem}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: taskIndex * 0.03 }}
                            >
                              <span className={styles.taskIcon}>
                                <TaskIcon size={16} strokeWidth={2} />
                              </span>
                              <span className={styles.taskText}>{taskText}</span>
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
