"use client";

import { motion, AnimatePresence } from "framer-motion";

const TextSliding = () => {

  const variants = {
    initial: {
      x: "100%",
      opacity: 1,
    },
    animate: {
      x: ["100%", "-100%"],
      opacity: 1,
      transition: {
        repeat: Infinity,
        duration: 12,
        ease: "linear",
      },
    },
    exit: {
      x: "0%",
      opacity: 1,
    },
  };

    const letterVariants = {
      initial: {
        opacity: 0,
        y: 20,
        rotate: 60,
        scale: 7,
      },
      animate: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: [0.5, 1.2, 1],
        transition: {
          staggerChildren: 0.5,
          staggerDirection: 1,
        },
      },
    };

  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className=" ">
        <motion.div
          className="container h-[13rem] flex items-center whitespace-nowrap text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[11rem] font-spaceGrotesk font-semibold text-slate-900 overflow-hidden cursor-pointer dropShadow"
          variants={letterVariants}
          initial="initial"
          animate="animate">
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            F
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            r
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            a
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            n
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            c
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            k
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            {" "}
            -{" "}
          </motion.div>

          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            C
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            h
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            a
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            p
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            e
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            l
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            o
          </motion.div>
          <motion.div variants={letterVariants} whileHover={{ scale: 1.2 }}>
            n
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TextSliding;

// times: [0, 0.2, 0.4, 0.6, 1],
