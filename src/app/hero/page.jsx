"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import img2 from "@/images/hero/img2.jpeg";
import img6 from "@/images/hero/img6.jpg";
import Marquee from "@/components/marquee";

const HeroPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [4, 0]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [0, 4]);
  const opacity1 = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const imgVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      layout
      className="w-full bg-light dark:bg-dark"
      initial={{ y: "200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div ref={container} className="h-[300vh] relative w-full">
        <motion.div className="sticky top-0 h-screen ">
          <div className="relative text-white z-10">
            <Marquee title="Hero Page" />
          </div>



          <div className="w-full h-full absolute top-0 flex items-center justify-center  overflow-hidden">
            <motion.div
              style={{ scale: scale2, opacity: opacity2 }}
              className="w-[25vw] h-[25vh]"
            >
              <Image
                src={img2}
                alt="image"
                placeholder="blur"
                objectFit="cover"
              />
            </motion.div>
          </div>

          <motion.div
            variants={imgVariants}
            initial="initial"
            animate="animate"
            className="w-full h-full absolute top-0 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              style={{ scale: scale1, opacity: opacity1 }}
              className="w-[25vw] h-[25vh] relative"
            >
              <Image
                src={img6}
                alt="image"
                placeholder="blur"
                objectFit="cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroPage;
