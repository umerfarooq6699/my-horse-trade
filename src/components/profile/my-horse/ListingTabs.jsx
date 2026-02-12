"use client";

import { ChevronDown, ListFilter } from "lucide-react";
import { useState } from "react";

const tabs = [
    { name: "Active Listings", count: 3 },
    { name: "Drafts", count: 1 },
    { name: "Sold History", count: null },
];

export default function ListingTabs() {
    const [activeTab, setActiveTab] = useState("Active Listings");

    return (
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-8 border-b border-gray-100/50 pb-1">
            <div className="flex items-center gap-8 overflow-x-auto pb-4 xl:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`pb-4 px-1 text-[12px] font-semibold transition-all relative ${activeTab === tab.name
                            ? "text_color"
                            : "text-slate-600 hover:text-slate-900"
                            }`}
                    >
                        {tab.name}
                        {tab.count !== null && (
                            <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === tab.name ? "bg-blue-50 text_color" : "bg-gray-50 text-gray-500"
                                }`}>
                                {tab.count}
                            </span>
                        )}
                        {activeTab === tab.name && (
                            <div className="absolute bottom-0 left-0 w-full h-1 bg_color rounded-t-full"></div>
                        )}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-3 pb-4 md:pb-0">
                <div className="relative group">
                    <button className="flex items-center gap-3 px-5 py-2.5 bg-white border border-gray-100 rounded-xl text-xs font-[600] text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
                        Sort by: <span className="text_color">Newest First</span>
                        <ChevronDown size={14} className="text-gray-600" />
                    </button>
                </div>
                <button className="p-2.5 bg-white border border-gray-100 rounded-xl text-gray-600 hover:text_color hover:bg-gray-50 transition-all shadow-sm">
                    <ListFilter size={18} />
                </button>
            </div>
        </div>
    );
}
