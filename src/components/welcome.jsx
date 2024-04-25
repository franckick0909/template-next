import { motion } from "framer-motion";

const Welcome = () => {
  const letterVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.14,
        staggerDirection: 1,
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="max-w-full text-2xl flex-col text-slate-800 flex gap-2 z-10"
      variants={letterVariants}
      initial="hidden"
      animate="visible">
      <div className="flex gap-1">
        <div className="flex">
          <motion.div variants={letterVariants}>J</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
        </div>

        <div className="flex">
          <motion.div variants={letterVariants}>s</motion.div>
          <motion.div variants={letterVariants}>u</motion.div>
          <motion.div variants={letterVariants}>i</motion.div>
          <motion.div variants={letterVariants}>s</motion.div>
        </div>

        <div className="flex">
          <motion.div variants={letterVariants}>s</motion.div>
          <motion.div variants={letterVariants}>p</motion.div>
          <motion.div variants={letterVariants}>é</motion.div>
          <motion.div variants={letterVariants}>c</motion.div>
          <motion.div variants={letterVariants}>i</motion.div>
          <motion.div variants={letterVariants}>a</motion.div>
          <motion.div variants={letterVariants}>l</motion.div>
          <motion.div variants={letterVariants}>i</motion.div>
          <motion.div variants={letterVariants}>s</motion.div>
          <motion.div variants={letterVariants}>é</motion.div>
        </div>
        <div className="flex">
          <motion.div variants={letterVariants}>d</motion.div>
          <motion.div variants={letterVariants}>a</motion.div>
          <motion.div variants={letterVariants}>n</motion.div>
          <motion.div variants={letterVariants}>s</motion.div>
        </div>
        <div className="flex">
          <motion.div variants={letterVariants}>l</motion.div>
          <motion.div variants={letterVariants}>a</motion.div>
        </div>
        <div className="flex">
          <motion.div variants={letterVariants}>c</motion.div>
          <motion.div variants={letterVariants}>o</motion.div>
          <motion.div variants={letterVariants}>n</motion.div>
          <motion.div variants={letterVariants}>c</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>p</motion.div>
          <motion.div variants={letterVariants}>t</motion.div>
          <motion.div variants={letterVariants}>i</motion.div>
          <motion.div variants={letterVariants}>o</motion.div>
          <motion.div variants={letterVariants}>n</motion.div>
        </div>
        <div className="flex">
          <motion.div variants={letterVariants}>d</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
        </div>
      </div>

      <div className="flex gap-1">
        <div className="flex">
          <motion.div variants={letterVariants}>s</motion.div>
          <motion.div variants={letterVariants}>i</motion.div>
          <motion.div variants={letterVariants}>t</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
        </div>

        <div className="flex">
          <motion.div variants={letterVariants}>w</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>b</motion.div>
        </div>
        <div className="flex">
          <motion.div variants={letterVariants}>a</motion.div>
          <motion.div variants={letterVariants}>v</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>c</motion.div>
        </div>
        <div className="flex text-violet-600">
          <motion.div variants={letterVariants}>R</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>a</motion.div>
          <motion.div variants={letterVariants}>c</motion.div>
          <motion.div variants={letterVariants}>t</motion.div>
          <motion.div variants={letterVariants}>,</motion.div>
        </div>
        <div className="flex">
          <motion.div variants={letterVariants}>q</motion.div>
          <motion.div variants={letterVariants}>u</motion.div>
          <motion.div variants={letterVariants}>i</motion.div>
        </div>
        <div className="flex">
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>s</motion.div>
          <motion.div variants={letterVariants}>t</motion.div>
        </div>
        <div className="flex">
          <motion.div variants={letterVariants}>l</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
        </div>
        <div className="flex">
          <motion.div variants={letterVariants}>m</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>i</motion.div>
          <motion.div variants={letterVariants}>l</motion.div>
          <motion.div variants={letterVariants}>l</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>u</motion.div>
          <motion.div variants={letterVariants}>r</motion.div>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="flex">
          <motion.div variants={letterVariants}>o</motion.div>
          <motion.div variants={letterVariants}>u</motion.div>
          <motion.div variants={letterVariants}>t</motion.div>
          <motion.div variants={letterVariants}>i</motion.div>
          <motion.div variants={letterVariants}>l</motion.div>
        </div>

        <div className="flex">
          <motion.div variants={letterVariants}>d</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
        </div>
        <div className="flex">
          <motion.div variants={letterVariants}>d</motion.div>
          <motion.div variants={letterVariants}>é</motion.div>
          <motion.div variants={letterVariants}>v</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>l</motion.div>
          <motion.div variants={letterVariants}>o</motion.div>
          <motion.div variants={letterVariants}>p</motion.div>
          <motion.div variants={letterVariants}>p</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>m</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>n</motion.div>
          <motion.div variants={letterVariants}>t</motion.div>
        </div>
        <div className="flex">
          <motion.div variants={letterVariants}>d</motion.div>
          <motion.div variants={letterVariants}>u</motion.div>
        </div>
        <div className="flex">
          <motion.div variants={letterVariants}>m</motion.div>
          <motion.div variants={letterVariants}>o</motion.div>
          <motion.div variants={letterVariants}>m</motion.div>
          <motion.div variants={letterVariants}>e</motion.div>
          <motion.div variants={letterVariants}>n</motion.div>
          <motion.div variants={letterVariants}>t</motion.div>
          <motion.div variants={letterVariants}>.</motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Welcome;
