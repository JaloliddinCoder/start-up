import { motion, useReducedMotion } from "framer-motion";
import styles from "./IllusionAsset.module.css";

export default function IllusionAsset({ variant = "rings", className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`${styles.wrap} ${className}`} aria-hidden="true">
      {variant === "rings" && (
        <motion.div
          className={styles.rings}
          animate={shouldReduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          <span className={styles.ring1} />
          <span className={styles.ring2} />
          <span className={styles.ring3} />
          <span className={styles.core} />
        </motion.div>
      )}

      {variant === "loop" && (
        <motion.div
          className={styles.loop}
          animate={shouldReduceMotion ? undefined : { rotateZ: [0, 6, 0, -6, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className={styles.loopRingA} />
          <span className={styles.loopRingB} />
          <span className={styles.loopCore} />
        </motion.div>
      )}

      {variant === "mesh" && (
        <motion.div
          className={styles.mesh}
          animate={shouldReduceMotion ? undefined : { backgroundPosition: ["0px 0px", "28px 28px"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        >
          <span className={styles.meshGlow} />
        </motion.div>
      )}
    </div>
  );
}
