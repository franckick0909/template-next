"use client";

import Image from "next/image";
import imgprojet from "../images/kasa3.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Collapse = () => {
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleCollapse = () => {
    setOpenCollapse(!openCollapse);
  };

  const list = {
    visible: {
      height: "100%",
      opacity: 1,
    },
    hidden: {
      opacity: 1,
      height: 0,
    },
  };

  const item = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
        staggerDirection: -1,

      },
    },
    hidden: {
      opacity: 0,
      y: 200,
      transition: {
        duration: 1,
        staggerDirection: 1,
        staggerChildren: 0.1,
    },
    },
  };

  return (
    <AnimatePresence>
      <div className="w-full h-auto flex flex-col gap-4 overflow-hidden border-y-[0.5px] border-slate-900 pt-8 pb-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mon Portfolio #1</h1>
          <h2>React, Sass, Framer-motion</h2>
          <h2>2024</h2>
          <button
            className="text-white bg-slate-400 px-4 py-2 rounded-md"
            onClick={handleCollapse}>
            En voir +
          </button>
        </div>

        <motion.div
          className={`w-full h-auto flex-col overflow-hidden  ${
            openCollapse ? "visible" : "opacity-0"
          }`}
          variants={list}
          initial="hidden"
          animate={openCollapse ? "visible" : "hidden"}>
          <motion.div
            className="w-full h-auto flex justify-between items-center gap-4 px-4 py-4 bg-indigo-400 rounded-md overflow-hidden"
            variants={item}>
            <motion.div
              className="flex-1 p-2 rounded-md bg-red-400"
              variants={item}>
              <Image src={imgprojet} alt="projet" />
            </motion.div>
            <motion.div
              className="flex-1 p-2 rounded-md bg-amber-400"
              variants={item}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                harum, nesciunt cupiditate placeat enim excepturi ipsa magnam
                cumque ullam corrupti officia deserunt voluptatum cum illum
                quibusdam deleniti neque voluptas nostrum tempora est totam
                nulla? Beatae fugiat molestias saepe, veniam optio modi aut
                nihil illum, quod ea sed vero, explicabo itaque.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 p-2 rounded-md bg-lime-400"
              variants={item}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                harum, nesciunt cupiditate placeat enim excepturi ipsa magnam
                cumque ullam corrupti officia deserunt voluptatum cum illum
                quibusdam deleniti neque voluptas nostrum tempora est totam
                nulla? Beatae fugiat molestias saepe, veniam optio modi aut
                nihil illum, quod ea sed vero, explicabo itaque.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Collapse;
