import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

const TARGET_DATE = new Date("2026-10-18T09:00:00+05:00");

function getTimeLeft() {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS = [
  { key: "days", label: "Kun" },
  { key: "hours", label: "Soat" },
  { key: "minutes", label: "Daqiqa" },
  { key: "seconds", label: "Soniya" },
];

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.timer} role="timer" aria-live="polite">
      {UNITS.map((unit) => (
        <div key={unit.key} className={styles.cell}>
          <span className={styles.value}>
            {String(time[unit.key]).padStart(2, "0")}
          </span>
          <span className={styles.label}>{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
