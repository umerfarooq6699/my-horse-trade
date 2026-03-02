import SectionHeader from "./SectionHeader";
import trendingImage from "../../assets/images/home-trending1.png";

const topRated = [
    {
        id: 101,
        name: "Desert King",
        category: "Arabian Stallion",
        price: 75000,
        image: trendingImage.src,
        rating: 5
    },
    {
        id: 102,
        name: "Storm Breaker",
        category: "Thoroughbred Mare",
        price: 52000,
        image: trendingImage.src,
        rating: 5
    },
    {
        id: 103,
        name: "Golden Leaper",
        category: "Warmblood Gelding",
        price: 48000,
        image: trendingImage.src,
        rating: 5
    }
];

function TopRatedCard({ horse }) {
    return (
        <div className="bg-[#f8faff] p-3 rounded-2xl border border-gray-100/50 flex items-center gap-4 transition-all hover:shadow-lg hover:shadow-blue-500/5 group">
            <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <img
                    src={horse.image}
                    alt={horse.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="flex-1">
                <div className="flex gap-0.5 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill={i < horse.rating ? "#FFC107" : "none"} stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                    ))}
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-tight mb-0.5">{horse.name}</h3>
                <p className="text-gray-400 text-[11px] mb-2">{horse.category}</p>
                <p className="text_color font-bold text-sm">${horse.price.toLocaleString()}</p>
            </div>
        </div>
    );
}

export default function TopRatedHorses() {
    return (
        <section className="mobile_spaces lg_spaces bg-white">
            <div className="container-width">
                <SectionHeader
                    title="Top Rated Horses"
                    subtitle="CUSTOMER FAVORITES"
                    linkText="See All Top Rated"
                    linkUrl="/marketplace"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {topRated.map((horse) => (
                        <TopRatedCard key={horse.id} horse={horse} />
                    ))}
                </div>
            </div>
        </section>
    );
}
