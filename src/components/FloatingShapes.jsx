import { motion } from "framer-motion";
import styles from "./FloatingShapes.module.css";

export default function FloatingShapes() {
  return (
    <div className={styles.layer} aria-hidden="true">
      <motion.div
        className={styles.cubeScene}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={styles.cube}>
          <span className={`${styles.cubeFace} ${styles.faceFront}`} />
          <span className={`${styles.cubeFace} ${styles.faceBack}`} />
          <span className={`${styles.cubeFace} ${styles.faceRight}`} />
          <span className={`${styles.cubeFace} ${styles.faceLeft}`} />
          <span className={`${styles.cubeFace} ${styles.faceTop}`} />
          <span className={`${styles.cubeFace} ${styles.faceBottom}`} />
        </div>
      </motion.div>

      <motion.div
        className={styles.sphere}
        animate={{ y: [0, -26, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      <motion.div
        className={styles.torus}
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <span className={styles.torusRingA} />
        <span className={styles.torusRingB} />
      </motion.div>
    </div>
  );
}
