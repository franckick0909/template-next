"use client";

import { useState } from "react";
import Collapse from "@/components/collapse";
import img1 from "@/images/gallery/img1.png";
import img2 from "@/images/gallery/img2.png";
import img3 from "@/images/gallery/img3.png";
import img4 from "@/images/gallery/img7.png";
import img5 from "@/images/gallery/img5.png";
import img6 from "@/images/gallery/img6.png";
import { AnimatePresence, motion } from "framer-motion";
import PhraseSplit from "@/components/phraseSplit";

const projet = [
  {
    id: "1",
    num: "01",
    image: img1,
    title: "Kasa",
    date: "2023",
    stack: "React, Sass",
    theme: "Site vitrine",
    desc: "Kasa est une entreprise de location de logements de vacances qui souhaite se démarquer de ses concurrents. J'ai réalisé une landing page pour leur site web. J'ai utilisé React avec Vite.js pour la partie front-end et Sass pour le style. Ce projet m'a permis de travailler sur React et de découvrir Vite.js, un outil de build rapide pour les projets React. J'ai également utilisé Git pour versionner mon code et GitHub pour héberger mon projet.",
    href: "https://franckick0909.github.io/kasa-react/",
    github: "https://github.com/franckick0909/kasa-react",
  },
  {
    id: "2",
    num: "02",
    image: img2,
    title: "Sophie Bluel",
    date: "2024",
    stack: "JavaScript, Sass",
    theme: "Site Portfolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum, nesciunt cupiditate placeat enim excepturi ipsa magnam cumque ullam corrupti officia deserunt voluptatum cum illum quibusdam deleniti neque voluptas nostrum tempora est totam nulla? Beatae fugiat molestias saepe, veniam optio modi aut nihil illum, quod ea sed vero, explicabo itaque.",
    href: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
    github: "https://github.com",
  },
  {
    id: "3",
    num: "03",
    image: img3,
    title: "Portfolio #1",
    date: "2024",
    stack: "React, Sass, Framer-motion",
    theme: "Site Portfolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum, nesciunt cupiditate placeat enim excepturi ipsa magnam cumque ullam corrupti officia deserunt voluptatum cum illum quibusdam deleniti neque voluptas nostrum tempora est totam nulla? Beatae fugiat molestias saepe, veniam optio modi aut nihil illum, quod ea sed vero, explicabo itaque.",
    href: "https://kasa.com",
    github: "https://github.com",
  },
  {
    id: "4",
    num: "04",
    image: img4,
    title: "MovieDB",
    date: "2024",
    stack: "React, Sass, Framer-motion, API",
    theme: "Site Evènement",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum, nesciunt cupiditate placeat enim excepturi ipsa magnam cumque ullam corrupti officia deserunt voluptatum cum illum quibusdam deleniti neque voluptas nostrum tempora est totam nulla? Beatae fugiat molestias saepe, veniam optio modi aut nihil illum, quod ea sed vero, explicabo itaque.",
    href: "https://kasa.com",
    github: "https://github.com",
  },
  {
    id: "5",
    num: "05",
    image: img5,
    title: "OhMyFood",
    date: "2023",
    stack: "HTML, CSS",
    theme: "Site Ecommerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum, nesciunt cupiditate placeat enim excepturi ipsa magnam cumque ullam corrupti officia deserunt voluptatum cum illum quibusdam deleniti neque voluptas nostrum tempora est totam nulla? Beatae fugiat molestias saepe, veniam optio modi aut nihil illum, quod ea sed vero, explicabo itaque.",
    href: "https://kasa.com",
    github: "https://github.com",
  },
  {
    id: "6",
    num: "06",
    image: img6,
    title: "ArgentBank",
    date: "2024",
    stack: "React, Redux, Sass, MongoDB, Node.js",
    theme: "Site Personnel",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum, nesciunt cupiditate placeat enim excepturi ipsa magnam cumque ullam corrupti officia deserunt voluptatum cum illum quibusdam deleniti neque voluptas nostrum tempora est totam nulla? Beatae fugiat molestias saepe, veniam optio modi aut nihil illum, quod ea sed vero, explicabo itaque.",
    href: "https://kasa.com",
    github: "https://github.com",
  },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("Tous");

  const filteredProjects =
    filter === "Tous" ? projet : projet.filter((p) => p.theme === filter);


    const variants = {
      hidden: {
        opacity: 0,
        y: 100,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
      exit: {
        opacity: 0,
        y: 100,
        transition: {
          duration: 0.5,
        },
      },
    };
  


  return (
    <AnimatePresence>
    <section className="w-full min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-xl py-14 bg-white">
      <div className="flex items-center justify-center w-full ">
        <h1 className="overflow-hidden playfair uppercase flex items-center gap-4">
          <PhraseSplit phrase="Mes Projets" />
          
        </h1>
      </div>

      <article className="flex justify-between gap-4 max-lg:flex-col w-full h-full mt-8">
        <div className="max-w-full lg:w-56 bg-white p-4 rounded-lg ">
          <h2 className="text-2xl font-bold mb-4">Filtres</h2>
          <div className="border-[1px] border-indigo-500 mb-8"></div>
          <div className="flex lg:flex-col flex-wrap gap-2 justify-start w-full items-start text-left flex-shrink-0">
            <button
              onClick={() => setFilter("Tous")}
              className={`text-slate-950 rounded-md text-base hover:text-fuchsia-500 hover:bg-slate-200 px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Tous" ? "bg-fuchsia-500 text-white" : ""}`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter("Site Portfolio")}
              className={`text-slate-950 rounded-md text-base hover:text-fuchsia-500 hover:bg-slate-200 px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Site Portfolio" ? "bg-fuchsia-500 text-white" : ""}`}
            >
              Site Portfolio
            </button>
            <button
              onClick={() => setFilter("Site Vitrine")}
              className={`text-slate-950 rounded-md text-base hover:text-fuchsia-500 hover:bg-slate-200 px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Site Vitrine" ? "bg-fuchsia-500 text-white" : ""}`}
            >
              Site Vitrine
            </button>
            <button
              onClick={() => setFilter("Site Ecommerce")}
              className={`text-slate-950 rounded-md text-base hover:text-fuchsia-500 hover:bg-slate-200 px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Site Ecommerce" ? "bg-fuchsia-500 text-white" : ""}`}
            >
              Site Ecommerce
            </button>
            <button
              onClick={() => setFilter("Site Evènement")}
              className={`text-slate-950 rounded-md text-base hover:text-fuchsia-500 hover:bg-slate-200 px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Site Evènement" ? "bg-fuchsia-500 text-white" : ""}`}
            >
              Site Evènement
            </button>
            <button
              onClick={() => setFilter("Site Personnel")}
              className={`text-slate-950 rounded-md text-base hover:text-fuchsia-500 hover:bg-slate-200 px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Site Personnel" ? "bg-fuchsia-500 text-white" : ""}`}
            >
              Site Personnel
            </button>
            <button
              onClick={() => setFilter("Site Entreprise")}
              className={`text-slate-950 rounded-md text-base hover:text-fuchsia-500 hover:bg-slate-200 px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Site Entreprise" ? "bg-fuchsia-500 text-white" : ""}`}
            >
              Site Entreprise
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 flex-1 p-4  rounded-lg bg-white">
          {filteredProjects.map((projet) => (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              exit="exit"
             key={projet.id} className="">
              <Collapse
                num={projet.num}
                title={projet.title}
                stack={projet.stack}
                date={projet.date}
                imgProjet={projet.image}
                theme={projet.theme}
                desc={projet.desc}
                href={projet.href}
                github={projet.github}
              />
            </motion.div>
          ))}
        </div>
      </article>
    </section>
    </AnimatePresence>
  );
};

export default PortfolioPage;

// target="_blank"
// rel="noopener noreferrer"
