import HeroPage from "./hero/page";
import PortfolioPage from "./portfolio/page";

const HomePage = () => {
  return (
    <main className="flex-col items-center text-dark w-full min-h-dvh px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <HeroPage />
      <PortfolioPage />
    </main>
  );
};

export default HomePage;
