"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export default function EscrowSummary({ horse, summary }) {
    return (
        <div className="bg-white rounded-[10px] sm:rounded-[20px] p-4 sm:p-6 border border-gray-100 shadow-sm space-y-3">
            <div className="flex justify-between items-center mb-2">
                <h3 className="mobile_heading lg_heading">Transaction Summary</h3>
                <span className="px-3 py-1 bg-green-50 text-green-600 mobile_para rounded-lg border border-green-100">Pending Deposit</span>
            </div>

            {/* Horse Preview */}
            <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100 flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                    <img src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=200" alt="Horse" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="text-sm font-black text-[#1e293b]">{horse.name}</h4>
                    <p className="mobile_para capitalize">{horse.breed} • {horse.age}yo</p>
                    <p className="mobile_para mt-0.5">ID: {horse.id}</p>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                    <span className="mobile_para">Sale Price</span>
                    <span className="font-[600] sm:font-[700] text-black text-[16px] sm:text-[19px]">${summary.price?.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1.5">
                        <span className="mobile_para">Escrow Fee (1.5%)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 cursor-help"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                    </div>
                    <span className="font-[600] sm:font-[700] text-black text-[16px] sm:text-[19px]">${summary.fee?.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="mobile_para">Vet Inspection</span>
                    <span className="font-[600] sm:font-[700] text-green-600 shrink-0 uppercase text-[11px] tracking-widest bg-green-50 px-2 py-1 rounded-md">Included</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="mobile_para">Transport Insurance</span>
                    <div className="text-right">
                        <span className="font-[600] sm:font-[700] text-black text-[16px] sm:text-[19px] block">$0.00</span>
                        <span className="text-[10px] text-gray-300 font-bold italic">Not selected</span>
                    </div>
                </div>

                <div className="h-px bg-gray-50 my-1"></div>

                <div className="flex justify-between items-center">
                    <span className="mobile_heading lg_heading">Total Due</span>
                    <span className="text-xl font-[700] text_color">${summary.total?.toLocaleString()}.00</span>
                </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 text-[11px] font-black text_color uppercase tracking-widest hover:translate-x-1 transition-all pt-2">
                View Full Invoice
                <ExternalLink size={14} strokeWidth={2.5} />
            </button>
        </div>
    );
}
