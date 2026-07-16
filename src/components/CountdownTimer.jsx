import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./CountdownTimer.module.css";

const TARGET_DATE = new Date("2026-07-27T09:00:00+05:00");

function getTimeLeft() {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNIT_KEYS = ["days", "hours", "minutes", "seconds"];

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);
  const { t } = useLanguage();

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.timer} role="timer" aria-live="polite">
      {UNIT_KEYS.map((key) => (
        <div key={key} className={styles.cell}>
          <span className={styles.value}>
            {String(time[key]).padStart(2, "0")}
          </span>
          <span className={styles.label}>{t(`countdown.${key}`)}</span>
        </div>
      ))}
    </div>
  );
}
