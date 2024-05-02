"use client";

import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function AnimatedWheel() {
  const { scrollYProgress } = useViewportScroll();
  const scaleWheel = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.svg className="w-full h-full" viewBox="0 0 50 50">
      <motion.circle
        cx="25"
        cy="25"
        r="20"
        fill="white"
        stroke="black"
        style={{ scale: scaleWheel }}
      />
    </motion.svg>
  );
}
