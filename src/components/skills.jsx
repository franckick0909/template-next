"use client"

import Image from "next/image";


const Skills = () => {

    const skillsData = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "SASS",
      "MongoDB",
      "Git",
      "Figma",
      "Next.js",
      "TailwindCSS",
    ];

    return (
      <section className="flex flex-col gap-12 justify-center">
        <div className="flex items-baseline gap-8">
          <h1 className="playfair">02</h1>
          <h2 className="font-bold text-2xl">SKILLS</h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white pText text-black hover:bg-black hover:text-white px-3 py-2 rounded-lg shadow-lg cursor-pointer font-bold">
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
}

export default Skills;