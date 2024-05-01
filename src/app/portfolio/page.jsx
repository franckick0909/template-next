import Collapse from "@/components/collapse";

const PortfolioPage = () => {
  return (
    <section className='w-full min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-xl py-14 gap-8'>
      <h1 className="text-3xl font-bold mb-20">Portfolio</h1>
      <Collapse />
      <Collapse />
      <Collapse />
    </section>
  );
}

export default PortfolioPage;