import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrendingHorses from "../components/TrendingHorses";
import TopRatedHorses from "../components/TopRatedHorses";
import StatsSection from "../components/StatsSection";
import FeaturedHorses from "../components/FeaturedHorses";
import FeaturesHighlights from "../components/FeaturesHighlights";
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
