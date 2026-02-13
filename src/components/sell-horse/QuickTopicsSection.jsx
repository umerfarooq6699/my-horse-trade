"use client";

import { PlusCircle } from "lucide-react";

const topics = [
    "Temperament", "Health History", "Competition Results",
    "Trailer Loading", "Ideal Home", "Vices & Quirks"
];

export default function QuickTopicsSection() {
    return (
        <section className="bg-white rounded-[32px] p-4 md:p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <PlusCircle size={20} strokeWidth={2} />
                </div>
                <h2 className="text-xl font-bold text-[#1e293b]">Quick Topics</h2>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <p className="text-[13px] font-medium text-gray-400 leading-relaxed">
                        Click to insert these talking points into your narrative.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {topics.map((topic) => (
                        <button
                            key={topic}
                            className="px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-2xl text-[13px] font-bold text-[#1e293b] hover:bg-blue-50 hover:border_color/30 hover:text_color transition-all text-left group flex items-center justify-between"
                        >
                            {topic}
                            <PlusCircle size={14} className="text-gray-300 group-hover:text_color transition-colors" />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
