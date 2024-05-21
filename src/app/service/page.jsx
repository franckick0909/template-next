"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SvgScroll from "@/components/svgScroll";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import img1 from "@/images/services/img1.jpeg";
import img2 from "@/images/services/img2.jpeg";
import img3 from "@/images/services/img3.jpeg";
import img4 from "@/images/services/img4.jpeg";

const ServicePage = () => {
  const data = [
    {
      id: 1,
      num: "01",
      title: "Entretien initial",
      description:
        "Prenez un café, un thé ou une bière et discutons. Je veux savoir comment vous avez commencé, ce que vous faites actuellement et où vous allez. Il est temps pour vous de partager votre vision. J'arrive avec beaucoup de questions, mais les questions sont simplement là pour aider à guider la conversation.",
      href: "/service/entretien-initial",
      img: img1,
    },
    {
      id: 2,
      num: "02",
      title: "Maquette du projet",
      description:
        "Réalisations d'une maquette prête à l'emploi pour votre site web, en utilisant les dernières technologies comme Figma. Vous pourrez ainsi visualiser le rendu final de votre site web avant même de commencer le développement.",
      href: "/service/maquette-projet",
      img: img2,
    },
    {
      id: 3,
      num: "03",
      title: "Référencement Naturel (SEO)",
      description:
        "Optimisation de votre site web pour les moteurs de recherche en utilisant les dernières technologies. Rapidité et performance sur l'ensemble de mes réalisations.",
      href: "/service/seo",
      img: img3,
    },
    {
      id: 4,
      num: "04",
      title: "UI/UX Design",
      description:
        "I can design a user interface for your website or mobile app using the latest technologies like Figma, Adobe XD, etc.",
      href: "/service/ui-ux-design",
      img: img4,
    },
    {
      id: 5,
      num: "05",
      title: "SEO",
      description:
        "I can optimize your website for search engines using the latest technologies like Google Analytics, Google Search Console, etc.",
      href: "/service/seo",
    },
    {
      id: 6,
      num: "06",
      title: "Social Media Marketing",
      description:
        "I can promote your website or mobile app on social media using the latest technologies like Facebook, Instagram, etc.",
      href: "/service/social-media-marketing",
    },
  ];

  // grid grid-rows-1 grid-flow-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4

  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85.8%"]);

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="h-full bg-violet-200"
    >
      <section className="h-[800vh] relative" ref={ref}>
        <div className="w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
          <h1 className="playfairSC uppercase">Mes Services</h1>
          <div className="max-w-[10%] max-h-full mt-8">
            <SvgScroll />
          </div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center bg-slate-600" />
            {data.map((item) => (
              <div
                key={item.id}
                className="w-screen h-screen flex px-4 py-16 xl:p-20 bg-slate-600"
              >
                <div className="flex justify-between items-center bg-slate-50 shadow-lg max-w-max rounded-lg p-4 gap-4  max-lg:flex-col">
                  <div className="w-full h-full flex-1 flex flex-col rounded-s-lg group">
                    <div className="w-full flex justify-between items-center">
                      <div className="kalnia font-extrabold group-hover:text-violet-300 transition-all duration-300 dropShadow ">
                        {item.num}
                      </div>
                      <Link
                        href={item.href}
                        className="max-w-[70px] max-h-[70px] w-full h-full rounded-full bg-slate-900 group-hover:bg-violet-300 transition-all duration-300 flex items-center justify-center hover:-rotate-90 shadow-md"
                      >
                        <BsArrowDownRight className="text-3xl text-white group-hover:text-black" />
                      </Link>
                    </div>

                    <div className="flex flex-col gap-12">
                      <h2 className="text-[42px] font-bold text-slate-900 leading-none group-hover:text-violet-300 transition-all duration-300 dropShadow">
                        {item.title}
                      </h2>
                      <p className="pText text-slate-600 mt-20">{item.description}</p>
                      <div className="border-b border-violet-300 w-full"></div>
                    </div>
                  </div>

                  <div className="flex-1 flex rounded-e-lg">
                    <Image
                      src={item.img}
                      alt="img"
                      className="object-cover rounded-e-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicePage;

// {
//   data.map((item) => (
//     <div
//       key={item.id}
//       className="w-screen h-screen flex flex-col gap-4 p-4 bg-slate-200 shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold">{item.title}</h2>
//       <p className="text-lg">{item.description}</p>
//     </div>
//   ));
// }
