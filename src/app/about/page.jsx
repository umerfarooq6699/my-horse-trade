import AboutHero from "@/components/about/AboutHero";
import Ticker from "@/components/about/Ticker";
import FutureOfTrade from "@/components/about/FutureOfTrade";
import PlatformEvolution from "@/components/about/PlatformEvolution";
import MeetInnovators from "@/components/about/MeetInnovators";
import FindChampion from "@/components/about/FindChampion";



export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <Ticker />
            <FutureOfTrade />
            <PlatformEvolution />
            <MeetInnovators />
            <FindChampion />
        </main>
    );
}
