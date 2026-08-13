"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 280, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 280, damping: 26, mass: 0.5 });
  const dotX = useSpring(x, { stiffness: 700, damping: 35, mass: 0.25 });
  const dotY = useSpring(y, { stiffness: 700, damping: 35, mass: 0.25 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest("a, button, [data-cursor='hover']")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
        style={{ x: ringX, y: ringY }}
      >
        <div
          className="rounded-full border border-[#e8d5a3] transition-[width,height,opacity] duration-300"
          style={{
            width: hovering ? 58 : 34,
            height: hovering ? 58 : 34,
            transform: "translate(-50%, -50%)",
            opacity: hovering ? 1 : 0.55,
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[101] h-1.5 w-1.5 rounded-full bg-gold-bright mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
