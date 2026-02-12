"use client";

import { Tag, Gavel, Info } from "lucide-react";
import { useState } from "react";

export default function SaleMethodSection() {
    const [method, setMethod] = useState("Auction"); // "Fixed" or "Auction"

    return (
        <section className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <Tag size={20} strokeWidth={2.5} />
                </div>
                <h2 className="text-xl font-bold text-[#1e293b]">Sale Method</h2>
            </div>

            <div className="flex flex-col gap-8">
                {/* Method Toggle */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => setMethod("Fixed")}
                        className={`flex flex-col items-center gap-3 p-6 rounded-[28px] border-2 transition-all ${method === 'Fixed'
                            ? 'border_color bg-blue-50/30'
                            : 'border-gray-100 hover:border-gray-200 bg-gray-50/30'
                            }`}
                    >
                        <Tag size={24} className={method === 'Fixed' ? 'text_color' : 'text-gray-300'} />
                        <span className={`text-[12px] font-bold uppercase tracking-wider ${method === 'Fixed' ? 'text-[#1e293b]' : 'text-gray-400'
                            }`}>
                            Fixed Price
                        </span>
                    </button>
                    <button
                        onClick={() => setMethod("Auction")}
                        className={`flex flex-col items-center gap-3 p-6 rounded-[28px] border-2 transition-all ${method === 'Auction'
                            ? 'border_color bg-blue-50/30'
                            : 'border-gray-100 hover:border-gray-200 bg-gray-50/30'
                            }`}
                    >
                        <Gavel size={24} className={method === 'Auction' ? 'text_color' : 'text-gray-300'} />
                        <span className={`text-[12px] font-bold uppercase tracking-wider ${method === 'Auction' ? 'text-[#1e293b]' : 'text-gray-400'
                            }`}>
                            Auction
                        </span>
                    </button>
                </div>

                {method === "Auction" && (
                    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        {/* Auction Info Alert */}
                        <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50 flex gap-4">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                                <Info size={18} className="text_color" />
                            </div>
                            <p className="text-[11px] font-medium text-gray-500 leading-relaxed pt-1">
                                Auctions generate excitement. Set your limits below to start the bidding process.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Starting Bid ($)</label>
                                </div>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-[13px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Reserve Price ($)</label>
                                    <span className="text-[9px] font-bold text-gray-300 uppercase underline cursor-help">(Optional)</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-[13px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all pr-12"
                                    />
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 cursor-help">
                                        <Info size={14} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Auction Duration</label>
                                <select className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-[13px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all appearance-none cursor-pointer">
                                    <option value="7">7 Days</option>
                                    <option value="14">14 Days</option>
                                    <option value="30">30 Days</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Buy It Now Price ($)</label>
                                    <span className="text-[9px] font-bold text-gray-300 uppercase underline cursor-help">(Optional)</span>
                                </div>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-[13px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {method === "Fixed" && (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="flex flex-col gap-2">
                            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Asking Price ($)</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-[13px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
