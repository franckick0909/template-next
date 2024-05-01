"use client";


const Timeline = () => {


  return (
    <section className="flex md:gap-24 max-lg:flex-col">
      <h1 className="font-bold text-2xl">EXPERIENCE</h1>

      <div className="relative min-h[150px] flex flex-col justify-center items-start lg:items-center mt-24">
        <div className="absolute z-[2] left-[-1px] lg:left-[calc(50%-1px)] top-0 bottom-[0%] w-[3px] bg-black rounded shadow-lg"></div>
        <div className="z-10 w-6 h-6 absolute block rounded-full bg-white top-[-25px] lg:left-1/2 transform translate-x-[-50%] shadow-lg"></div>

        <div className="flex relative translate-x-[-50%] items-center rounded-lg px-4 my-8 max-h-full odd:flex-row-reverse odd:translate-x-0 lg:odd:translate-x-[50%] max-w-[35rem]">
          <div className="absolute block h-4 w-4 rounded-full bg-black left-0 top-[10%] transform translate-x-[-50%] shadow-lg"></div>
          <div className="max-w-[calc(30rem-2rem)] bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">Intégrateur Web</h2>
            <p className="text-sm text-slate-700 font-bold">2023 - 2024</p>
            <p className="text-base">
              Reconversion professionnelle pour être développeur web à plein
              temps.
            </p>
          </div>
        </div>
        <div className="flex relative translate-x-0 lg:translate-x-[-50%] items-center rounded-lg px-4 my-8 max-h-full odd:flex-row-reverse  lg:odd:translate-x-[50%] max-w-[35rem]">
          <div className="absolute block h-4 w-4 rounded-full bg-black left-0 lg:left-full top-[10%] transform translate-x-[-50%] shadow-lg"></div>
          <div className="max-w-[calc(30rem-2rem)] bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">Intégrateur Web</h2>
            <p className="text-sm text-slate-700 font-bold">2023 - 2024</p>
            <p className="text-base">
              Reconversion professionnelle pour être développeur web à plein
              temps.
            </p>
          </div>
        </div>
        <div className="flex relative translate-x-[-50%] items-center rounded-lg px-4 my-8 max-h-full odd:flex-row-reverse odd:translate-x-0 lg:odd:translate-x-[50%] max-w-[35rem]">
          <div className="absolute block h-4 w-4 rounded-full bg-black left-0 top-[10%] transform translate-x-[-50%] shadow-lg"></div>
          <div className="max-w-[calc(30rem-2rem)] bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">Intégrateur Web</h2>
            <p className="text-sm text-slate-700 font-bold">2023 - 2024</p>
            <p className="text-base">
              Reconversion professionnelle pour être développeur web à plein
              temps.
            </p>
          </div>
        </div>
        <div className="flex relative translate-x-0 lg:translate-x-[-50%] items-center rounded-lg px-4 my-8 max-h-full odd:flex-row-reverse  lg:odd:translate-x-[50%] max-w-[35rem]">
          <div className="absolute block h-4 w-4 rounded-full bg-black left-0 lg:left-full top-[10%] transform translate-x-[-50%] shadow-lg"></div>
          <div className="max-w-[calc(30rem-2rem)] bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">Intégrateur Web</h2>
            <p className="text-sm text-slate-700 font-bold">2023 - 2024</p>
            <p className="text-base">
              Reconversion professionnelle pour être développeur web à plein
              temps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;