"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export default function EscrowSummary({ horse, summary }) {
    return (
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm space-y-8">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-black text-[#1e293b] tracking-tight">Transaction Summary</h3>
                <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-green-100">Pending Deposit</span>
            </div>

            {/* Horse Preview */}
            <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100 flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                    <img src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=200" alt="Horse" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="text-sm font-black text-[#1e293b]">{horse.name}</h4>
                    <p className="text-[11px] font-bold text-gray-400 capitalize">{horse.breed} • {horse.age}yo</p>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tight mt-0.5">ID: {horse.id}</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-gray-500">Agreed Price</span>
                    <span className="font-black text-[#1e293b]">${summary.price?.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1.5">
                        <span className="font-bold text-gray-500">Escrow Fee (1.5%)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 cursor-help"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                    </div>
                    <span className="font-black text-[#1e293b]">${summary.fee?.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-gray-500">Vet Inspection</span>
                    <span className="font-black text-green-600 shrink-0 uppercase text-[11px] tracking-widest bg-green-50 px-2 py-1 rounded-md">Included</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-gray-500">Transport Insurance</span>
                    <div className="text-right">
                        <span className="font-black text-[#1e293b] block">$0.00</span>
                        <span className="text-[10px] text-gray-300 font-bold italic">Not selected</span>
                    </div>
                </div>

                <div className="h-px bg-gray-50 my-2"></div>

                <div className="flex justify-between items-center">
                    <span className="text-base font-black text-[#1e293b]">Total Due</span>
                    <span className="text-2xl font-black text_color">${summary.total?.toLocaleString()}.00</span>
                </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 text-[11px] font-black text_color uppercase tracking-widest hover:translate-x-1 transition-all">
                View Full Invoice
                <ExternalLink size={14} strokeWidth={2.5} />
            </button>
        </div>
    );
}
