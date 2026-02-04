"use client";

import HorseCard from "./HorseCard";

const mockHorses = [
    {
        id: 1,
        name: "Midnight Star",
        breed: "Friesian • Stallion",
        age: 6,
        height: 16.2,
        location: "Kentucky, USA",
        price: 45000,
        image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071",
        isPremium: true,
    },
    {
        id: 2,
        name: "Cyber Spirit",
        breed: "Arabian • Mare",
        age: 7,
        height: 15.1,
        location: "Dubai, UAE",
        price: 125000,
        image: "https://images.unsplash.com/photo-1537151672256-6cab2e7f7c8d?q=80&w=2070",
        isVerified: true,
    },
    {
        id: 3,
        name: "Apollo's Flight",
        breed: "Warmblood • Gelding",
        age: 9,
        height: 17.0,
        location: "Berlin, Germany",
        price: 62000,
        image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=1974",
    },
    {
        id: 4,
        name: "Silver Mist",
        breed: "Andalusian • Mare",
        age: 6,
        height: 16.0,
        location: "Madrid, Spain",
        price: 85000,
        image: "https://images.unsplash.com/photo-1517436073-3b102283a005?q=80&w=2074",
        isPremium: true,
    },
    {
        id: 5,
        name: "Red Comet",
        breed: "Thoroughbred • Stallion",
        age: 4,
        height: 16.3,
        location: "Ocala, FL, USA",
        price: 38500,
        image: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&w=2069",
    },
    {
        id: 6,
        name: "Shadow Dancer",
        breed: "Dutch Warmblood • Mare",
        age: 10,
        height: 16.1,
        location: "Amsterdam, NL",
        price: 55000,
        image: "https://images.unsplash.com/photo-1553284965-519894676527?q=80&w=2071",
        isNew: true,
    },
];

export default function HorseGrid({ viewMode }) {
    return (
        <div>
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {mockHorses.map((horse) => (
                    <HorseCard key={horse.id} horse={horse} />
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <button className="flex items-center gap-3 px-8 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 font-bold hover:bg-gray-50 transition-all shadow-sm">
                    <div className="w-5 h-5 flex items-center justify-center border-2 border-[var(--theme-color)] rounded-md">
                        <div className="w-1.5 h-1.5 bg-[var(--theme-color)] rounded-full"></div>
                    </div>
                    Load More Horses
                </button>
            </div>
        </div>
    );
}
