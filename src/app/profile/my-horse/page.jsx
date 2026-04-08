"use client";

import Sidebar from "@/components/profile/Sidebar";
import MyHorseHeader from "@/components/profile/my-horse/MyHorseHeader";
import MyHorseStats from "@/components/profile/my-horse/MyHorseStats";
import ListingTabs from "@/components/profile/my-horse/ListingTabs";
import MyHorseTable from "@/components/profile/my-horse/MyHorseTable";
import ListingDetailsModal from "@/components/admin/listings/ListingDetailsModal";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { mockHorses as sharedMockHorses } from "@/components/marketplace/HorseGrid";
import marketplace1 from "@/assets/images/marketplace1.png";
import marketplace2 from "@/assets/images/marketplace2.png";
import marketplace3 from "@/assets/images/marketplace3.png";
import { useDispatch, useSelector } from "react-redux";
import { userListings } from "@/redux/slices/profileSlice";

const mockHorses = sharedMockHorses.map(h => ({
    ...h,
    createdAt: new Date(h.date)
}));

export default function MyHorsePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Active Listings");
    const [sortBy, setSortBy] = useState("Newest First");
    const [selectedHorse, setSelectedHorse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const { listings, loading } = useSelector((state) => state.profile);
    const realHorses = listings?.results || [];
    const stats = listings?.total_listing || { active_listings: 0, horses_sold: 0 };


    useEffect(() => {
        dispatch(userListings())
    }, [])

    // Filtering Logic
    console.log(realHorses, "raw realHorses before filtering");
    const filteredHorses = realHorses.filter(horse => {
        const s = horse.status?.toLowerCase() || '';
        if (activeTab === "Active Listings") return ["approved", "pending", "rejected", "active"].includes(s);
        if (activeTab === "Drafts") return s === "draft";
        if (activeTab === "Sold History") return s === "sold";
        return true;
    });
    console.log(filteredHorses, `filteredHorses for tab ${activeTab}`);

    // Mapping for display
    const mappedHorses = filteredHorses.map(horse => {
        const step1 = horse.listing_step1 || {};
        const step2 = horse.listing_step2 || {};

        return {
            id: horse.id,
            name: step1.name || "Unnamed Horse",
            image: step2.photos?.[0] ? step2.photos[0] : marketplace1.src,
            breed: step1.breed || "Horse",
            gender: step1.gender || "Gender",
            price: step1.price || 0,
            age: step1.age || "N/A",
            height: step1.height || "N/A",
            status: horse.status?.charAt(0).toUpperCase() + horse.status?.slice(1),
            date: new Date(horse.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            createdAt: new Date(horse.created_at)
        };
    });

    // Sorting Logic
    const sortedHorses = [...mappedHorses].sort((a, b) => {
        if (sortBy === "Newest First") return b.createdAt - a.createdAt;
        if (sortBy === "Price: Low to High") return a.price - b.price;
        if (sortBy === "Price: High to Low") return b.price - a.price;
        return 0;
    });

    // Tab Counts
    const counts = {
        active: realHorses.filter(h => ["approved", "pending", "rejected", "active"].includes(h.status?.toLowerCase())).length,
        drafts: realHorses.filter(h => h.status?.toLowerCase() === "draft").length,
        sold: realHorses.filter(h => h.status?.toLowerCase() === "sold").length
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
                    <MyHorseStats stats={counts} />
                    <ListingTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        counts={counts}
                    />

                    {/* Table View */}
                    <MyHorseTable
                        horses={sortedHorses}
                        onView={(horse) => {
                            const originalHorse = realHorses.find(h => h.id === horse.id);
                            const step1 = originalHorse?.listing_step1 || {};
                            const step3 = originalHorse?.listing_step3 || {};

                            setSelectedHorse({
                                id: horse.id,
                                name: horse.name,
                                breed: horse.breed,
                                image: horse.image,
                                age: step1.age || "N/A",
                                height: step1.height || "N/A",
                                location: step1.location || "N/A",
                                price: `$${Number(horse.price).toLocaleString()}`,
                                status: horse.status,
                                rejectionReason: originalHorse?.rejection_reason || ""
                            });
                            setIsModalOpen(true);
                        }}
                    />
                </div>
            </main>

            {selectedHorse && (
                <ListingDetailsModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    listing={selectedHorse}
                />
            )}
        </div>
    );
}
