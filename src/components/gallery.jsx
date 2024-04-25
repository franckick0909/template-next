"use client";

import Image from "next/image";

import img1 from "@/images/gallery/img1.png";
import img2 from "@/images/gallery/img2.png";
import img3 from "@/images/gallery/img3.png";
import img4 from "@/images/gallery/img4.png";
import img5 from "@/images/gallery/img5.png";
import img6 from "@/images/gallery/img6.png";
import img7 from "@/images/gallery/img7.png";
import img8 from "@/images/gallery/img8.png";
import img9 from "@/images/gallery/img9.png";
import img10 from "@/images/gallery/img10.png";
import img11 from "@/images/gallery/img11.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];


import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";


export default function Gallery() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 2.5]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight / 4]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 3]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight / 3.2]);

    
    return (
      <main className="container mx-auto">
        <div className=""></div>
        <div
          ref={container}
          className="min-h-screen container flex gap-4 ">
          <Column y={y} />
          <Column y={y2} />
          <Column y={y3} />
          <Column y={y4} />
        </div>
      </main>
    );
}


const Column = ({ y=0 }) => {


  return (
    <motion.div
      style={{ y }}
      className="flex flex-col w-1/4 h-full gap-4 odd:flex-col-reverse">
      {images.map((image, index) => {
        return (
          <motion.div
            initial={{ opacity: 0.1 }}
            whileHover={{ opacity: 1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="relative overflow-hidden gap-4 rounded-xl">
            <Image src={image} alt={image} layout="responsive" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};
      




    // <div className="container max-w-full min-h-screen px-4 bg-violet-600 ">
    //   <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
    //     <div className="flex gap-4">
    //       <Image src={img1} alt="img1" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img2} alt="img2" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img3} alt="img3" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img4} alt="img4" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img5} alt="img5" />
    //     </div>
    //     <div className="flex gap-4 pt-3">
    //       <Image src={img6} alt="img6" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img7} alt="img7" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img8} alt="img8" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img9} alt="img9" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img10} alt="img10" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img11} alt="img11" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img12} alt="img12" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img1} alt="img1" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img5} alt="img5" />
    //     </div>

    //     <div className="flex gap-4">
    //       <Image src={img11} alt="img11" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img3} alt="img3" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img4} alt="img4" />
    //     </div>
    //     <div className="flex gap-4 pt-3">
    //       <Image src={img9} alt="img9" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img7} alt="img7" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img11} alt="img11" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img8} alt="img8" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img7} alt="img7" />
    //     </div>

    //     <div className="flex gap-4">
    //       <Image src={img6} alt="img6" />
    //     </div>
    //     <div className="flex gap-4">
    //       <Image src={img1} alt="img1" />
    //     </div>
    //     <div className="flex gap-4 pt-1">
    //       <Image src={img10} alt="img10" />
    //     </div>
    //   </div>
    // </div>

