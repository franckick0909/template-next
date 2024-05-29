"use client";
import { motion } from "framer-motion";

import ParallaxText from "@/components/test";

const ContactPage = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        // ease: [0.6, 0.01, -0.05, 0.95],
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="h-screen overflow-hidden">
      <section className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col gap-4 max-h-screen">
          <motion.div
            initial="initial"
            animate="open"
            variants={variants}
            className="overflow-hidden stardos-stencil-bold whitespace-nowrap bg-purple-700 max-h-[180px] flex items-center"
          >
            <ParallaxText baseVelocity={-0.2}>Franck Chapelon</ParallaxText>
          </motion.div>

          <div
            variants={variants}
            className="overflow-hidden stardos-stencil-bold whitespace-nowrap bg-indigo-700 max-h-[180px] flex items-center"
          >
            <ParallaxText baseVelocity={0.2}>
              Développeur Frontend React
            </ParallaxText>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
