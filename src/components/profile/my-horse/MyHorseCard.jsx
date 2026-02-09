"use client";

import { Eye, Heart, Pencil } from "lucide-react";
import Image from "next/image";

export default function MyHorseCard({ horse }) {
    const { name, price, breed, age, gender, status, views, favorites, timeAgo, image } = horse;

    return (
        <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 group hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500">
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />

                {/* Badges */}
                <div className="absolute top-5 left-5 flex gap-2">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg backdrop-blur-md ${status === 'Active' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
                        }`}>
                        <div className="w-2 h-2 rounded-full bg-white opacity-40 animate-pulse"></div>
                        {status}
                    </span>
                </div>

                <div className="absolute top-5 right-5">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black text-gray-900 border border-white shadow-lg uppercase tracking-widest">
                        {timeAgo}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-2 md:p-3">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[600] text-gray-900 text-xl group-hover:text_color transition-colors tracking-tight">
                        {name}
                    </h3>
                    <span className="text_color font-black text-xl tracking-tighter">${price.toLocaleString()}</span>
                </div>
                <p className="text-gray-400 text-[13px] font-bold mb-2 md:mb-4">
                    {breed} • {age} Years • {gender}
                </p>

                {/* Footer / Stats */}
                <div className="flex items-center justify-between border-t border-gray-50/50">
                    <div className="flex items-center gap-6 text-gray-300">
                        <div className="flex items-center gap-2 group/stat cursor-default">
                            <Eye size={18} className="text-gray-600 transition-colors" />
                            <span className="text-xs font-black text-gray-500">{views}</span>
                        </div>
                        <div className="flex items-center gap-2 group/stat cursor-default">
                            <Heart size={16} className="text-gray-600 transition-colors" />
                            <span className="text-xs font-black text-gray-500">{favorites}</span>
                        </div>
                    </div>

                    <button className="p-3 bg-gray-50/50 text-gray-400 hover:text_color hover:bg-blue-50 rounded-2xl transition-all border border-transparent hover:border_color">
                        <Pencil className="text-green-500 cursor-pointer" size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
