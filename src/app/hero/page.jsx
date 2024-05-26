"use client";

import SlideText from "@/components/textSliding";
import { motion } from "framer-motion";
import Welcome from "@/components/welcome";
import Freelance from "@/components/freelance";
// import Image from "next/image";
// import imgHero from "../../images/pexels-cottonbro-studio-6892716.jpg";
import Gallery from "@/components/gallery";
import Marquee from "@/components/marquee";
import PhraseSplit from "@/components/phraseSplit";

const HeroPage = () => {

  const imgVariants = {
    hidden: {
      opacity: 0.4,
      scale: 0.2,
      y: 0,
      rotate: 90,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 100,
      rotate: 0,
      transition: {
        delay: 5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };


  return (
    <motion.div
      layout
      className="w-full"
      initial={{ y: "200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <motion.section className="relative w-full min-h-dvh m-auto flex flex-col gap-8 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <motion.div
          className="absolute container mx-auto max-w-max z-[1]"
          variants={imgVariants}
          initial="hidden"
          animate="visible">
          <Gallery />
        </motion.div>


<div className="">
  {PhraseSplit({ phrase: "Je suis spécialisé dans le développement front-end et la création de site web. J'aime travailler sur des projets qui me permettent de m'améliorer et d'apprendre de nouvelles choses. J'ai une bonne connaissance des technologies web et je suis toujours à la recherche de nouveaux défis." })}
</div>

        <motion.div
          className="absolute max-w-max"
          variants={imgVariants}
          initial="hidden"
          animate="visible">
          {/* <Image
            src={imgHero}
            layout="responsive"
            alt="hero"
            className="w-full h-auto rounded-b-xl shadow-lg object-contain"
          /> */}
        </motion.div>

        <div className="flex items-center flex-1 z-[2]">
          <Marquee />
        </div>

        {/* <div className="container flex-1 flex items-center justify-end gap-4">
          <Freelance />
        </div> */}
      </motion.section>
    </motion.div>
  );
};

export default HeroPage;
