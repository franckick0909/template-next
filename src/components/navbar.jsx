"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./logo";
import Social from "./social";
import AnimatedLink from "@/app/AnimatedLink";
import { usePathname } from "next/navigation";

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "About", href: "/about" },
    { text: "Service", href: "/service" },
    { text: "Contact", href: "/contact" },
  ];

const Navbar = () => {

    const pathName = usePathname(); 
  const [isOpen, setIsOpen] = useState(false);

  const topVariants = {
    close: {
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
    open: {
      y: "0.5rem",
      rotate: 45,
      originX: "center",
      backgroundColor: "white",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },

    },
  };

  const middleVariants = {
    close: {
      when: "afterChildren",
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const bottomVariants = {
    close: {
      y: 0,
      transition: {
        when: "afterChildren",
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      y: "-0.5rem",
      rotate: -45,
      originX: "center",
      backgroundColor: "white",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const menuVariants = {
    close: {
      y: "-100%",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        type: "spring",
        stiffness: 300,
        damping: 35,
      },
    },
  };

  const navVariants = {
    initial: {
      y: 60,
    },
    animate: {
      y: 0,
      transition: {
        delay: 0.7,
        staggerChildren: 0.4,
        delayChildren: 0.2,
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  // const menuVariants = {
  //   close: {
  //     clipPath: "circle(0% at 50% -30%)",
  //     transition: {
  //       delay: 0.2,
  //       staggerChildren: 0.1,
  //       staggerDirection: -1,
  //       type: "spring",
  //       stiffness: 100,
  //       damping: 30,
  //       resDelta: 30,
  //     },
  //   },
  //   open: {
  //     clipPath: "circle(200% at 50% 100%)",
  //     transition: {
  //       staggerChildren: 0.1,
  //       type: "spring",
  //       stiffness: 30,
  //       damping: 40,
  //       resDelta: 2,
  //     },
  //   },
  // };

  const listItemsVariants = {
    close: {
      x: -10,
      rotateX: 180,
       opacity: 0, 
      },
    open: {
      x: 0,
      rotateX: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={navVariants}
      initial="initial"
      animate="animate"
      className="w-full h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
      {/* LOGO */}
      <motion.div
        className="overflow-hidden text-2xl font-bold bg-white text-black rounded-full p-1 cursor-pointer hover:bg-slate-500 hover:text-white transition-all duration-300 ease-in-out shadow-lg"
        variants={navVariants}>
        <Logo variants={navVariants} />
      </motion.div>

      {/* MENU TOP */}
      <div className="hidden w-full md:flex items-center justify-end uppercase gap-12 mr-14 overflow-hidden">
        {navLinks.map((link, index) => {
          return (
            <motion.div
              key={index}
              className="border-y relative overflow-hidden pText">
              <Link
                href={link.href}
                className={` bg-black overflow-hidden ${
                  pathName === link.href && "font-bold tracking-tighter"
                }`}>
                <AnimatedLink title={link.text} />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* {links.map((link) => (
          <NavLink key={link.title} link={link} variants={navVariants} />
        ))}*/}

      {/* MENU RESPONSIVE */}
      <div className="">
        {/* BURGER BUTTON */}
        <div className="fixed top-4 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 z-50">
          <button
            className=" w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-50 relative"
            onClick={() => setIsOpen((prev) => !prev)}>
            <motion.div
              variants={topVariants}
              animate={isOpen ? "open" : "close"}
              className="w-8 h-[3px] bg-black rounded"></motion.div>
            <motion.div
              variants={middleVariants}
              animate={isOpen ? "open" : "close"}
              className="w-8 h-[3px] bg-black rounded "></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={isOpen ? "open" : "close"}
              className="w-8 h-[3px] bg-black rounded"></motion.div>
          </button>
        </div>

        {/* DESKTOP MENU 3 traits */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="close"
              animate="open"
              exit="close"
              className="flex flex-col justify-center items-center gap-2 fixed left-0 top-0 bg-black text-white w-full min-h-screen h-auto z-40 py-16">
              <div className=" flex flex-col items-end justify-center gap-6 w-[80%] h-[90%]">
                <div className="flex items-center justify-between w-full mb-8 border-transparent border-y-slate-600 border-y-[0.5px] py-8 text-sm text-slate-600 ">
                  Navigation
                  <Social />
                </div>
                {navLinks.map((link) => (
                  <motion.div
                    variants={listItemsVariants}
                    className="flex justify-start z-50 w-full text-center rounded-md"
                    key={link.title}>
                    <Link
                      className=" cursor-pointer text-[5rem] font-bold"
                      href={link.href}>
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
