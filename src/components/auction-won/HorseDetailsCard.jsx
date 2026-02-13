"use client";

import React from "react";

export default function HorseDetailsCard({ horse }) {
    return (
        <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row">
            {/* Horse Image */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
                <img
                    src={horse.image || "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=800"}
                    alt={horse.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Horse Info */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h2 className="text-3xl font-black text-[#1e293b] tracking-tight">{horse.name}</h2>
                            <p className="text-sm font-bold text-gray-400 mt-1 uppercase tracking-wide">
                                {horse.breed} • {horse.gender} • {horse.age} Years Old
                            </p>
                        </div>
                        <div className="bg-gray-50 px-3 py-2 rounded-xl border border-gray-100 text-center min-w-[70px]">
                            <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Lot</span>
                            <span className="block text-sm font-black text-[#1e293b]">#{horse.lot}</span>
                        </div>
                    </div>

                    <div className="h-px bg-gray-100 w-full my-6 dashed-border"></div>

                    <div className="flex gap-12">
                        <div>
                            <span className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">Winning Bid</span>
                            <span className="text-2xl font-black text-[#1e293b] transition-all hover:text_color cursor-default">
                                ${horse.winningBid?.toLocaleString()}
                            </span>
                        </div>
                        <div>
                            <span className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">Location</span>
                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text_color"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span className="text-sm font-bold text-[#1e293b]">{horse.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 mt-8">
                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border-2 border-gray-100 text-sm font-black text-[#1e293b] hover:bg-gray-50 transition-all active:scale-[0.98]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                        View Listing
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border-2 border-gray-100 text-sm font-black text-[#1e293b] hover:bg-gray-50 transition-all active:scale-[0.98]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        Message Seller
                    </button>
                </div>
            </div>

            <style jsx>{`
        .dashed-border {
          background-image: linear-gradient(to right, #e5e7eb 50%, transparent 50%);
          background-size: 8px 1px;
          background-repeat: repeat-x;
        }
      `}</style>
        </div>
    );
}
