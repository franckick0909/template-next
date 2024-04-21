"use client"

import { motion, AnimatePresence } from 'framer-motion';

const TextSliding = ({ text }) => {

  const transition = {
    duration: 20,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  };


    return (
      <AnimatePresence>
        <div className="overflow-hidden">
          <motion.p
            initial={{ x: "-110%" }}
            animate={{ x: "0%" }}
            exit={{ y: "100%" }}
            transition={{ ...transition }}
            className="">
            {text}
          </motion.p>
        </div>
      </AnimatePresence>
    );
};

export default TextSliding;


// times: [0, 0.2, 0.4, 0.6, 1],