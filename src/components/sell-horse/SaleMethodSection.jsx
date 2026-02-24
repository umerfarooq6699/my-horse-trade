"use client";

import { Tag, Gavel, Info } from "lucide-react";
import { useState } from "react";

export default function SaleMethodSection() {
    const [method, setMethod] = useState("Auction"); // "Fixed" or "Auction"

    return (
        <section className="bg-white rounded-[10px] md:rounded-[20px] p-4 md:p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <Tag size={20} strokeWidth={2.5} />
                </div>
                <h2 className="text-[20px] font-[700] text-[#1e293b]">Sale Method</h2>
            </div>

            <div className="flex flex-col gap-8">
                {/* Method Toggle */}
                <div className="flex gap-3 md:gap-4">
                    <button
                        onClick={() => setMethod("Fixed")}
                        className={`flex flex-col items-center justify-center gap-2 p-3 md:p-4 w-[110px] md:w-[140px] aspect-square rounded-[15px] md:rounded-[20px] border-2 transition-all ${method === 'Fixed'
                            ? 'border_color bg-blue-50/30'
                            : 'border-gray-100 hover:border-gray-200 bg-gray-50/30'
                            }`}
                    >
                        <Tag size={20} className={method === 'Fixed' ? 'text_color' : 'text-gray-300'} />
                        <span className={`text-[10px] md:text-[12px] font-bold uppercase text-center leading-tight ${method === 'Fixed' ? 'text-[#1e293b]' : 'text-gray-400'
                            }`}>
                            Fixed Price
                        </span>
                    </button>
                    <button
                        onClick={() => setMethod("Auction")}
                        className={`flex flex-col items-center justify-center gap-2 p-3 md:p-4 w-[110px] md:w-[140px] aspect-square rounded-[15px] md:rounded-[20px] border-2 transition-all ${method === 'Auction'
                            ? 'border_color bg-blue-50/30'
                            : 'border-gray-100 hover:border-gray-200 bg-gray-50/30'
                            }`}
                    >
                        <Gavel size={20} className={method === 'Auction' ? 'text_color' : 'text-gray-300'} />
                        <span className={`text-[10px] md:text-[12px] font-bold uppercase ${method === 'Auction' ? 'text-[#1e293b]' : 'text-gray-400'
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b]">Starting Bid ($)</label>
                                </div>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b]">Reserve Price ($)</label>
                                    <span className="text-[9px] font-bold text-gray-300 uppercase underline cursor-help">(Optional)</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all pr-12"
                                    />
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 cursor-help">
                                        <Info size={14} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Auction Duration</label>
                                <select className="w-full bg-gray-50/50 border border-gray-100 rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all appearance-none cursor-pointer">
                                    <option value="7">7 Days</option>
                                    <option value="14">14 Days</option>
                                    <option value="30">30 Days</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b]">Buy It Now Price ($)</label>
                                    <span className="text-[9px] font-bold text-gray-300 uppercase underline cursor-help">(Optional)</span>
                                </div>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {method === "Fixed" && (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Asking Price ($)</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
