import Collapse from "@/components/collapse";

const PortfolioPage = () => {
  return (
    <section className='className="w-full h-screen flex flex-col items-center  px-4 sm:px-8 md:px-12 lg:px20 xl:px48 text-xl py-14 gap-8 bg-slate-300'>
      <h1 className="text-3xl font-bold mb-20">Portfolio</h1>
      <Collapse />
    </section>
  );
}

export default PortfolioPage;