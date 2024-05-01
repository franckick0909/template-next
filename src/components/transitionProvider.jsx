"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        key={pathName}
        className="w-full h-screen">
        <motion.div
          id="banner-1"
          className="h-full bg-black z-40 fixed top-0 left-0 w-1/4"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}></motion.div>
        <motion.div
          id="banner-1"
          className="h-full bg-black z-40 fixed top-0 left-0 w-1/4"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.2 } }}></motion.div>
        <motion.div
          id="banner-2"
          className="h-full bg-black z-40 fixed top-0 left-1/4 w-1/4"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeOut",
          }}></motion.div>
        <motion.div
          id="banner-2"
          className="h-full bg-black z-40 fixed top-0 left-1/4 w-1/4"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.4 } }}></motion.div>

        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 z-50 text-white text-8xl cursor-default  w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}>
          {pathName.substring(1)}
        </motion.div>

        <motion.div
          id="banner-3"
          className="h-full bg-black z-40 fixed top-0 left-2/4 w-1/4"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            ease: "easeOut",
          }}></motion.div>
        <motion.div
          id="banner-3"
          className="h-full bg-black z-40 fixed top-0 left-2/4 w-1/4"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.6 } }}></motion.div>
        <motion.div
          id="banner-4"
          className="h-full bg-black z-40 fixed top-0 left-3/4 w-1/4"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{
            delay: 0.6,
            duration: 0.5,
            ease: "easeOut",
          }}></motion.div>
        <motion.div
          id="banner-4"
          className="h-full bg-black z-40 fixed top-0 left-3/4 w-1/4"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.8 } }}></motion.div>
        <div className="h-16">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-4rem)]">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
