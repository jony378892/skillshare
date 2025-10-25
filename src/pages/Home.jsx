import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import NewsLetter from "../components/NewsLetter";
import Skills from "../components/Skills";
import TopRatedProvider from "../components/TopRatedProvider";

export default function Home() {
  return (
    <div className="custom-font">
      <HeroSection />
      <Skills />
      <div className="divider"></div>

      <TopRatedProvider />
      <div className="divider"></div>

      <HowItWorks />
      <div className="divider"></div>
      <NewsLetter />
    </div>
  );
}
