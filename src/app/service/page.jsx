"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SvgScroll from "@/components/svgScroll";

const ServicePage = () => {
  const data = [
    {
      id: 1,
      title: "Web Development",
      description:
        "I can build a website for you using the latest technologies like React, Next.js, TailwindCSS, etc.",
    },
    {
      id: 2,
      title: "Mobile Development",
      description:
        "I can build a mobile app for you using the latest technologies like React Native, Expo, etc.",
    },
    {
      id: 3,
      title: "Backend Development",
      description:
        "I can build a backend for your website or mobile app using the latest technologies like Node.js, Express, etc.",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "I can design a user interface for your website or mobile app using the latest technologies like Figma, Adobe XD, etc.",
    },
    {
      id: 5,
      title: "SEO",
      description:
        "I can optimize your website for search engines using the latest technologies like Google Analytics, Google Search Console, etc.",
    },
    {
      id: 6,
      title: "Social Media Marketing",
      description:
        "I can promote your website or mobile app on social media using the latest technologies like Facebook, Instagram, etc.",
    },
    {
      id: 7,
      title: "Content Writing",
      description:
        "I can write content for your website or mobile app using the latest technologies like Grammarly, Hemingway, etc.",
    },
  ];

  // grid grid-rows-1 grid-flow-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4

  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-87.5%"]);

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="h-full bg-blue-200">
      <section className="h-[800vh] relative" ref={ref}>
        <div className="w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
          <h1 className="playfairSC uppercase">Mes Services</h1>
          <div className="max-w-[10%] max-h-full mt-8">
            <SvgScroll />
          </div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center bg-green-600" />
            {data.map((item) => (
              <div
                key={item.id}
                className="w-screen h-screen flex flex-col px-4 py-16 xl:p-20 bg-slate-200">
                <div className="container mx-auto h-full flex flex-col items-center justify-center rounded-lg border border-gray-200 p-20 shadow-sm transition-colors hover:border-gray-900 dark:border-gray-800 dark:hover:border-gray-50 ">
                  <div className="flex flex-col justify-start">
                    <h2 className="">{item.title}</h2>
                    <p className="pText">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicePage;

// {
//   data.map((item) => (
//     <div
//       key={item.id}
//       className="w-screen h-screen flex flex-col gap-4 p-4 bg-slate-200 shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold">{item.title}</h2>
//       <p className="text-lg">{item.description}</p>
//     </div>
//   ));
// }
