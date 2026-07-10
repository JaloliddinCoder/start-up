import { motion, useReducedMotion } from "framer-motion";
import ClayShape from "./clay/ClayShape";
import styles from "./CardOrnament.module.css";

// Legacy variant names are kept so existing call sites need no changes —
// each now maps to a claymorphic shape from the reference vocabulary.
const VARIANT_TO_SHAPE = {
  orb: "stripedSphere",
  cube: "ribbon",
  ring: "dotSphere",
  stripedSphere: "stripedSphere",
  dotSphere: "dotSphere",
  ribbon: "ribbon",
  torus: "torus",
  arc: "arc",
  prism: "prism",
};

const ROTATE_BY_SHAPE = {
  ribbon: [-8, 8, -8],
  prism: [0, 14, 0],
  arc: [-10, 10, -10],
};

export default function CardOrnament({ variant = "dotSphere", tone = "violet" }) {
  const shouldReduceMotion = useReducedMotion();
  const shapeType = VARIANT_TO_SHAPE[variant] || "dotSphere";
  const rotateKeyframes = ROTATE_BY_SHAPE[shapeType] || [0, 6, 0];
  const size = shapeType === "ribbon" ? 26 : 32;

  return (
    <motion.div
      className={`${styles.ornament} ${shapeType === "ribbon" ? styles.ornamentWide : ""}`}
      aria-hidden="true"
      animate={shouldReduceMotion ? undefined : { y: [0, -7, 0], rotate: rotateKeyframes }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <ClayShape type={shapeType} tone={tone} size={size} />
    </motion.div>
  );
}
