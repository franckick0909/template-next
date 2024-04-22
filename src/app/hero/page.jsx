"use client";

import Image from "next/image";
import imgHero from "../../images/man_4.png";
import Social from "@/components/social";
import SlideText from "@/components/textSliding";
import { motion } from "framer-motion";

const HeroPage = () => {


  return (
    <motion.div layout>
      <motion.section
        className="relative w-full h-screen m-auto flex flex-col sm:flex-row gap-8 items-center justify-center px-4 sm:px-8 md:px-12 lg:px20 xl:px48 text-xl py-14">
        <div className="flex-1 flex flex-col gap-5 ">
          <h1 className="text-3xl font-bold">Franck Chapelon</h1>
          <h3 className="orbitron text-lg">Welcome to the homepage</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis soluta vero accusantium. Inventore, fuga! Laborum error
            accusantium voluptatem eum quasi.
          </p>

          <Social />
        </div>

        <div className="flex flex-1 max-w-sm rounded-3xl">
          <Image
            src={imgHero}
            alt="Hero"
            className="rounded-3xl drop-shadow-[0_5px_100px_rgba(0,0,0,0.6)]"
          />
        </div>
        <div className="overflow-hidden w-full h-full absolute bottom-[-70%] left-0 text-9xl font-bold whitespace-nowrap drop-shadow-lg z-0">
          <motion.div className="">
            <SlideText />
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HeroPage;
