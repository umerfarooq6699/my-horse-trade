"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const tags = [
    "Motivated Seller", "Video Available", "Safe for Beginners",
    "Vet Checked", "Imported"
];

export default function MarketingEssentialsSection() {
    const [selectedTags, setSelectedTags] = useState(["Video Available"]);

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <section className="bg-white rounded-[32px] p-4 md:p-8 border border-gray-100 shadow-sm md:mb-8">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <Star size={20} strokeWidth={2} />
                </div>
                <h2 className="text-nowrap sm:text-xl font-bold text-[#1e293b]">Marketing Essentials</h2>
            </div>

            <div className="flex flex-col gap-8">
                {/* Headline */}
                <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-[#1e293b] uppercase tracking-widest ml-1">Listing Headline</label>
                    <input
                        type="text"
                        placeholder="e.g. Grand Prix Potential with Exceptional Lineage!"
                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-[13px] font-medium text-[#1e293b] placeholder:font-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all"
                    />
                    <p className="text-[11px] font-medium text-gray-600 ml-1">A short, catchy phrase that appears on the search card.</p>
                </div>

                {/* Promotional Tags */}
                <div className="flex flex-col gap-4">
                    <label className="text-[11px] font-bold text-[#1e293b] uppercase tracking-widest ml-1">Promotional Tags</label>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-5 py-2.5 rounded-full text-[12px] font-bold transition-all border ${selectedTags.includes(tag)
                                    ? 'bg-blue-50/50 border_color text_color'
                                    : 'bg-white border-gray-100 text-gray-600 hover:border-gray-200 hover:text-[#1e293b]'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
