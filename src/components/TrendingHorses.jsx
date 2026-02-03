import SectionHeader from "./SectionHeader";
import HorseCard from "./HorseCard";

const trendingHorses = [
    {
        id: 1,
        name: "Thunder Bolt",
        breed: "Thoroughbred",
        age: 5,
        price: 15000,
        location: "Kentucky, USA",
        image: "/images/horse1.png",
        tag: "Premium"
    },
    {
        id: 2,
        name: "Royal Spirit",
        breed: "Arabian",
        age: 4,
        price: 22500,
        location: "Dubai, UAE",
        image: "/images/horse2.png",
        tag: "New"
    },
    {
        id: 3,
        name: "Night Shade",
        breed: "Friesian",
        age: 6,
        price: 18000,
        location: "Netherlands",
        image: "/images/horse1.png",
        tag: "Popular"
    },
    {
        id: 4,
        name: "Golden Glory",
        breed: "Palomino",
        age: 7,
        price: 12000,
        location: "Texas, USA",
        image: "/images/horse2.png",
        tag: null
    }
];

export default function TrendingHorses() {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container-width px-4">
                <SectionHeader
                    title="Trending Horses"
                    subtitle="Live Auctions"
                    linkText="View All"
                    linkUrl="/horses"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trendingHorses.map((horse) => (
                        <HorseCard key={horse.id} horse={horse} />
                    ))}
                </div>
            </div>
        </section>
    );
}
