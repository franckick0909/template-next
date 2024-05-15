"use client";

import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const Timeline = () => {



  
  const BarreRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: BarreRef,
      offset: ["end end", "start start"],
    });

  
      const TimelineRef = useRef();
      const isTimelineRefInView = useInView(TimelineRef, { margin: "-100px"});



  const dataTimeline = [
    {
      id: 1,
      title: "Bac Pro Mécanique Auto",
      description: "Lycée Professionnel Gaspard Monge - Savigny/Orge (91)",
      date: "1994 - 1996",
      color: "#242038",
      font: "white",
      dateColor: "cyan",
    },
    {
      id: 2,
      title: "Taglio Application",
      description:
        "Traitement de surface et Thermo laquage - Technicien de contrôle qualité",
      date: "2003 - 2010",
      color: "#DBE4EE",
      font: "black",
      dateColor: "darkviolet",
    },
    {
      id: 3,
      title: "Les Ateliers du goût",
      description: "Agroalimentaire - Magasinier Cariste",
      date: "2010 - 2022",
      color: "#DBE4EE",
      font: "black",
      dateColor: "blue",
    },
    {
      id: 4,
      title: "Formation OpenClassrooms",
      description:
        "Intégrateur Web - Développeur Front-End. Reconversion professionnelle pour être développeur web à plein temps.",
      date: "2023 - 2024",
      color: "#242038",
      font: "white",
      dateColor: "orange",
    },
  ];

  return (
    <motion.section
      ref={TimelineRef}
      className="min-h-[120vh] relative container grid grid-cols-1 xl:grid-cols-2">
      <h1 className="text-4xl font-bold">Timeline</h1>

      <motion.div
        className="w-[3px] bg-slate-300 rounded-xl absolute top-20 bottom-0 left-0 origin-top "
        initial={{ scaleY: 0 }}
        whileInView={{
          scaleY: 1,
          transition: {
            duration: 4,
            delay: 0.5,
            staggerChildren: 0.2,
            ease: "linear",
          },
        }}
      />

      {dataTimeline.map((item) => (
        <div key={item.id} className="">
          <div className="pl-6 flex translate-x-0 translate-y-10 mt-8 ">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{
                scaleY: 1,
                transition: { duration: 2, delay: 0.5 },
              }}
              className="w-[3px] h-[110%] absolute bg-black rounded-xl top-0 left-0 origin-top"></motion.div>
            <div className="w-4 h-4 rounded-full absolute bg-black top-5 left-[-7px]"></div>

            <div className="overflow-hidden rounded-md">
              <motion.div
                initial={{ y: "30vh" }}
                animate={isTimelineRefInView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3, staggerChildren: 0.2 }}
                className=" p-4 rounded-md max-w-full w-[30rem] xl:w-64 h-auto flex flex-col gap-4 shadow-lg"
                style={{ backgroundColor: item.color, color: item.font }}>
                <p
                  className="text-md bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500"
                  // style={{ color: item.dateColor }}
                >
                  {item.date}
                </p>
                <h4  className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 playfairSC">
                  {item.title}
                </h4>
                <p className="pText">{item.description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default Timeline;
