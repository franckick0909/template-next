"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PhraseSplit = ({ phrase }) => {
  const slideUp = {
    initial: {
        y: 100,
        opacity: 0,
    },
    open: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.09 * i,
        },
    }),
    closed: {
        y: 200,
        opacity: 0,
    },
  };

  const container = useRef(null);
  const isInView = useInView(container, { margin: "-100px" });

  return (
    <div ref={container} className="">
        <div className="flex max-w-full justify-between gap-[50px]">
            <p className="flex gap-2 flex-wrap">
                {phrase.split(" ").map((word, index) => {
                    return (
                        <span key={index} className="inline-flex relative overflow-hidden">
                        <motion.span
                        custom={index}
                            variants={slideUp}
                            initial="closed"
                            animate={isInView ? "open" : "closed"}
                        >
                            {word }
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
