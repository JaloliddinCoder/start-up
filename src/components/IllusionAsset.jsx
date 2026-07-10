import { motion, useReducedMotion } from "framer-motion";
import ClayShape from "./clay/ClayShape";
import { useParallax } from "../hooks/useParallax";
import styles from "./IllusionAsset.module.css";

// Legacy variant names are kept so existing call sites need no changes —
// each now resolves to a distinct claymorphic cluster composition.
const CLUSTER_PRESETS = {
  rings: [
    { type: "stripedSphere", tone: "crimson", size: 100, top: "6%", left: "16%", depth: 0.5, duration: 7 },
    { type: "torus", tone: "violet", size: 130, top: "36%", left: "50%", depth: 0.3, duration: 8.5 },
    { type: "dotSphere", tone: "cyan", size: 46, top: "58%", left: "8%", depth: 0.65, duration: 6 },
    { type: "arc", tone: "violet", size: 92, top: "8%", left: "58%", depth: 0.22, duration: 9.5 },
    { type: "prism", tone: "crimson", size: 56, top: "72%", left: "46%", depth: 0.72, duration: 5.5 },
    { type: "ribbon", tone: "cyan", size: 30, top: "48%", left: "72%", depth: 0.4, duration: 7.8 },
  ],
  mesh: [
    { type: "prism", tone: "violet", size: 68, top: "10%", left: "20%", depth: 0.55, duration: 6.5 },
    { type: "arc", tone: "cyan", size: 100, top: "34%", left: "52%", depth: 0.3, duration: 8 },
    { type: "stripedSphere", tone: "crimson", size: 78, top: "58%", left: "14%", depth: 0.62, duration: 7.2 },
    { type: "torus", tone: "cyan", size: 96, top: "64%", left: "56%", depth: 0.28, duration: 9 },
    { type: "dotSphere", tone: "violet", size: 40, top: "10%", left: "68%", depth: 0.7, duration: 5.8 },
  ],
  loop: [
    { type: "ribbon", tone: "crimson", size: 34, top: "18%", left: "12%", depth: 0.5, duration: 7 },
    { type: "ribbon", tone: "cyan", size: 30, top: "58%", left: "20%", depth: 0.4, duration: 8.2 },
    { type: "torus", tone: "violet", size: 108, top: "30%", left: "44%", depth: 0.3, duration: 8.8 },
    { type: "stripedSphere", tone: "violet", size: 64, top: "62%", left: "58%", depth: 0.6, duration: 6.2 },
    { type: "dotSphere", tone: "crimson", size: 38, top: "8%", left: "62%", depth: 0.68, duration: 5.6 },
  ],
  cluster: [
    { type: "stripedSphere", tone: "crimson", size: 90, top: "10%", left: "18%", depth: 0.5, duration: 7 },
    { type: "torus", tone: "violet", size: 116, top: "38%", left: "50%", depth: 0.32, duration: 8.5 },
    { type: "ribbon", tone: "cyan", size: 30, top: "62%", left: "12%", depth: 0.6, duration: 6.6 },
    { type: "arc", tone: "violet", size: 84, top: "10%", left: "58%", depth: 0.24, duration: 9.2 },
    { type: "prism", tone: "crimson", size: 52, top: "70%", left: "48%", depth: 0.72, duration: 5.5 },
    { type: "dotSphere", tone: "cyan", size: 38, top: "48%", left: "76%", depth: 0.45, duration: 7.5 },
  ],
};

function ClusterItem({ shape, reduceMotion }) {
  const { x, y } = useParallax(shape.depth);

  return (
    <div className={styles.clusterAnchor} style={{ top: shape.top, left: shape.left }}>
      <motion.div style={{ x: reduceMotion ? 0 : x, y: reduceMotion ? 0 : y }}>
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: shape.duration, repeat: Infinity, ease: "easeInOut" }}
        >
          <ClayShape type={shape.type} tone={shape.tone} size={shape.size} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function IllusionAsset({ variant = "cluster", className = "" }) {
  const shouldReduceMotion = useReducedMotion();
  const shapes = CLUSTER_PRESETS[variant] || CLUSTER_PRESETS.cluster;

  return (
    <div className={`${styles.wrap} ${className}`} aria-hidden="true">
      {shapes.map((shape, index) => (
        <ClusterItem key={`${shape.type}-${index}`} shape={shape} reduceMotion={shouldReduceMotion} />
      ))}
    </div>
  );
}
