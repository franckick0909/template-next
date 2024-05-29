"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PhraseSplit = ({ phrase, delay }) => {
  const slideUp = {
    initial: {
      opacity: 0,
      y: 100,
    },
    open: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * (delay ? delay : 0.05),
            when: "afterChildren",
            // ease: [0.6, 0.01, -0.05, 0.95],
            ease: "easeOut",
        },
    }),
  };

  const letter = phrase.split("");


  const container = useRef(null);
  const isInView = useInView(container, { margin: "-100px"});

  return (
    <div ref={container} className="">
        <div className="flex max-w-full justify-between gap-[50px]">
            <p className="flex font-display text-center font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white">
                {letter.map((word, index) => {
                    return (
                        <span key={index} className="inline-flex relative overflow-hidden">
                        <motion.span
                        custom={index}
                            variants={slideUp}
                            initial="initial"
                            animate={isInView ? "open" : "initial"}
                        >
                            {word === " " ? <span>&nbsp;</span> : word}
                        </motion.span></span>
                    );
                })
                }
            </p>
        </div>
    </div>
  );
};

export default PhraseSplit;