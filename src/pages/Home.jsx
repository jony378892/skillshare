import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import NewsLetter from "../components/NewsLetter";
import PopularSkills from "../components/PopularSkills";
import TopRatedProvider from "../components/TopRatedProvider";

export default function Home() {
  return (
    <div className="custom-font">
      <HeroSection />
      <PopularSkills />
      <div className="divider"></div>

      <TopRatedProvider />
      <div className="divider"></div>

      <HowItWorks />
      <div className="divider"></div>
      <NewsLetter />
    </div>
  );
}
