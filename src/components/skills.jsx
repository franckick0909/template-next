"use client"



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
      // <section ref={skillRef} className="flex flex-col gap-12 justify-center">
      //   <div

      //     className="flex items-baseline gap-8">
      //     <motion.h1
      //     initial={{ x: "-300px" }}
      //     animate={ isSkillRefInView ? { x: 0 } : {}}
      //     transition={{ delay: 0.2}}  
      //       className="playfair">02</motion.h1>
      //     <h2 className="font-bold text-2xl">SKILLS</h2>
      //   </div>

        <div className="flex flex-wrap gap-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white pText text-black hover:bg-black hover:text-white px-3 py-2 rounded-lg shadow-lg cursor-pointer font-bold">
              {skill}
            </div>
          ))}
        </div>

    );
}

export default Skills;