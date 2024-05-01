import HeroPage from "./hero/page";
import PortfolioPage from "./portfolio/page";

const HomePage = () => {
  return (
    <main className="w-full flex-col items-center text-dark min-h-dvh px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <HeroPage />
      <PortfolioPage />
    </main>
  );
};

export default HomePage;
