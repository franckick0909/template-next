"use client";
import { motion } from "framer-motion";

const LetterAnime = ({ title }) => {
  const letterVariants = {
    hidden: {
        scale: 0,
      opacity: 1,
      y: 400,
    },
    show: (i) => ({
        scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        delay: i * 0.09,
      },
    }),
  };

  return (
    <div className="">
      <h1 className="overflow-hidden playfair uppercase">
        {title.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate="show"
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default LetterAnime;
