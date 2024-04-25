import { motion } from "framer-motion";

const Freelance = () => {
  const letterVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      rotate: 90,
      scale: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        staggerChildren: 0.14,
        staggerDirection: 1,
        type: "spring",
        stiffness: 260,
        damping: 30,
      },
    },
  };

  return (
    <motion.div
      className="max-w-full text-3xl flex-col flex gap-2 z-10 "
      variants={letterVariants}
      initial="hidden"
      animate="visible">
      <div className="flex text-slate-800">
        <motion.div variants={letterVariants}>F</motion.div>
        <motion.div variants={letterVariants}>r</motion.div>
        <motion.div variants={letterVariants}>e</motion.div>
        <motion.div variants={letterVariants}>e</motion.div>
        <motion.div variants={letterVariants}>l</motion.div>
        <motion.div variants={letterVariants}>a</motion.div>
        <motion.div variants={letterVariants}>n</motion.div>
        <motion.div variants={letterVariants}>c</motion.div>
        <motion.div variants={letterVariants}>e</motion.div>
      </div>

      <div className="flex gap-2">
        <div className="flex text-violet-600">
          <motion.div variants={letterVariants}>D</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>s</motion.div>
          <motion.div variants={letterVariants}>i</motion.div>
          <motion.div variants={letterVariants}>g</motion.div>
          <motion.div variants={letterVariants}>n</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>r</motion.div>
        </div>

        <motion.div className="flex text-slate-800" variants={letterVariants}>
          &
        </motion.div>

        <div className="flex text-violet-600">
          <motion.div variants={letterVariants}>D</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>v</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>l</motion.div>
          <motion.div variants={letterVariants}>o</motion.div>
          <motion.div variants={letterVariants}>p</motion.div>
          <motion.div variants={letterVariants}>p</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>u</motion.div>
          <motion.div variants={letterVariants}>r</motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Freelance;
