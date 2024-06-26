"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCode, FaPlus, FaMinus } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Collapse = ({
  title,
  stack,
  date,
  num,
  imgProjet,
  desc,
  theme,
  href,
  github,
}) => {
  const [openCollapse, setOpenCollapse] = useState(false);

  const [hovered, setHovered] = useState(false);

  const handleCollapse = () => {
    setOpenCollapse(!openCollapse);
  };

  const icon = openCollapse ? (
    <FaMinus className="w-7 h-7" />
  ) : (
    <motion.div whileHover={{ rotate: 90 }} className="hover:rotate-90">
      <FaPlus className="w-7 h-7" />
    </motion.div>
  );

  const list = {
    visible: {
      height: "auto",
      transition: {
        duration: 0.4,
      },
    },
    hidden: {
      height: 0,
      transition: {
        delay: 0.4,
        duration: 0.3,
      },
    },
  };

  const item = {
    visible: {
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
        staggerDirection: -1,
      },
    },
    hidden: {
      y: 300,
      transition: {
        duration: 0.5,
        staggerDirection: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemHover = {
    hiddenHover: {
      scale: 0,
      transition: {
        duration: 0.3,
      },
    },
    visibleHover: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      <p className="text-sm">{num}</p>
      <div className="relative w-full h-auto flex flex-col gap-2 border-y-[0.5px] border-white pt-2 pb-1">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="border-separate max-w-full w-full text-left items-center justify-between gap-4 flex max-md:flex-col max-md:items-start h-auto bg-white rounded-lg p-4 shadow-sm hover:shadow-md  transition-shadow duration-300 ease-in-out"
        >
          <div className="flex-1 h-full flex items-center w-full justify-between ">
            <h3 className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
              {title}
            </h3>

            <button
              className="text-white bg-slate-900 rounded-full p-text-base max-md:block hidden z-50"
              onClick={handleCollapse}
            >
              {icon}
            </button>
          </div>
          <motion.div
            variants={itemHover}
            initial="hiddenHover"
            animate={hovered ? "visibleHover" : "hiddenHover"}
            exit="hiddenHover"
            className="absolute w-80 h-auto top-[-20%] left-1/2 rounded-lg opacity-70 z-40"
          >
            <Image
              src={imgProjet}
              alt="projet"
              objectFit="cover"
              className="rounded-lg w-full h-full"
            />
          </motion.div>

          <div className="flex-1 h-full flex items-center w-full">
            <h2 className="text-base">{stack}</h2>
          </div>
          <div className="flex-1 h-full flex items-center w-full">
            <h4 className="">{date}</h4>
          </div>

          <div className="flex-1 h-full flex items-center justify-end w-full max-md:justify-start max-md:hidden">
            <button
              className="text-white bg-slate-900 rounded-full p-3 text-base z-20"
              onClick={handleCollapse}
            >
              {icon}
            </button>
          </div>
        </div>

        <motion.div
          className={`w-full h-auto overflow-hidden max-md:text-sm text-base shadow-md ${
            openCollapse ? "h-auto" : "h-0"
          }`}
          variants={list}
          initial="hidden"
          animate={openCollapse ? "visible" : "hidden"}
        >
          <motion.div
            className="w-full h-max px-4 py-4 bg-white rounded-md overflow-hidden max-md:text-sm text-base  grider gap-4 shadow-md"
            variants={item}
          >
            <motion.div className="h-full w-full rounded-md shadow-md" variants={item}>
              <Image
                src={imgProjet}
                alt="projet"
                objectFit="cover"
                width="512"
                height="384"
                className="rounded-md w-full max-h-80 shadow-md"
              />
            </motion.div>

            <motion.div
              className="w-full h-full p-4 rounded-md bg-white max-md:text-sm text-base"
              variants={item}
            >
              <h4 className="text-black">THEME</h4>
              <div className="border-indigo-500 mb-4 border-[1px]"></div>
              <p className="max-md:text-sm text-base text-black">{theme}</p>
            </motion.div>

            <motion.div
              className="w-full h-full p-4 rounded-md bg-white max-md:text-sm text-base"
              variants={item}
            >
              <h4 className="text-black">URL</h4>
              <div className="border-indigo-500 mb-4 border-[1px]"></div>

              <div className="flex flex-col gap-4 flex-wrap w-full">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={href}
                  className="p-[2px] relative w-full hover:-translate-y-[2px] transition-all duration-300 ease-in"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full animate-pulse" />
                  <div className="px-6 py-2 bg-white rounded-full relative group transition duration-200 text-slate-900 f hover:bg-transparent hover:text-white pText flex items-center justify-center gap-4 hover:shadow-lg shadow-md">
                    Voir le code
                    <div className="w-7 h-7 flex items-center justify-center">
                      <FaCode className="" />
                    </div>
                  </div>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={href}
                  className="p-[2px] relative w-full hover:-translate-y-[2px] transition-all duration-300 ease-in"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
                  <div className="px-6 py-2 bg-transparent rounded-full relative group transition duration-200 text-white f hover:bg-white hover:text-slate-900 pText flex items-center justify-center gap-4 hover:shadow-lg shadow-md">
                  Consulter le site
                    <div className="w-6 h-6 flex items-center justify-center">
                      <FaExternalLinkAlt className="" />
                    </div>
                  </div>
                </a>

              </div>
            </motion.div>

            <motion.div
              className="w-full h-full p-4 rounded-md bg-white max-md:text-sm text-base"
              variants={item}
            >
              <h4 className="text-black">DESCRIPTION</h4>
              <div className="border-indigo-500 mb-4 border-[1px]"></div>
              <p className="max-md:text-sm text-base text-black">{desc}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Collapse;

// grid max-md:grid-cols-none grid-cols-4

// max-md:flex-col justify-between items-start gap-4
