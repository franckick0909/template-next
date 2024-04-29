import Image from "next/image";
import signature from "../images/signature.png";

const Biographie = () => {
  return (
    <div className="flex flex-col gap-12 justify-center">
      <h1 className="font-bold text-2xl">BIOGRAPHIE</h1>
      <p>
        Je suis un développeur web full stack passionné par la création de sites
        web et d'applications web. J'ai une expérience de plus de 5 ans dans le
        développement web. J'ai travaillé sur des projets allant de simples
        sites web à des applications web complexes. J'ai une solide expérience
        dans le développement de sites web responsives, de sites web e-commerce
        et d'applications web personnalisées.
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
  );
};

export default Biographie;
