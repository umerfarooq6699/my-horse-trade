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
        createdAt: new Date("2024-03-01"),
        image: marketplace1.src
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
        createdAt: new Date("2024-02-15"),
        image: marketplace2.src
    },
    {
        id: 3,
        name: "Midnight Star",
        price: 25000,
        breed: "Friesian",
        age: 4,
        gender: "Mare",
        status: "Draft",
        views: "0",
        favorites: 0,
        createdAt: new Date("2024-03-04"),
        image: marketplace3.src
    },
    {
        id: 4,
        name: "Silver Bullet",
        price: 15000,
        breed: "Thoroughbred",
        age: 6,
        gender: "Stallion",
        status: "Sold",
        views: "3.5k",
        favorites: 89,
        createdAt: new Date("2024-01-20"),
        image: marketplace1.src
    },
    {
        id: 5,
        name: "Golden Joy",
        price: 18000,
        breed: "Palomino",
        age: 8,
        gender: "Mare",
        status: "Active",
        views: "1.8k",
        favorites: 67,
        createdAt: new Date("2024-02-28"),
        image: marketplace2.src
    }
];

export default function MyHorsePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Active Listings");
    const [sortBy, setSortBy] = useState("Newest First");

    // Filtering Logic
    const filteredHorses = mockHorses.filter(horse => {
        if (activeTab === "Active Listings") return horse.status === "Active" || horse.status === "Pending";
        if (activeTab === "Drafts") return horse.status === "Draft";
        if (activeTab === "Sold History") return horse.status === "Sold";
        return true;
    });

    // Sorting Logic
    const sortedHorses = [...filteredHorses].sort((a, b) => {
        if (sortBy === "Newest First") return b.createdAt - a.createdAt;
        if (sortBy === "Price: Low to High") return a.price - b.price;
        if (sortBy === "Price: High to Low") return b.price - a.price;
        return 0;
    });

    // Tab Counts
    const counts = {
        active: mockHorses.filter(h => h.status === "Active" || h.status === "Pending").length,
        drafts: mockHorses.filter(h => h.status === "Draft").length,
        sold: mockHorses.filter(h => h.status === "Sold").length
    };

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
                    <ListingTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        counts={counts}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                        {sortedHorses.map(horse => (
                            <MyHorseCard key={horse.id} horse={horse} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
