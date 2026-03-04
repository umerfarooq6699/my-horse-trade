"use client";

import Sidebar from "@/components/profile/Sidebar";
import FavoritesHeader from "@/components/profile/favorites/FavoritesHeader";
import FavoritesStats from "@/components/profile/favorites/FavoritesStats";
import FavoritesControls from "@/components/profile/favorites/FavoritesControls";
import HorseCard from "@/components/marketplace/HorseCard";
import { useState } from "react";
import { Menu } from "lucide-react";
import marketplace1 from "@/assets/images/marketplace1.png";
import marketplace2 from "@/assets/images/marketplace2.png";
import marketplace3 from "@/assets/images/marketplace3.png";
import marketplace4 from "@/assets/images/marketplace4.png";
import marketplace5 from "@/assets/images/marketplace5.png";
import marketplace6 from "@/assets/images/marketplace6.png";

const savedHorses = [
    {
        id: 1,
        name: "Midnight Shadow",
        breed: "Friesian",
        price: 45000,
        age: "5 Yrs",
        sex: "Mare",
        discipline: "Dressage",
        skillLevel: "Advanced",
        location: "Kentucky, USA",
        image: marketplace1.src
    },
    {
        id: 2,
        name: "Desert Rose",
        breed: "Arabian",
        price: 35000,
        age: "4 Yrs",
        sex: "Mare",
        discipline: "Endurance",
        skillLevel: "Intermediate",
        location: "Dubai, UAE",
        image: marketplace2.src
    },
    {
        id: 3,
        name: "Apollo",
        breed: "Warmblood",
        price: 42000,
        age: "6 Yrs",
        sex: "Stallion",
        discipline: "Show Jumping",
        skillLevel: "Advanced",
        location: "Florida, USA",
        image: marketplace3.src,
        badge: "Hot Deal"
    },
    {
        id: 4,
        name: "Starlight",
        breed: "Appaloosa",
        price: 32000,
        age: "3 Yrs",
        sex: "Gelding",
        discipline: "Western",
        skillLevel: "Beginner",
        location: "Texas, USA",
        image: marketplace4.src
    },
    {
        id: 5,
        name: "Silver Rose",
        breed: "Quarter Horse",
        price: 18000,
        age: "7 Yrs",
        sex: "Mare",
        discipline: "Barrel Racing",
        skillLevel: "Intermediate",
        location: "Oklahoma, USA",
        image: marketplace5.src
    },
    {
        id: 6,
        name: "Hope",
        breed: "Thoroughbred",
        price: 8000,
        age: "12 Yrs",
        sex: "Gelding",
        discipline: "Trail Riding",
        skillLevel: "Beginner",
        location: "California, USA",
        image: marketplace6.src
    }
];

export default function FavoritesPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className="lg:pl-64 flex flex-col transition-all duration-300">
                <div className="flex-1 px-4 py-6 md:px-8 lg:px-12 lg:py-10 pt-4 lg:pt-8 space-y-3">
                    {/* Mobile Menu Toggle & Header */}
                    <div className="lg:hidden flex items-center justify-between bg-white px-3 py-2 md:px-6 md:py-4 rounded-2xl border border-gray-200 shadow-sm mb-4">
                        <h1 className="text-[19px] font-[600]">My Saved Horses</h1>
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2.5 bg-gray-50 rounded-xl text-gray-600 hover:text_color transition-colors"
                        >
                            <Menu size={22} />
                        </button>
                    </div>

                    <FavoritesHeader />
                    <FavoritesStats />
                    <FavoritesControls />

                    {/* Horse Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                        {savedHorses.map(horse => (
                            <HorseCard key={horse.id} horse={horse} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
