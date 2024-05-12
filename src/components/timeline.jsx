"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const Timeline = () => {

  const { scrollYProgress } = useScroll();
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const dataTimeline = [
    {
      id: 1,
      title: "Intégrateur Web",
      description:
        "Reconversion professionnelle pour être développeur web à plein temps.",
      date: "2023 - 2024",
      color: "red",
    },
    {
      id: 2,
      title: "Intégrateur Web",
      description:
        "Reconversion professionnelle pour être développeur web à plein temps.",
      date: "2023 - 2024",
      color: "blue",
    },
    {
      id: 3,
      title: "Intégrateur Web",
      description:
        "Reconversion professionnelle pour être développeur web à plein temps.",
      date: "2023 - 2024",
      color: "red",
    },
    {
      id: 4,
      title: "Intégrateur Web",
      description:
        "Reconversion professionnelle pour être développeur web à plein temps.",
      date: "2023 - 2024",
      color: "blue",
    },
  ];

  return (
    <section className="container h-screen flex flex-col items-center justify-center">
      <motion.div
        style={{ scaleY: bar, originY: 0, originX: 0, height: "100%", width: "2px", }}
        className="rounded-full bg-black relative left-[-48%]">
        <motion.div style={{ scaleX: scrollYProgress }} />
        {dataTimeline.map((item) => (
          <div key={item.id} className="">
            <motion.div
              initial={{ y: "300px" }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }}
              className="pl-6 flex translate-x-0 translate-y-10 mt-8">
              <div className="w-[1px] h-full absolute bg-black rounded-xl top-0 left-0"></div>
              <div className="w-4 h-4 rounded-full absolute bg-black top-5 left-[-7px]"></div>

              <div className="bg-white p-4 rounded-md shadow-lg max-w-max min-w-[25rem] h-auto flex flex-col gap-4">
                <p className="text-lg">{item.date}</p>
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-lg">{item.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Timeline;
