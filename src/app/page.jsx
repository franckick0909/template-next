import TextParallax from "@/components/TextParallax";
import HeroPage from "./hero/page";
import PortfolioPage from "./portfolio/page";

const HomePage = () => {
  return (
    <main className="w-full flex-col items-center text-dark min-h-dvh">
      <HeroPage />
      <TextParallax />
      <PortfolioPage />
    </main>
  );
};

export default HomePage;
