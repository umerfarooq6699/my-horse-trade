import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import TrendingHorses from "../components/Home/TrendingHorses";
import TopRatedHorses from "../components/Home/TopRatedHorses";
import StatsSection from "../components/Home/StatsSection";
import FeaturedHorses from "../components/Home/FeaturedHorses";
import FeaturesHighlights from "../components/Home/FeaturesHighlights";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrendingHorses />
      <TopRatedHorses />
      <StatsSection />
      <FeaturedHorses />
      <FeaturesHighlights />
      <Footer />
    </main>
  );
}
