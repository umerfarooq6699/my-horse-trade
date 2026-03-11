"use client";

import { FileDown, Plus } from "lucide-react";

export default function MyHorseHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-3">
            <div>
                <h1 className="text-4xl font-[600] text-gray-900 tracking-tight mb-2">My Horse</h1>
                <p className="mobile_para">Manage your listings, drafts, and sales performance.</p>
            </div>
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 text-sm font-[600] text-gray-600 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
                    <FileDown size={18} className="text-gray-600" />
                    Import
                </button>
                <button className="flex items-center gap-2 px-8 py-3 bg_color text-white text-sm font-black rounded-xl hover:opacity-90 transition-all shadow-lg shadow-blue-100 transform active:scale-95">
                    <Plus size={20} className="stroke-[3]" />
                    List New Horse
                </button>
            </div>
        </div>
    );
}
