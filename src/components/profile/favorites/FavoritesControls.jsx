"use client";

import { Search, Grid3x3, List } from "lucide-react";

export default function FavoritesControls() {
    return (
        <div className="bg-white p-4 rounded-[30px] border border-gray-100 shadow-sm mb-3">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 w-full sm:max-w-md">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search saved horses..."
                        className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-[500] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl">
                    <button className="p-2.5 bg-white rounded-lg text_color shadow-sm">
                        <Grid3x3 size={18} />
                    </button>
                    <button className="p-2.5 text-gray-400 hover:text-gray-600 transition-colors">
                        <List size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
