"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Collapse = () => {
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleCollapse = () => {
    setOpenCollapse(!openCollapse);
  };

  const list = {
    visible: {
      height: "0%",
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      height: "100%",
      y: -100,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4 overflow-hidden border-y-[0.5px] border-slate-900 py-8">
      <div className="flex justify-between items-center ">
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
        className={`w-full h-auto flex-col bg-blue-600 ${
          openCollapse ? "block" : "hidden"
        }`}
        variants={list}
        initial="hidden"
        animate={openCollapse ? "visible" : "hidden"}>
        <motion.div
          className="w-full h-auto flex justify-between items-center gap-4 px-4 py-4"
          variants={item}>
          <div className="flex-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              harum, nesciunt cupiditate placeat enim excepturi ipsa magnam
              cumque ullam corrupti officia deserunt voluptatum cum illum
              quibusdam deleniti neque voluptas nostrum tempora est totam nulla?
              Beatae fugiat molestias saepe, veniam optio modi aut nihil illum,
              quod ea sed vero, explicabo itaque.
            </p>
          </div>
          <div className="flex-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              harum, nesciunt cupiditate placeat enim excepturi ipsa magnam
              cumque ullam corrupti officia deserunt voluptatum cum illum
              quibusdam deleniti neque voluptas nostrum tempora est totam nulla?
              Beatae fugiat molestias saepe, veniam optio modi aut nihil illum,
              quod ea sed vero, explicabo itaque.
            </p>
          </div>
          <div className="flex-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              harum, nesciunt cupiditate placeat enim excepturi ipsa magnam
              cumque ullam corrupti officia deserunt voluptatum cum illum
              quibusdam deleniti neque voluptas nostrum tempora est totam nulla?
              Beatae fugiat molestias saepe, veniam optio modi aut nihil illum,
              quod ea sed vero, explicabo itaque.
            </p>
          </div>

          <h2>2024</h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Collapse;
