"use client";

import HorseCard from "./HorseCard";
import image1 from "../../assets/images/marketplace1.png"
import image2 from "../../assets/images/marketplace2.png"
import image3 from "../../assets/images/marketplace3.png"
import image4 from "../../assets/images/marketplace4.png"
import image5 from "../../assets/images/marketplace5.png"
import image6 from "../../assets/images/marketplace6.png"

const mockHorses = [
    {
        id: 1,
        name: "Midnight Star",
        breed: "Friesian • Stallion",
        age: 6,
        height: 16.2,
        location: "Kentucky, USA",
        price: 45000,
        image: image1.src,
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
        image: image2.src,
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
        image: image3.src,
    },
    {
        id: 4,
        name: "Silver Mist",
        breed: "Andalusian • Mare",
        age: 6,
        height: 16.0,
        location: "Madrid, Spain",
        price: 85000,
        image: image4.src,
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
        image: image5.src,
    },
    {
        id: 6,
        name: "Shadow Dancer",
        breed: "Dutch Warmblood • Mare",
        age: 10,
        height: 16.1,
        location: "Amsterdam, NL",
        price: 55000,
        image: image6.src,
        isNew: true,
    },
];

export default function HorseGrid({ viewMode }) {
    console.log(image1)
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
