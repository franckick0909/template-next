"use client";


import Biographie from "@/components/biographie";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";

const AboutPage = () => {
  return (
    <div className="h-full overflow-scroll">
      <div className="min-h-screen bg-slate-200 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 px-4 sm:px-8 md:px-12 lg:px20 xl:px48 text-xl  py-16">

        <Biographie />
        <Skills />

        <div className="container">
          <Timeline />
        </div>
        

      </div>
    </div>
  );
};

export default AboutPage;
