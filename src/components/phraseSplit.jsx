"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";


const PhraseSplit = () => {

    const phrase = "Je suis spécialisé dans le développement front-end et la création de site web. J'aime travailler sur des projets qui me permettent de m'améliorer et d'apprendre de nouvelles choses. J'ai une bonne connaissance des technologies web et je suis toujours à la recherche de nouveaux défis.";


const slideUp = {
    initial: {
        y: "30vh",
        opacity: 0,
    },
    open: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.04 * i,
        },
    }),
    closed: {
        y: "30vh",
        opacity: 0,
    },
};

const container = useRef(null);
const  isInView  = useInView(container, { margin: "-100px"});



  return (
    <div ref={container} className="p-10">
        <div className="flex max-w-full justify-between gap-[50px]">
            <p className="flex gap-2 flex-wrap">
                {phrase.split(" ").map((word, index) => {
                    return (
                        <span key={index} className="inline-flex relative overflow-hidden">
                        <motion.span
                        custom={index}
                            variants={slideUp}
                            initial="closed"
                            animate={isInView ? "open" : "closed"}
                        >
                            {word }
                        </motion.span></span>
                    );
                })
                }
            </p>
        </div>
    </div>
  )
}

export default PhraseSplit;