import styles from "./ClayShape.module.css";

const SHAPE_CLASS = {
  stripedSphere: "stripedSphere",
  dotSphere: "dotSphere",
  ribbon: "ribbon",
  torus: "torus",
  arc: "arc",
  prism: "prism",
};

export default function ClayShape({ type = "dotSphere", tone = "violet", size = 40, className = "" }) {
  const shapeClass = styles[SHAPE_CLASS[type] || SHAPE_CLASS.dotSphere];
  const toneClass = styles[tone] || styles.violet;

  return (
    <div
      className={`${styles.shape} ${shapeClass} ${toneClass} ${className}`}
      style={{ "--clay-size": `${size}px` }}
      aria-hidden="true"
    />
  );
}
