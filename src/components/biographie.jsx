import Image from "next/image";
import signature from "../images/signature.png";

const Biographie = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <p className="pText">
        Je suis un développeur web full stack passionné par la création de sites
        web et d{"'"}applications web. J{"'"}ai une expérience de plus de 5 ans
        dans le développement web. J{"'"}ai travaillé sur des projets allant de
        simples sites web à des applications web complexes. J{"'"}ai une solide
        expérience dans le développement de sites web responsives, de sites web
        e-commerce et d{"'"}applications web personnalisées.
      </p>

      <div className="w-full h-full bg-slate-900 rounded-lg flex  justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col gap-4 p-4">
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="pText font-medium text-white">
              <span className="mr-2 text-fuchsia-500">&#10003;</span>Prénom:{" "}
            </p>
            <p className="pText text-slate-400">Franck Chapelon</p>
          </div>
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="pText font-medium text-white">
              <span className="mr-2 text-fuchsia-500">&#10003;</span>Age:{" "}
            </p>
            <p className="pText text-slate-400">48 ans</p>
          </div>
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="pText font-medium text-white">
              <span className="mr-2 text-fuchsia-500">&#10003;</span>
              Nationnalité:{" "}
            </p>
            <p className="pText text-slate-400">Français</p>
          </div>
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="pText font-medium text-white">
              <span className="mr-2 text-fuchsia-500">&#10003;</span>
              Emplacement:{" "}
            </p>
            <p className="pText text-slate-400">Dordogne, France</p>
          </div>
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="pText font-medium text-white">
              <span className="mr-2 text-fuchsia-500">&#10003;</span>Freelance:{" "}
            </p>
            <p className="pText text-slate-400 underline decoration-emerald-400 decoration-2 hover:decoration-4 underline-offset-4 transition-all duration-300">Disponible</p>
          </div>
        </div>
      </div>
      <q className="pText italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        cum. Delectus adipisci esse commodi rerum?
      </q>
      <div className="w-full h-max flex items-center justify-end pr-12 pb-8">
          <Image
            src={signature}
            layout="responsive"
            alt="about"
            className="max-w-[10rem]"
          />
        </div>
    </div>
  );
};

export default Biographie;
