import { motion } from "framer-motion";
import styles from "./CardOrnament.module.css";

export default function CardOrnament({ variant = "cube", tone = "violet" }) {
  return (
    <motion.div
      className={`${styles.ornament} ${styles[tone]}`}
      aria-hidden="true"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {variant === "cube" && (
        <div className={styles.cube}>
          <span className={`${styles.face} ${styles.faceFront}`} />
          <span className={`${styles.face} ${styles.faceRight}`} />
          <span className={`${styles.face} ${styles.faceTop}`} />
        </div>
      )}
      {variant === "orb" && <div className={styles.orb} />}
      {variant === "ring" && <div className={styles.ring} />}
    </motion.div>
  );
}
