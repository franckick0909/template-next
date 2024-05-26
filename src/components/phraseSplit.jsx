"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PhraseSplit = ({ phrase }) => {
  const slideUp = {
    initial: {
      opacity: 0,
    },
    open: (i) => ({
      opacity: 1,
      transition: {
        delay: 0.08 * i,
        staggerChildren: 0.08,
      },
    }),
  };

  const singleWord = {
    initial: {
      y: 200,
      opacity: 0,
      scale: 0.5,
    },
    open: {
        y: 0,
        opacity: 1,
        scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const container = useRef(null);
  const isInView = useInView(container, { margin: "-100px" });

  return (
    <div ref={container} className="">
      <div className="flex max-w-full justify-between gap-[10px]">
        <motion.h2
          variants={slideUp}
          animate={isInView ? "open" : "closed"}
          initial="initial"
          className="flex flex-wrap"
        >
          {phrase.split(" ").map((word, index) => (
            <div key={word + "-" + index} className="overflow-hidden">
            <motion.span
                variants={singleWord}
              className="inline-block overflow-hidden">
              {word}&nbsp;
            </motion.span></div>
          ))}
        </motion.h2>
      </div>
    </div>
  );
};

export default PhraseSplit;
