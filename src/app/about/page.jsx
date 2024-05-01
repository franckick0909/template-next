"use client";

import Biographie from "@/components/biographie";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";
import Brain from "@/components/brain";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  console.log(scrollYProgress);

  return (
    <motion.div
      className="min-h-screen bg-slate-300"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <motion.div className="h-full lg:flex flex flex-col gap-4 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20  lg:pr-0" ref={containerRef}>
        <div className="w-full flex flex-col md:w-1/2 text-justify">
          <Biographie />
        </div>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="5%"
          height="5%"
          viewBox="0 0 820.000000 512.000000"
          preserveAspectRatio="xMidYMid meet">
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none">
            <path
              d="M3915 5106 c-298 -43 -565 -177 -775 -386 -213 -214 -345 -481 -385
-780 -21 -156 -21 -2618 0 -2765 33 -233 116 -437 254 -623 450 -607 1305
-730 1910 -275 286 215 475 537 526 898 21 147 21 2609 0 2765 -41 305 -171
565 -394 787 -137 137 -333 259 -517 321 -176 60 -439 84 -619 58z m420 -171
c235 -48 438 -158 611 -330 171 -170 278 -370 331 -615 17 -80 18 -167 18
-1430 0 -1263 -1 -1350 -18 -1430 -69 -321 -250 -592 -511 -765 -215 -141
-409 -199 -666 -199 -257 0 -451 58 -666 199 -261 173 -442 444 -511 765 -17
80 -18 167 -18 1430 0 1483 -3 1399 62 1590 145 426 526 737 979 799 94 13
292 6 389 -14z"
            />
            <path d="M4020 4000 l0 -320 80 0 80 0 0 320 0 320 -80 0 -80 0 0 -320z" />
          </g>
        </svg>

        <div className="w-full flex flex-col md:w-1/2 pt-16">
          <Skills />
        </div>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="5%"
          height="5%"
          viewBox="0 0 820.000000 512.000000"
          preserveAspectRatio="xMidYMid meet">
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none">
            <path
              d="M3915 5106 c-298 -43 -565 -177 -775 -386 -213 -214 -345 -481 -385
-780 -21 -156 -21 -2618 0 -2765 33 -233 116 -437 254 -623 450 -607 1305
-730 1910 -275 286 215 475 537 526 898 21 147 21 2609 0 2765 -41 305 -171
565 -394 787 -137 137 -333 259 -517 321 -176 60 -439 84 -619 58z m420 -171
c235 -48 438 -158 611 -330 171 -170 278 -370 331 -615 17 -80 18 -167 18
-1430 0 -1263 -1 -1350 -18 -1430 -69 -321 -250 -592 -511 -765 -215 -141
-409 -199 -666 -199 -257 0 -451 58 -666 199 -261 173 -442 444 -511 765 -17
80 -18 167 -18 1430 0 1483 -3 1399 62 1590 145 426 526 737 979 799 94 13
292 6 389 -14z"
            />
            <path d="M4020 4000 l0 -320 80 0 80 0 0 320 0 320 -80 0 -80 0 0 -320z" />
          </g>
        </svg>

        <div className="w-full flex flex-col pt-16 md:w-1/2">
          <Timeline />
        </div>
      </motion.div>

      <div className="hidden md:block bg-transparent fixed z-[10] top-0 right-0 w-[48%]">
        <Brain />
      </div>
    </motion.div>
  );
};

export default AboutPage;
