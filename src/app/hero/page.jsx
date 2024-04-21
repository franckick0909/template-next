
import Image from "next/image";
import imgHero from "../../images/voiture.jpg";
import TextSliding from "../../components/TextSliding";



const HeroPage = () => {


    return (
      <>
        <section className="relative w-full h-screen md:flex items-center justify-between gap-8 bg-amber-200">
          <div className="flex-1 bg-violet-300 grid items-center justify-center gap-4">
            <h2 className="text-2xl font-bold ">Freelance</h2>
            <h2 className="text-2xl font-bold">Designer & Developpeur</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quas.
            </p>
            <div className="flex gap-2">
              <button className="border-2">btn 1</button>
              <button className="border-2">btn 2</button>
            </div>
          </div>

          <div className="flex-1 items-center justify-center grid max-w-[31rem] bg-blue-300 rounded-full shadow-3xl">
            <Image
              src={imgHero}
              alt="hero"
              className="max-w-full h-auto block rounded-full"
            />
          </div>
          <div className="absolute bottom-[7rem] flex container mx-auto text-white font-bold text-9xl whitespace-nowrap overflow-hidden">
            <TextSliding
              className="font-Space_Grotesk"
              text="Franck Chapelon Developpeur"
            />
                </div>
                <div className="">
                </div>
                
        </section>
      </>
    );  
};

export default HeroPage;
