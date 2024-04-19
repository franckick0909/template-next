import React from 'react'
import Image from 'next/image'
import imgHero from '../images/man_7.png'

const HomePage = () => {

  return (
    <main className="flex-col items-center text-dark w-full min-h-dvh px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <section className="md:flex items-center justify-between w-full  bg-amber-200">

        <div className="flex flex-col items-center justify-center flex-[2] bg-violet-300">
          <h1 className="text-4xl font-bold">Welcome to</h1>
          <h1 className="text-6xl font-bold">Next.js</h1>
          <p className="text-2xl">A React Framework</p>
        </div>

        <div className="flex flex-1 bg-blue-300">
          <Image src={imgHero} alt="hero" width={500} height={500} className='max-w-[350px] md:max-w-full h-auto block ' />
        </div>

      </section>
    </main>
  );
}

export default HomePage