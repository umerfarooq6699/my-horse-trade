"use client";

import { Search, ChevronDown, Calendar } from "lucide-react";

export default function TradeHistoryFilters() {
    return (
        <div className="bg-white p-4 rounded-[30px] border border-gray-100 shadow-sm mb-3">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Search */}
                <div className="relative flex-1 w-full">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-[500] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                    {/* Type Filter */}
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-[600] text-gray-600 hover:bg-gray-100 transition-all">
                        All Types
                        <ChevronDown size={14} className="text-gray-600" />
                    </button>

                    {/* Status Filter */}
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-[600] text-gray-600 hover:bg-gray-100 transition-all">
                        All Status
                        <ChevronDown size={14} className="text-gray-600" />
                    </button>

                    {/* Date Range */}
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-[600] text-gray-900 hover:bg-gray-50 transition-all">
                        <Calendar size={16} className="text-gray-600" />
                        Last 30 Days
                    </button>
                </div>
            </div>
        </div>
    );
}
