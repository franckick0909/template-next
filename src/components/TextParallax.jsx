"use client";
import img1 from "@/images/skills/nextjs.png";
import img2 from "@/images/skills/tailwindcss.svg";
import img3 from "@/images/skills/reactjs.png";

import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useRef } from "react";

const TextParallax = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  return (
    <main className="overflow-hidden bg-black">
      <div className="h-[20vh]" />

      <motion.div ref={container}>
        <Slider src={img1} left="-95%" progress={scrollYProgress} direction="left" />
        <Slider src={img2} left="-25%" progress={scrollYProgress} direction="right" />
        <Slider src={img3} left="-55%" progress={scrollYProgress} direction="left" />
      </motion.div>

      <div className="h-[20vh]" />
    </main>
  );
};

export default TextParallax;

const Slider = ({ src, left, progress, direction }) => {

    const dir = direction === "left" ? -1 : 1;
    const x = useTransform(progress, [0, 1], [-650 * dir, 650 * dir]);

  return (
    <motion.div style={{ left, x }} className="flex whitespace-nowrap relative">
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
};

const Phrase = ({ src,  }) => {
  return (
    <div className="flex gap-5 items-center px-5 ">
      <p className="poppins font-thin text-white">Développeur Front-End React</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image src={src} alt="image" className="w-full h-full object-contain" />
      </span>
    </div>
  );
};
