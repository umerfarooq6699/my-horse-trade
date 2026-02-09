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
                    <div key={horse.id} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 group hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500">
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src={horse.image}
                                alt={horse.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            {/* Badges */}
                            <div className="absolute top-5 left-5 flex gap-2">
                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg backdrop-blur-md ${horse.status === 'Active' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
                                    }`}>
                                    <div className="w-2 h-2 rounded-full bg-white opacity-40 animate-pulse"></div>
                                    {horse.status}
                                </span>
                            </div>
                            <div className="absolute top-5 right-5">
                                <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black text-gray-900 border border-white shadow-lg uppercase tracking-widest">
                                    {horse.timeAgo}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-2 md:p-3">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-[600] text-gray-900 text-xl group-hover:text_color transition-colors tracking-tight">{horse.name}</h3>
                                <span className="text_color font-black text-xl tracking-tighter">{horse.price}</span>
                            </div>
                            <p className="text-gray-400 text-[13px] font-bold mb-2 md:mb-4">
                                {horse.breed} • {horse.age} • {horse.gender}
                            </p>

                            <div className="flex items-center justify-between border-t border-gray-50/50">
                                <div className="flex items-center gap-6 text-gray-300">
                                    <div className="flex items-center gap-2 group/stat cursor-default">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 transition-colors"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        <span className="text-xs font-black text-gray-500">{horse.views}</span>
                                    </div>
                                    <div className="flex items-center gap-2 group/stat cursor-default">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 transition-colors"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                        <span className="text-xs font-black text-gray-500">{horse.favorites}</span>
                                    </div>
                                </div>
                                <button className="p-3 bg-gray-50/50 text-gray-400 hover:text_color hover:bg-blue-50 rounded-2xl transition-all border border-transparent hover:border_color">
                                    <svg className="text-green-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
