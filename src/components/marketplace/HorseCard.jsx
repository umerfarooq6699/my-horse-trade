"use client";

import { Heart, MapPin, Ruler, Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HorseCard({ horse }) {
    const {
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
        isNew
    } = horse;

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    {isPremium && (
                        <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            Premium
                        </span>
                    )}
                    {isVerified && (
                        <span className="px-3 py-1 bg-green-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            Verified
                        </span>
                    )}
                    {isNew && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            New
                        </span>
                    )}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
                    <Heart size={18} />
                </button>
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col flex-1">
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[var(--theme-color)] transition-colors mb-1">{name}</h3>
                    <p className="text-sm text-gray-500">{breed}</p>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} className="text-blue-200" />
                        <span className="text-xs font-medium">{age} Years</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Ruler size={16} className="text-blue-200" />
                        <span className="text-xs font-medium">{height} hh</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 col-span-2">
                        <MapPin size={16} className="text-blue-200" />
                        <span className="text-xs font-medium">{location}</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Price</p>
                        <p className="text-lg font-extrabold text-gray-900">${price.toLocaleString()}</p>
                    </div>
                    <Link
                        href={`/marketplace/${horse.id || 1}`}
                        className="flex items-center gap-1 px-4 py-2 bg-gray-50 text-gray-900 text-xs font-semibold rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all"
                    >
                        Details
                        <ChevronRight size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
