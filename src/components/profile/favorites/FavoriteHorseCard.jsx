"use client";

import Image from "next/image";
import { Heart, MapPin } from "lucide-react";

export default function FavoriteHorseCard({ horse }) {
    const { name, breed, price, age, sex, discipline, skillLevel, location, image, badge } = horse;

    return (
        <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 group hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500">
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />

                {/* Heart Icon */}
                <button className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all">
                    <Heart size={18} className="text-red-500 fill-red-500" />
                </button>

                {/* Badge (if exists) */}
                {badge && (
                    <div className="absolute top-5 left-5">
                        <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                            {badge}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-2 md:p-3">
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <h3 className="font-[600] text-gray-900 text-xl group-hover:text_color transition-colors tracking-tight">
                            {name}
                        </h3>
                        <p className="text-gray-500 text-sm font-[500]">{breed}</p>
                    </div>
                    <span className="text_color font-black text-xl tracking-tighter">${price.toLocaleString()}</span>
                </div>

                {/* Horse Details */}
                <div className="grid grid-cols-2 gap-2 mb-3 pt-3 border-t border-gray-50">
                    <div>
                        <p className="text-[10px] font-[600] text-gray-500 uppercase tracking-wider mb-1">Age</p>
                        <p className="text-sm font-[600] text-gray-900">{age}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-[600] text-gray-500 uppercase tracking-wider mb-1">Sex</p>
                        <p className="text-sm font-[600] text-gray-900">{sex}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-[600] text-gray-500 uppercase tracking-wider mb-1">Discipline</p>
                        <p className="text-sm font-[600] text-gray-900">{discipline}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-[600] text-gray-500 uppercase tracking-wider mb-1">Skill Level</p>
                        <p className="text-sm font-[600] text-gray-900">{skillLevel}</p>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 mb-3">
                    <MapPin size={14} className="text-gray-400" />
                    <span className="text-xs font-[500] text-gray-500">{location}</span>
                </div>

                {/* View Profile Button */}
                <button className="w-full py-2.5 bg-gray-50 text-gray-600 rounded-xl text-sm font-[600] hover:bg-blue-50 hover:text_color transition-all border border-gray-100">
                    View Profile →
                </button>
            </div>
        </div>
    );
}
