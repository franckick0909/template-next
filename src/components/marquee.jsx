import { motion } from "framer-motion";
import Welcome from "./welcome";

const marqueeAnimation = {
    initial: {
        x: "-100%",
    },
  animate: {
    x: "100%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 10,
      ease: "linear",
    },
  },
};

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
        y: 400,
      x: 50
  },
  animate: {
      y: 0,
        x: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

const Marquee = () => {


  return (
    <motion.div
      className="w-full h-screen flex flex-col relative py-8"
      variants={banner}>
      <BannerRowTop title={"brand"} />
      <BannerRowCenter title={" Franck - Chapelon "} />
      <BannerRowBottom title={"studio"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => {
  return (
    <motion.span
      className="flex"
      variants={disabled ? null : banner}
      initial="initial"
      animate="animate">
      {[...title].map((letter, index) => (
        <motion.span key={index} className="flex" variants={letterAnimation}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const BannerRowTop = ({ title }) => {
  return (
    <div className="h-full flex flex-col gap-0 flex-1 px-28">
      <div className="min-h-[8rem] flex flex-col justify-center items-start xl:text-[10rem] font-Space_Grotesk overflow-hidden">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className="flex flex-col "
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
        <div className="">
          <Welcome />
        </div>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className="max-w-full w-full relative flex flex-1 items-center justify-between px-28">
      <motion.div
        className="h-40 w-40 bg-black rounded-full flex flex-col justify-center items-center cursor-pointer shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2 }}>
        <motion.span
          className="text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 2.8 }}>
          scroll
        </motion.span>
        <motion.span
          className="text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 2.8 }}>
          down
        </motion.span>
      </motion.div>
      <div className="min-h-[8rem] flex flex-col justify-center xl:text-[10rem] font-Space_Grotesk overflow-hidden">
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

const BannerRowCenter = ({ title }) => {
  return (
    <motion.div className="relative overflow-hidden flex w-full">
      <motion.div
        className="max-w-full w-screen min-h-[10rem] flex gap-8 items-center xl:text-[10rem] font-Space_Grotesk overflow-hidden px-8"
        variants={marqueeAnimation}
        initial="initial"
        animate="animate">
        <AnimatedLetters title={title} />
      </motion.div>
    </motion.div>
  );
};

export default Marquee;
