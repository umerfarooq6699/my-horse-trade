import SectionHeader from "./SectionHeader";
import HorseCard from "./HorseCard";

const featuredHorses = [
    {
        id: 5,
        name: "Midnight Runner",
        breed: "Clydesdale",
        age: 5,
        price: 32000,
        location: "Scotland, UK",
        image: "/images/horse2.png",
        tag: "Featured"
    },
    {
        id: 6,
        name: "Apollo",
        breed: "Andalusian",
        age: 6,
        price: 45000,
        location: "Spain",
        image: "/images/horse1.png",
        tag: "Active"
    },
    {
        id: 7,
        name: "Star Light",
        breed: "Hanoverian",
        age: 7,
        price: 28000,
        location: "Germany",
        image: "/images/horse2.png",
        tag: "Best Deal"
    },
    {
        id: 8,
        name: "Chestnut",
        breed: "Quarter Horse",
        age: 4,
        price: 18500,
        location: "Texas, USA",
        image: "/images/horse1.png",
        tag: null
    }
];

export default function FeaturedHorses() {
    return (
        <section className="py-20 bg-white">
            <div className="container-width px-4">
                <SectionHeader
                    title="Featured Horses"
                    subtitle="Hand-Picked For You"
                    linkText="View All Featured"
                    linkUrl="/featured"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredHorses.map((horse) => (
                        <HorseCard key={horse.id} horse={horse} />
                    ))}
                </div>
            </div>
        </section>
    );
}
