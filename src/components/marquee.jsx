import { motion } from "framer-motion";
import Welcome from "./welcome";

const marqueeAnimation = {
    initial: {
        x: "-50%",
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
      delayChildren: 2,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

const Marquee = () => {


  return (
    <motion.div
      className="w-full h-screen flex flex-col relative pb-12"
      variants={banner}>
      <BannerRowTop title={". Développeur ."} />

      {/* <BannerRowCenter title={" Franck  -  Chapelon "} /> */}
      <BannerRowBottom title={". React ."} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => {
  return (
    <motion.span
      className="flex h-min overflow-hidden"
      variants={disabled ? null : banner}
      initial="initial"
      animate="animate">
      {[...title].map((letter, index) => (
        <motion.span key={index} className="inline-block p-0 m-0 white" variants={letterAnimation}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const BannerRowTop = ({ title }) => {
  return (
    <div className="h-full w-full flex flex-col gap-0 flex-1 px-28 max-md:px-12">
      <div className="flex flex-col justify-center items-start overflow-hidden font-bold poppins text-9xl text-white italic">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className="flex flex-col "
>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className="max-w-full w-full relative flex flex-1 flex-wrap-reverse items-center justify-between px-28 max-md:px-12 ">
      <motion.div
        className="h-40 w-40 max-lg:h-24 max-lg:w-24 bg-white rounded-full shadow-lg flex flex-col justify-center items-center cursor-pointer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2 }}>
        <motion.span
          className="text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 2.8 }}>
          scroll
        </motion.span>
        <motion.span
          className="text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 2.8 }}>
          down
        </motion.span>
      </motion.div>
      <div className="min-h-[8rem] flex flex-col justify-center overflow-hidden lora-title-H1 font-bold poppins text-9xl text-white italic">
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

// const BannerRowCenter = ({ title }) => {
//   return (
//     <motion.div className="relative overflow-hidden flex w-full">
//       <motion.div
//         className="max-w-full w-screen  flex gap-8 items-center overflow-hidden px-24 lora-title-H1 font-bold text-white"
//         variants={marqueeAnimation}
//         initial="initial"
//         animate="animate">
//         <AnimatedLetters title={title} className="overflow-hidden " />
//       </motion.div>
//     </motion.div>
//   );
// };

export default Marquee;
