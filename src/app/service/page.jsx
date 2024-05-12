"use client";
import { motion } from "framer-motion";


const ServicePage = () => {


  const data = [
    { id: 1, title: "Web Development", description: "I can build a website for you using the latest technologies like React, Next.js, TailwindCSS, etc." },
    { id: 2, title: "Mobile Development", description: "I can build a mobile app for you using the latest technologies like React Native, Expo, etc." },
    { id: 3, title: "Backend Development", description: "I can build a backend for your website or mobile app using the latest technologies like Node.js, Express, etc." },
    { id: 4, title: "UI/UX Design", description: "I can design a user interface for your website or mobile app using the latest technologies like Figma, Adobe XD, etc." },
    { id: 5, title: "SEO", description: "I can optimize your website for search engines using the latest technologies like Google Analytics, Google Search Console, etc." },
    { id: 6, title: "Social Media Marketing", description: "I can promote your website or mobile app on social media using the latest technologies like Facebook, Instagram, etc." },
    { id: 7, title: "Content Writing", description: "I can write content for your website or mobile app using the latest technologies like Grammarly, Hemingway, etc." },
  ]

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="h-[600vh] bg-blue-200">
      <section className="relative w-full min-h-dvh m-auto flex flex-col gap-8 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <div className="w-full h-[10rem] flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center">Services</h1>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">Here are some of the services I offer.</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <div key={item.id} className="w-full h-[20rem] flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default ServicePage;
