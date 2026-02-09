"use client";

import Sidebar from "@/components/profile/Sidebar";
import MyHorseHeader from "@/components/profile/my-horse/MyHorseHeader";
import MyHorseStats from "@/components/profile/my-horse/MyHorseStats";
import ListingTabs from "@/components/profile/my-horse/ListingTabs";
import MyHorseCard from "@/components/profile/my-horse/MyHorseCard";
import { useState } from "react";
import { Menu } from "lucide-react";
import marketplace1 from "@/assets/images/marketplace1.png";
import marketplace2 from "@/assets/images/marketplace2.png";
import marketplace3 from "@/assets/images/marketplace3.png";

const mockHorses = [
    {
        id: 1,
        name: "Thunderbolt",
        price: 12500,
        breed: "Arabian",
        age: 5,
        gender: "Stallion",
        status: "Active",
        views: "1.2k",
        favorites: 45,
        timeAgo: "3d ago",
        image: marketplace1
    },
    {
        id: 2,
        name: "Rusty Spirit",
        price: 8200,
        breed: "Quarter Horse",
        age: 7,
        gender: "Gelding",
        status: "Active",
        views: "850",
        favorites: 22,
        timeAgo: "1w ago",
        image: marketplace2
    },
    {
        id: 3,
        name: "Midnight Star",
        price: 25000,
        breed: "Friesian",
        age: 4,
        gender: "Mare",
        status: "Pending",
        views: "2.5k",
        favorites: 156,
        timeAgo: "2w ago",
        image: marketplace3
    }
];

export default function MyHorsePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className="lg:pl-64 flex flex-col transition-all duration-300">
                <div className="flex-1 px-4 py-6 md:px-8 lg:px-12 lg:py-10 pt-4 lg:pt-8 space-y-8 lg:space-y-3">
                    {/* Mobile Menu Toggle & Header */}
                    <div className="lg:hidden flex items-center justify-between bg-white px-3 py-2 md:px-6 md:py-4 rounded-2xl border border-gray-200 shadow-sm mb-4">
                        <h1 className="text-[19px] font-[600]">My Horse</h1>
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2.5 bg-gray-50 rounded-xl text-gray-600 hover:text_color transition-colors"
                        >
                            <Menu size={22} />
                        </button>
                    </div>

                    <MyHorseHeader />
                    <MyHorseStats />
                    <ListingTabs />

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                        {mockHorses.map(horse => (
                            <MyHorseCard key={horse.id} horse={horse} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
