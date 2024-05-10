"use client";

import AnimatedLink from "@/app/AnimatedLink";
import { motion } from "framer-motion";
import Link from "next/link";

const NavTop = () => {

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "About", href: "/about" },
    { text: "Service", href: "/service" },
    { text: "Contact", href: "/contact" },
  ];


  return (
    <>
      <div className="flex items-start pt-32 h-screen uppercase justify-center gap-8 text-md w-full">
        {navLinks.map((link, index) => {
          return (
            <motion.div
              key={index}
              className="border relative overflow-hidden ">
              <Link href={link.href}>
                <AnimatedLink title={link.text} />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default NavTop;
