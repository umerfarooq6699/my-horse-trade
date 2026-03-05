"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Ruler, Calendar, Pencil } from "lucide-react";
import marketplace1 from "@/assets/images/marketplace1.png";
import marketplace2 from "@/assets/images/marketplace2.png";
import marketplace3 from "@/assets/images/marketplace3.png";

const horses = [
    {
        id: 1,
        name: "Thunderbolt",
        price: "$12,500",
        breed: "Arabian",
        age: "5 Years",
        gender: "Stallion",
        status: "Active",
        timeAgo: "3d ago",
        views: "1.2k",
        favorites: "45",
        image: marketplace1
    },
    {
        id: 2,
        name: "Rusty Spirit",
        price: "$8,200",
        breed: "Quarter Horse",
        age: "7 Years",
        gender: "Gelding",
        status: "Active",
        timeAgo: "1w ago",
        views: "850",
        favorites: "22",
        image: marketplace2
    },
    {
        id: 3,
        name: "Midnight Star",
        price: "$25,000",
        breed: "Friesian",
        age: "4 Years",
        gender: "Mare",
        status: "Pending",
        timeAgo: "2w ago",
        views: "2.5k",
        favorites: "156",
        image: marketplace3
    }
];

export default function ActiveListings() {
    return (
        <div className="col-span-12 xl:col-span-12 space-y-3">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-[600] text-gray-900 tracking-tight">Active Listings</h2>
                <button className="text-xs font-black text_color hover:opacity-80 uppercase tracking-widest">View All (5)</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                {horses.map((horse) => (
                    <div key={horse.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 flex flex-col h-full">
                        {/* Image Container */}
                        <div className="relative h-[160px] md:h-[210px] overflow-hidden">
                            <img
                                src={horse.image.src || horse.image}
                                alt={horse.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Badges */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${horse.status === 'Active' ? 'bg-green-500 text-white' : 'bg-[#FF6B00] text-white'
                                    }`}>
                                    {horse.status}
                                </span>
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-gray-900 shadow-sm uppercase tracking-wider">
                                    {horse.timeAgo}
                                </span>
                            </div>

                            {/* Favorite Button */}
                            <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
                                <Heart size={18} />
                            </button>
                        </div>

                        {/* Content Container */}
                        <div className="p-2 sm:p-3 flex flex-col flex-1">
                            <div className="mb-2 sm:mb-4">
                                <h3 className="mobile_heading lg_leading">{horse.name}</h3>
                                <p className="mobile_para">{horse.breed || "Horse"}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-y-2 sm:gap-y-1 gap-x-2 mb-2 sm:mb-0">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Calendar size={16} className="text_color" />
                                    <span className="mobile_para underline decoration-blue-100 decoration-2 underline-offset-4">{horse.age || "5"} Years</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Ruler size={16} className="text_color" />
                                    <span className="mobile_para underline decoration-blue-100 decoration-2 underline-offset-4">{horse.height || "15.0"} hh</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 col-span-2">
                                    <MapPin size={16} className="text_color" />
                                    <span className="mobile_para underline decoration-blue-100 decoration-2 underline-offset-4">{horse.location || "Louisville, KY"}</span>
                                </div>
                            </div>

                            <div className="mt-auto sm:pt-4 border-t border-gray-50 flex items-center justify-between">
                                <div>
                                    <p className="mobile_para !text-[10px] uppercase tracking-wider">Price</p>
                                    <p className="mobile_heading lg_leading !text_color">{horse.price}</p>
                                </div>
                                <Link
                                    href="/sell-horse"
                                    className="flex items-center gap-1.5 px-5 py-2.5 bg-gray-50 text-gray-600 text-[11px] font-black uppercase tracking-wider rounded-xl hover:bg-blue-50 hover:text_color transition-all active:scale-[0.98] border border-transparent hover:border-blue-100 cursor-pointer"
                                >
                                    Edit Listing
                                    <Pencil size={14} className="text-green-500" strokeWidth={3} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
