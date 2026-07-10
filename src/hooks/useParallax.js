import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

const SPRING = { stiffness: 55, damping: 20, mass: 0.6 };

export function useParallax(depth = 0.3) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);
  const offsets = useRef({ mouseY: 0, scrollY: 0 });

  useEffect(() => {
    const applyY = () => {
      y.set(offsets.current.mouseY + offsets.current.scrollY);
    };

    const handleMove = (event) => {
      x.set((event.clientX / window.innerWidth - 0.5) * depth * 44);
      offsets.current.mouseY = (event.clientY / window.innerHeight - 0.5) * depth * 44;
      applyY();
    };

    const handleScroll = () => {
      offsets.current.scrollY = ((window.scrollY % 800) / 800 - 0.5) * depth * 26;
      applyY();
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [depth, x, y]);

  return { x: springX, y: springY };
}
