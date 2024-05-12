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