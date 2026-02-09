"use client";

import Sidebar from "@/components/profile/Sidebar";
import TradeHistoryHeader from "@/components/profile/trade-history/TradeHistoryHeader";
import TradeHistoryStats from "@/components/profile/trade-history/TradeHistoryStats";
import TradeHistoryFilters from "@/components/profile/trade-history/TradeHistoryFilters";
import TradeHistoryTable from "@/components/profile/trade-history/TradeHistoryTable";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function TradeHistoryPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className="lg:pl-64 flex flex-col transition-all duration-300">
                <div className="flex-1 px-4 py-6 md:px-8 lg:px-12 lg:py-10 pt-4 lg:pt-8 space-y-3">
                    {/* Mobile Menu Toggle & Header */}
                    <div className="lg:hidden flex items-center justify-between bg-white px-3 py-2 md:px-6 md:py-4 rounded-2xl border border-gray-200 shadow-sm mb-4">
                        <h1 className="text-[19px] font-[600]">Trade History</h1>
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2.5 bg-gray-50 rounded-xl text-gray-600 hover:text_color transition-colors"
                        >
                            <Menu size={22} />
                        </button>
                    </div>

                    <TradeHistoryHeader />
                    <TradeHistoryStats />
                    <TradeHistoryFilters />
                    <TradeHistoryTable />
                </div>
            </main>
        </div>
    );
}
