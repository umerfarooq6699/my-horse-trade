"use client";

import Image from "next/image";
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
                            <Image
                                src={horse.image}
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
                        </div>

                        {/* Content */}
                        <div className="p-2 sm:p-3 flex flex-col flex-1">
                            <div className="mb-2 sm:mb-4">
                                <h3 className="mobile_heading lg_leading">{horse.name}</h3>
                                <p className="mobile_para">{horse.breed}</p>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1.5 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                    <span className="text-[11px] font-bold">{horse.views}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                    <span className="text-[11px] font-bold">{horse.favorites}</span>
                                </div>
                            </div>

                            <div className="mt-auto sm:pt-4 border-t border-gray-50 flex items-center justify-between">
                                <div>
                                    <p className="mobile_para uppercase text-[10px] tracking-wider">Price</p>
                                    <p className="mobile_heading lg_leading !text_color">{horse.price}</p>
                                </div>
                                <button className="flex items-center gap-1.5 px-5 py-2.5 bg-gray-50 text-gray-600 text-[11px] font-black uppercase tracking-wider rounded-xl hover:bg-blue-50 hover:text_color transition-all active:scale-[0.98] border border-transparent hover:border-blue-100">
                                    Edit Listing
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
