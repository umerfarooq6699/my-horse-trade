"use client";

import { Bookmark } from "lucide-react";

export default function FavoritesHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-3">
            <div>
                <h1 className="text-2xl md:text-4xl font-[600] text-gray-900 tracking-tight mb-2">My Saved Horses</h1>
                <p className="text-gray-500 font-[500]">Keep track of the horses you love. Compare prices, breeds, and save your top picks.</p>
            </div>
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 text-sm font-[600] text-gray-600 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
                    <Bookmark size={18} className="text-gray-600" />
                    Manage Saved
                </button>
            </div>
        </div>
    );
}
