"use server";
import Collapse from "@/components/collapse";
import img1 from "@/images/gallery/img1.png";
import img2 from "@/images/gallery/img2.png";
import img3 from "@/images/gallery/img3.png";
import img4 from "@/images/gallery/img7.png";
import img5 from "@/images/gallery/img5.png";
import img6 from "@/images/gallery/img6.png";

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
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum, nesciunt cupiditate placeat enim excepturi ipsa magnam cumque ullam corrupti officia deserunt voluptatum cum illum quibusdam deleniti neque voluptas nostrum tempora est totam nulla? Beatae fugiat molestias saepe, veniam optio modi aut nihil illum, quod ea sed vero, explicabo itaque.",
    href: "https://kasa.com",
    github: "https://github.com",
  },
];

const PortfolioPage = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-xl py-14 bg-gradient-to-tl from-neutral-100 to-neutral-200">

      <div className="flex items-center justify-center w-full mb-8">
        <h2 className="text-2xl font-bold">Mes projets</h2>
      </div>

      <article className="flex justify-between gap-4 max-lg:flex-col w-full h-full">

        <div className="max-w-full lg:w-56 bg-white p-4 mt-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8">Filtres</h2>
          <div className="flex flex-wrap gap-2 items-start justify-start">
            
            <button className="text-white bg-slate-600 px-4 py-2 rounded-md text-base">Tous</button>
            <button className="text-white bg-slate-600 px-4 py-2 rounded-md text-base">React</button>
            <button className="text-white bg-slate-600 px-4 py-2 rounded-md text-base">JavaScript</button>
            <button className="text-white bg-slate-600 px-4 py-2 rounded-md text-base">Sass</button>
            <button className="text-white bg-slate-600 px-4 py-2 rounded-md text-base">API</button>
            <button className="text-white bg-slate-600 px-4 py-2 rounded-md text-base">Node.js</button>
            <button className="text-white bg-slate-600 px-4 py-2 rounded-md text-base">MongoDB</button>
            <button className="text-white bg-slate-600 px-4 py-2 rounded-md text-base">Framer-motion</button>
          </div>
        </div>


        <div className="w-full flex flex-col gap-6 flex-1">
          {projet.map((projet) => {
            return (
              <div key={projet.id} className="">
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
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default PortfolioPage;

// target="_blank"
// rel="noopener noreferrer"
