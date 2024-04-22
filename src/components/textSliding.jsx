"use client";

import { motion, AnimatePresence } from "framer-motion";

const TextSliding = () => {

  const variants = {
    initial: {
      x: "100%",
      opacity: 1,
    },
    animate: {
      x: "-100%",
      opacity: 1,
      transition: {
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      },
    },
    exit: {
      x: 100,
      opacity: 0.5,
    },
  };

    const letterVariants = {
      initial: {
        y: -80,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
          staggerDirection: 1,
          duration: 1,
          ease: "easeOut",
        },
      },
    };

  const text2 = ["C", "h", "a", "p", "e", "l", "o", "n"];

  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className=" bg-clip-text text-transparent bg-gradient-to-t from-slate-200 via-slate-100 to-white font-spaceGrotesk font-semibold">
        <motion.div className=""
          variants={letterVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span
            variants={letterVariants}>
            Franck
          </motion.span>

          <motion.span variants={letterVariants}> - </motion.span>

          {text2.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TextSliding;

// times: [0, 0.2, 0.4, 0.6, 1],
