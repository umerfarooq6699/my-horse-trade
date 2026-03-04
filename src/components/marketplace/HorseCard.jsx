"use client";

"use client";

import { Heart, MapPin, Ruler, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HorseCard({ horse }) {
    const {
        id,
        name,
        breed,
        age,
        height,
        location,
        price,
        image,
        tag,
        isPremium,
        isVerified,
        isNew,
        category // Adding category as a fallback for breed/discipline
    } = horse;

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative h-[160px] md:h-[210px] overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    {isPremium && (
                        <span className="px-3 py-1 bg_color text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            Premium
                        </span>
                    )}
                    {isVerified && (
                        <span className="px-3 py-1 bg-green-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            Verified
                        </span>
                    )}
                    {isNew && (
                        <span className="px-3 py-1 bg-blue-50 text_color text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            New
                        </span>
                    )}
                    {tag && !isPremium && !isVerified && !isNew && (
                        <span className="px-3 py-1 bg-[#FF6B00] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            {tag}
                        </span>
                    )}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
                    <Heart size={18} />
                </button>
            </div>

            {/* Content Container */}
            <div className="p-2 sm:p-3 flex flex-col flex-1">
                <div className="mb-2 sm:mb-4">
                    <h3 className="mobile_heading lg_leading">{name}</h3>
                    <p className="mobile_para">{breed || category || "Horse"}</p>
                </div>

                <div className="grid grid-cols-2 gap-y-2 sm:gap-y-1 gap-x-2 mb-2 sm:mb-0">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} className="text_color" />
                        <span className="mobile_para">{age || "N/A"} Years</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Ruler size={16} className="text_color" />
                        <span className="mobile_para">{height || "15.0"} hh</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 col-span-2">
                        <MapPin size={16} className="text_color" />
                        <span className="mobile_para">{location || "Location N/A"}</span>
                    </div>
                </div>

                <div className="mt-auto sm:pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div>
                        <p className="mobile_para">Price</p>
                        <p className="mobile_heading lg_leading">${price ? price.toLocaleString() : "Contact"}</p>
                    </div>
                    <Link
                        href={`/marketplace/${id || 1}`}
                        className="flex items-center gap-1.5 px-5 py-2.5 bg_color text-white text-[11px] font-black uppercase tracking-wider rounded-xl hover:opacity-90 hover:shadow-lg hover:shadow-blue-200/50 transition-all active:scale-[0.98]"
                    >
                        Details
                        <ChevronRight size={14} strokeWidth={3} />
                    </Link>
                </div>

            </div>
        </div>
    );
}
