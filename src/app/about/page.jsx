"use client";

import Image from "next/image";
import signature from "../../images/signature.png";

const AboutPage = () => {
  return (
    <div className="">
      <div className="min-h-screen bg-slate-400 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 px-4 sm:px-8 md:px-12 lg:px20 xl:px48 text-xl  py-16">
        <div className="flex flex-col gap-12 justify-center">
          <h1 className="font-bold text-2xl">BIOGRAPHIE</h1>
          <p>
            Je suis un développeur web full stack passionné par la création de
            sites web et d'applications web. J'ai une expérience de plus de 5
            ans dans le développement web. J'ai travaillé sur des projets allant
            de simples sites web à des applications web complexes. J'ai une
            solide expérience dans le développement de sites web responsives, de
            sites web e-commerce et d'applications web personnalisées.
          </p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            cum. Delectus adipisci esse commodi rerum?
          </span>
          <div className="flex justify-end">
            <Image
              src={signature}
              layout="responsive"
              alt="about"
              className="max-w-[10rem]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-12 justify-center">
          <h1 className="font-bold text-2xl">SKILLS</h1>
          <div className="flex flex-wrap gap-4">
            <div className="rounded p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
            <div className="rounded p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
            <div className="rounded p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
            <div className="rounded p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
            <div className="rounded p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
            <div className="rounded p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
            <div className="rounded p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
            <div className="rounded p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
            <div className="rounded p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
            <div className="rounded p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
            <div className="rounded p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
