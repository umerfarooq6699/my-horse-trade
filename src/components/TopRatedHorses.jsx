import SectionHeader from "./SectionHeader";
import Link from "next/link";

const topRated = [
    {
        id: 101,
        name: "Desert King",
        rating: 5,
        reviews: 12,
        price: 35000,
        category: "Endurance",
        image: "/images/horse1.png"
    },
    {
        id: 102,
        name: "Black Prince",
        rating: 5,
        reviews: 8,
        price: 42000,
        category: "Dressage",
        image: "/images/horse2.png"
    },
    {
        id: 103,
        name: "Golden Jewel",
        rating: 4,
        reviews: 24,
        price: 28500,
        category: "Show Jumping",
        image: "/images/horse1.png"
    }
];

export default function TopRatedHorses() {
    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="container-width px-4">
                <SectionHeader
                    title="Top Rated Horses"
                    subtitle="Expert Choice"
                    linkText="See Top Rated"
                    linkUrl="/top-rated"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topRated.map((horse) => (
                        <div key={horse.id} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all group bg-white">
                            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 relative">
                                <img src={horse.image} alt={horse.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div>
                                <div className="flex text-yellow-400 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill={i < horse.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    ))}
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">{horse.name}</h4>
                                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-medium">{horse.category}</p>
                                <p className="text-blue-600 font-bold">${horse.price.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
