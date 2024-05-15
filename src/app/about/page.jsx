"use client";

import Biographie from "@/components/biographie";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import Cerveau from "@/components/cerveau";
import SvgScroll from "@/components/svgScroll";

const AboutPage = () => {

    const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  
    const TimelineRef = useRef();
    const isTimelineRefInView = useInView(TimelineRef, { margin: "-100px" });


  return (
    <motion.div
      className="min-h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <motion.div className="grid md:grid-cols-2 gap-8 p-4 md:px-8 lg:px-16 xl:px-20 relative mt-14">
        <div className="grid gap-4 ">
          <div className="w-full min-h-[calc(100vh-10rem)] flex flex-col text-justify">
            <Biographie />

            <div className="w-[14%] h-full">
              <SvgScroll />
            </div>
          </div>

          <div className="w-full min-h-screen flex flex-col">
            <section
              ref={skillRef}
              className="flex flex-col gap-12 justify-center">
              <div className="flex items-baseline gap-8">
                <motion.h1
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="playfair">
                  02
                </motion.h1>
                <h2 className="font-bold text-2xl">SKILLS</h2>
              </div>
              <Skills />
            </section>

            <div className="max-w-[14%] max-h-full mt-28">
              <SvgScroll />
            </div>
          </div>

          <div className="w-full flex flex-col pt-16">
            <section
              ref={TimelineRef}
              className="flex flex-col gap-12 justify-center w-full">
              <div className="flex items-baseline gap-8">
                <motion.h1
                  initial={{ x: "-300px" }}
                  animate={isTimelineRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="playfair">
                  03
                </motion.h1>
                <h2 className="font-bold text-2xl">EXPERIENCES</h2>
              </div>

              <Timeline />
            </section>
          </div>
        </div>

        <div className="">
          {/* <div className="hidden md:block sticky top-0 w-full pl-12 py-12">
            <Roues />
          </div> */}

          <div className="hidden md:block sticky top-40">
            <Cerveau />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
