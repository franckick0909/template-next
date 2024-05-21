"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCode, FaPlus } from "react-icons/fa6";
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
          className="border-separate max-w-full w-full text-left items-center justify-between gap-4 flex max-md:flex-col max-md:items-start h-auto bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          <div className="flex-1 h-full flex items-center w-full justify-between ">
            <h2 className="stardos-stencil-regular bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">{title}</h2>

            <button
              className="text-white bg-slate-600 px-4 py-2 rounded-md text-base max-md:block hidden"
              onClick={handleCollapse}
            >
              <FaPlus className="w-5 h-5" />
            </button>
          </div>
          <motion.div
            variants={itemHover}
            initial="hiddenHover"
            animate={hovered ? "visibleHover" : "hiddenHover"}
            exit="hiddenHover"
            className="absolute max-w-52 max-h-36 top-[-20%] left-1/2 rounded-lg opacity-70 z-40"
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
              className="text-slate-900 px-4 py-2 rounded-md text-base"
              onClick={handleCollapse}
            >
              <FaPlus className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div
          className={`w-full h-auto overflow-hidden max-md:text-sm text-base ${
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
            <motion.div className="h-full w-full rounded-md" variants={item}>
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
              className="h-full w-full flex-col p-4 rounded-md bg-gradient-to-r from-slate-400 to-slate-600  max-md:text-sm text-base shadow-md"
              variants={item}
            >
              <h4 className="text-black">THEME</h4>
              <div className="border-y-[0.5px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent mb-4"></div>
              <p className="max-md:text-sm text-base text-white">{theme}</p>
            </motion.div>

            <motion.div
              className="h-full w-full flex flex-col p-4 rounded-md bg-gradient-to-r from-slate-400 to-slate-600 max-md:text-sm text-base shadow-md"
              variants={item}
            >
              <h4 className="text-black">URL</h4>
              <div className="border-y-[0.5px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 mb-4"></div>

              <div className="flex flex-col gap-4 flex-wrap w-full">
 
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2 text-black text-sm bg-slate-200 hover:text-white hover:bg-slate-400 px-4 py-2 rounded-md z-50 transition-all duration-300 ease-in-out shadow-md"
                  >
                    Voir le code
                    <span className="text-white">
                      <FaCode className="w-5 h-5" />
                    </span>
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={github}
                    className="flex items-center justify-between gap-2 text-black text-sm bg-slate-200 hover:text-white hover:bg-slate-400 px-4 py-2 rounded-md z-50 transition-all duration-300 ease-in-out shadow-md"
                  >
                    Consulter le site
                    <span className="text-white">
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </span>
                  </a>

              </div>
            </motion.div>

            <motion.div
              className="w-full h-full p-4 rounded-md bg-gradient-to-r from-slate-400 to-slate-600 max-md:text-sm text-base shadow-md"
              variants={item}
            >
              <h4 className="text-black">DESCRIPTION</h4>
              <div className="border-y-[0.5px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 mb-4"></div>
              <p className="max-md:text-sm text-base text-white">{desc}</p>
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
