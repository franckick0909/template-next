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

  // const menuVariants = {
  //   close: {
  //     y: "-100%",
  //     transition: {
  //       when: "afterChildren",
  //       staggerChildren: 0.1,
  //       staggerDirection: -1,
  //       type: "spring",
  //       stiffness: 300,
  //       damping: 30,
  //     },
  //   },
  //   open: {
  //     y: 0,
  //     transition: {
  //       when: "beforeChildren",
  //       staggerChildren: 0.1,
  //       type: "spring",
  //       stiffness: 300,
  //       damping: 35,
  //     },
  //   },
  // };

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
      },
    },
  };

  return (
    <motion.header className="w-full h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
      {/* LOGO */}
      <motion.div className="overflow-hidden text-2xl font-bold bg-white text-black rounded-full p-1 cursor-pointer hover:bg-slate-500 hover:text-white transition-all duration-300 ease-in-out shadow-lg">
        <Logo />
      </motion.div>

      {/* MENU TOP */}
      <nav className="hidden w-full md:flex items-center justify-end uppercase gap-12 mr-14 overflow-hidden">
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
      </nav>

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
            <motion.nav
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen z-40 p-10 bg-black flex justify-center items-center origin-top">
              <div className="h-full flex flex-col justify-center items-start w-3/4">
                <div className="flex items-center justify-between w-full mb-4 border-transparent border-y-slate-600 border-y-[0.5px] py-8 text-sm text-slate-600 ">
                  Navigation
                  <Social />
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full w-full justify-center gap-0 font-serif font-normal">
                  {navLinks.map((link, index) => {
                    return (
                      <div key={index} className="overflow-hidden">
                        <MobileNavLink link={link.text} href={link.href} />
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};




const MobileNavLink = ({ link, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="lora-MobileNav relative group">
      {/* <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-400 -z-10 group-hover:h-full group-hover:transition-all"></span> */}
      <span className="w-full rounded bg-gradient-to-r to-transparent via-slate-950 from-slate-800 absolute bottom-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-[-1] scale-y-0 group-hover:scale-y-75 bg-origin-content cursor-pointer "></span>
      <Link
        href={href}
        className="cursor-pointer z-[3000] text-white uppercase w-full group-hover:tracking-widest ease-linear duration-300">
        {link}
      </Link>
    </motion.div>
  );
};
